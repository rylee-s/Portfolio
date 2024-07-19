import { CalendarIcon } from "../Global/Icon";
import { Duration, Location } from "../Global/Label";
import { Section } from "../Global/Tiles";
import { Company } from "../../types/ResumeData";
import PositionSection from "./positionSection";
import TitleLinkPill from "../Global/TitleLinkPill";

export default function CompanyCard({ company }: { company: Company }) {
  return (
    <li className="mb-2 border-l-2 border-blue-600" key={company.name}>
      <div className="flex-start -mb-2 -mt-2">
        <div className="-ml-1.5 flex h-6 w-6 items-center justify-center rounded-full bg-blue-600 lg:-ml-3.5">
          <CalendarIcon className="h-3 w-3 text-white" />
        </div>
        <div className="ml-3  max-w-6xl">
          <Section>
            <div className="flex flex-wrap justify-between px-6 pt-6 font-bold text-slate-700 lg:p-0">
              <TitleLinkPill title={company.name} link={company.link} />
              <div className="m-auto mt-3 flex w-full flex-col divide-slate-700 lg:m-0 lg:w-auto">
                <Location location={company.location} />
                <hr className=" my-1" />
                {company.duration && <Duration duration={company.duration} />}
              </div>
            </div>
            <p className="my-3 ms-6 text-gray-700 lg:ms-0">
              {company.description}
            </p>

            <ol>
              {company.positions &&
                company.positions.map((position) => (
                  <PositionSection
                    position={position}
                    key={`${company.name}::${position.title}`}
                  />
                ))}
            </ol>
          </Section>
        </div>
      </div>
    </li>
  );
}
