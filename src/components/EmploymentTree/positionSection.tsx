import { CalendarHeartIcon, ClockIcon } from "../Global/Icons";
import { Item } from "../Global/Tiles";
import { Position } from "../../Data/types";

export default function PositionSection({ position }: { position: Position }) {
  return (
    <div className="flex-start">
      <div className="my-2 last:mb-0 lg:my-6">
        <Item>
          <div className="mb-4">
            <span className="text-2xl font-bold text-blue-600 transition duration-300 ease-in-out hover:text-blue-700 focus:text-blue-800">
              {position.title}
            </span>
            <br />
            {position.dates && (
              <>
                <span className="flex font-medium text-slate-600 transition duration-300 ease-in-out hover:text-slate-700 focus:text-slate-800">
                  <CalendarHeartIcon className="my-auto mr-1" />
                  {position.dates.start} - {position.dates.end}
                </span>
                <span className="flex font-medium text-slate-600 transition duration-300 ease-in-out hover:text-slate-700 focus:text-slate-800">
                  <ClockIcon className="my-auto mr-1" />
                  {position.dates.duration}
                </span>
              </>
            )}
          </div>
          {position.description && (
            <p className="mb-6 text-gray-700">{position.description}</p>
          )}
          <ul className="list-outside list-disc ps-2 text-start text-gray-700">
            {position.bullets &&
              position.bullets.map((bullet, index) => (
                <li key={index}>{bullet}</li>
              ))}
          </ul>
        </Item>
      </div>
    </div>
  );
}
