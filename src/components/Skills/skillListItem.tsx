import { Skill } from "../../types/ResumeData";
import { useState, useEffect } from "react";
import { Duration } from "../Global/Label";
export default function SkillListItem({
  skill,
  index,
}: {
  skill: Skill;
  index: number;
}) {
  const [width, setWidth] = useState(0);
  const delay = index * 100;

  // Set width of skill bar after delay to create a staggered animation
  useEffect(() => {
    setTimeout(() => {
      setWidth(skill.level);
    }, delay);
  }, [skill, delay]);

  return (
    <li className="flex flex-wrap justify-between gap-1 py-4 first:pt-0 last:pb-0">
      <div className="font-bold">{skill.label}</div>
      <div className="my-auto mb-3 h-6 w-full rounded-lg bg-neutral-300">
        <div
          className="h-6 rounded-lg bg-blue-600 text-center align-middle delay-150 duration-1000"
          style={{ width: `${width}%` }}
        ></div>
      </div>
      {skill.skillDuration && (
        <div className="flex flex-row gap-x-2">
          <Duration duration={skill.skillDuration.duration} />
        </div>
      )}
    </li>
  );
}
