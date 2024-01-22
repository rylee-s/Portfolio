import { SkillCategory } from "../EmploymentTree/expierience.types";
import { useState } from "react";
import SkillListItem from "./skillListItem";
import { log } from "../Global/Event";

export default function Skills({ skills }: { skills: SkillCategory[] }) {
  // sort skills by level
  skills.forEach((skillCategory) => {
    skillCategory.skills.sort((a, b) => b.level - a.level);
  });

  const updateSelectedCategory = (skillCategory: SkillCategory) => {
    setSelectedCategory(skillCategory);
    log("skill_select", {
      value: skillCategory.categoryLabel,
    });
  };

  const [selectedCategory, setSelectedCategory] = useState<SkillCategory>(
    skills[0],
  );
  return (
    <>
      <section className="w-[100%]">
        <div className="m-auto my-4 max-w-5xl flex-wrap justify-center space-x-1 space-y-1 rounded-lg bg-gray-300 shadow-lg transition-all delay-150 duration-1000 lg:p-6">
          <div className="space-1 sm:space-0 flex flex-wrap lg:flex-nowrap">
            <ul className="m-2 flex h-[100%] w-[100%] list-none flex-wrap lg:mr-4 lg:flex-col">
              {skills.map((skillCategory, index) => (
                <li
                  data-active={selectedCategory === skills[index]}
                  className=" mx-0.5 my-1 flex-grow rounded-xl border-e bg-gray-100 px-1 text-center text-sm shadow-xl data-active:bg-blue-700 lg:first:mt-0 lg:last:mb-0"
                  key={index}
                >
                  <a
                    data-active={selectedCategory === skills[index]}
                    onClick={() => updateSelectedCategory(skills[index])}
                    className="my-2 block border-x-0 font-bold uppercase leading-tight text-blue-700 data-active:text-gray-100 lg:p-4"
                  >
                    {skillCategory.categoryLabel}
                  </a>
                </li>
              ))}
            </ul>

            <div className="mt-2 block w-full rounded-lg bg-gray-100 p-4 text-gray-700 shadow-lg lg:mb-2">
              <h2 className="text-center font-bold text-gray-900">
                Proficiency
              </h2>
              <ul className="divide-y divide-slate-300">
                {selectedCategory.skills.map((skill, index) => (
                  <SkillListItem
                    skill={skill}
                    index={index}
                    key={skill.label}
                  />
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
