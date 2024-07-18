import {
  CalendarIcon,
  ClockIcon,
  GeoPinIcon,
  NewWindowIcon,
} from "../Global/Icons";
import { Section } from "../Global/Tiles";
import { Company } from "../../assets/data/types";
import PositionSection from "./positionSection";

export default function CompanyCard({ company }: { company: Company }) {
  return (
    <li className="mb-2 border-l-2 border-blue-600" key={company.name}>
      <div className="flex-start -mb-2 -mt-2">
        <div className="-ml-1.5 flex h-6 w-6 items-center justify-center rounded-full bg-blue-600 lg:-ml-3.5">
          <CalendarIcon className="h-3 w-3 text-white" />
        </div>
        <div className="ml-3  max-w-6xl">
          <Section>
            <div className="flex flex-wrap justify-between px-6 pt-6 lg:p-0">
              <span
                onClick={() => window.open(company.link, "_blank")}
                className="group	inline-flex cursor-pointer items-center rounded-full bg-blue-600 p-4 text-3xl text-white transition-all duration-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
                {" "}
                {company.name}
                <span className="scale-80 inline-block max-w-0 overflow-hidden whitespace-nowrap pl-2 transition-all duration-500 group-hover:max-w-screen-2xl group-hover:scale-100 group-hover:px-2 group-focus:max-w-screen-2xl group-focus:px-2">
                  <NewWindowIcon className="ml-1" />
                </span>
              </span>
              <div className="m-auto mt-3 flex w-full flex-col divide-slate-700 lg:m-0 lg:w-auto">
                <span className="flex text-sm font-bold text-slate-700 transition duration-300 ease-in-out hover:text-blue-600 focus:text-blue-800">
                  <GeoPinIcon className="my-auto mr-1" />
                  {company.location}
                </span>
                <hr className=" my-1" />
                <span className="flex text-sm font-bold text-slate-700 transition duration-300 ease-in-out hover:text-blue-600 focus:text-blue-800">
                  <ClockIcon className="my-auto mr-1" />
                  {company.duration}
                </span>
              </div>
            </div>
            <p className="my-3 ms-6 text-gray-700 lg:ms-0">
              {company.description}
            </p>

            <ol className="">
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
