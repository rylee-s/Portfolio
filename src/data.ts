import {
  Response,
} from "./components/EmploymentTree/expierience.types";
import data from "./data.json" assert { type: "json" };


export const getData = async () => {
  return cleanData(data as Response);
};

// clean data to add duration to each company and position
const cleanData = (data: Response) => {
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
        ...company.positions.map((position) =>
          new Date(position.endDate).getTime(),
        ),
      ),
    );

    company.duration = duration(compStartDate, compEndDate);

    company.positions.map((position) => {
      // format date to Month, Year
      const startDate = new Date(position.startDate).toLocaleString("en-US", {
        month: "long",
        year: "numeric",
      });

      const endDate = new Date(position.endDate).toLocaleString("en-US", {
        month: "long",
        year: "numeric",
      });
      position.dates = {
        start: startDate,
        end: endDate,
        duration: "",
      };
      position.dates.duration = duration(
        new Date(position.startDate),
        new Date(position.endDate),
      );
    });
  });
  return data;
};

// format duration to string
const formatDuration = (years: number, months: number) => {
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
  months ++

  if (months < 0) {
    years--;
    months += 12;
  }
  return formatDuration(years, months);
};
