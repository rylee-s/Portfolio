import { ResumeData, SkillCategory } from "./Data/types";
import data from "./Data/Data";

export const getData = async () => {
  return cleanData(data);
};

// clean data to add duration to each company and position
const cleanData = (data: ResumeData) => {
  let skills = [] as SkillCategory[];
  const experience = data.experience;
  experience.map((company) => {
    // get the lowest start date and highest end date
    // to get the duration of the company
    const compStartDate = new Date(
      Math.min(
        ...company.positions.map((position) =>
          new Date(position.startDate).getTime(),
        ),
      ),
    );
    const compEndDate = new Date(
      Math.max(
        ...company.positions.map((position) => {
          const endDate =
            (position.endDate != "Present" && position.endDate) ||
            new Date().toISOString();
          return new Date(endDate).getTime();
        }),
      ),
    );

    const { years, months } = duration(compStartDate, compEndDate);

    if (company.skills) {
      skills = updateSkills(
        skills,
        company.skills,
        new Date(compStartDate),
        new Date(compEndDate),
      );
    }

    company.duration = formatDuration(years, months);

    company.positions.map((position) => {
      // format date to Month, Year
      const startDate = new Date(position.startDate).toLocaleString("en-US", {
        month: "long",
        year: "numeric",
      });

      let endDate = new Date(position.endDate || new Date()).toLocaleString(
        "en-US",
        {
          month: "long",
          year: "numeric",
        },
      );
      if (endDate === "Invalid Date") {
        position.endDate = new Date().toISOString();
        endDate = "Present";
      }
      position.dates = {
        start: startDate,
        end: endDate,
        duration: "",
      };
      // Combine skills from this position with the global skills array. Duplicates should have their durations added.

      const { years, months } = duration(
        new Date(position.startDate),
        new Date(position.endDate || new Date()),
      );
      position.dates.duration = formatDuration(years, months);
      position.endDate = endDate;
      if (position.skills) {
        skills = updateSkills(
          skills,
          position.skills,
          new Date(position.startDate),
          new Date(position.endDate),
        );
      }
    });
  });
  data.skills = skills;
  return data;
};

// format duration to string
const formatDuration = (years: number, months: number) => {
  // if months are greater than 12, convert to years
  if (months >= 12) {
    years += Math.floor(months / 12);
    months = months % 12;
  }
  const yearString = years === 1 ? "year" : "years";
  const monthString = months === 1 ? "month" : "months";

  return `${years > 0 ? `${years} ${yearString} ` : ""}${
    months > 0 ? `${months} ${monthString}` : ""
  }`;
};

// calculate duration between two dates in years and months
const duration = (startDate: Date, endDate: Date) => {
  let years = endDate.getFullYear() - startDate.getFullYear();
  let months = endDate.getMonth() - startDate.getMonth();
  months++;

  if (months < 0) {
    years--;
    months += 12;
  }
  return { years: years, months: months };
};

const updateSkills = (
  globalSkills: SkillCategory[],
  newSkills: SkillCategory[],
  startDate: Date,
  endDate: Date,
) => {
  newSkills.map((skillCategory) => {
    const { years, months } = duration(startDate, endDate);
    // add new skill category if it doesn't exist
    if (
      !globalSkills.find(
        (skill) => skill.categoryLabel === skillCategory.categoryLabel,
      ) &&
      skillCategory.categoryLabel !== ""
    ) {
      globalSkills.push({
        categoryLabel: skillCategory.categoryLabel,
        skills: [],
      });
    }
    const globalSkillCategory = globalSkills.find(
      (skill) => skill.categoryLabel === skillCategory.categoryLabel,
    );
    // take each skill in the category
    skillCategory.skills.map((skill) => {
      // if the skill doesn't exist, add it to the global skills array
      if (!globalSkillCategory?.skills.find((s) => s.label === skill.label)) {
        globalSkillCategory?.skills.push({
          label: skill.label,
          level: skill.level,
          skillDuration: {
            years: years,
            months: months,
            duration: formatDuration(years, months),
          },
        });
      } else {
        // if the skill does exist, update the duration
        const globalSkill = globalSkillCategory.skills.find(
          (s) => s.label === skill.label,
        );
        if (globalSkill?.skillDuration) {
          globalSkill.skillDuration.years += years;
          globalSkill.skillDuration.months += months;
        }
      }
    });
  });

  // call duration function to update the duration of each skill
  globalSkills.map((skillCategory) => {
    skillCategory.skills.map((skill) => {
      if (skill.skillDuration) {
        skill.skillDuration.duration = formatDuration(
          skill.skillDuration.years,
          skill.skillDuration.months,
        );
      }
    });
  });
  return globalSkills;
};
