import EduCard from "./EduCard";
import { Section, Item } from "../Global/Tiles";
import { Education } from "../../Data/types";

export default function Certifications({
  education,
}: {
  education: Education[];
}) {
  return (
    <div className="m-auto max-w-3xl">
      <Section>
        {education &&
          education.map((education, index) => (
            <div className="my-4 first:mt-0 last:mb-0" key={index}>
              <Item>
                <EduCard education={education} key={index} />
              </Item>
            </div>
          ))}
      </Section>
    </div>
  );
}
