import { ClockIcon, GeoPinIcon } from "./Icon";

export function Location({ location }: { location: string }) {
  return (
    <span className="flex text-sm font-bold text-slate-600 transition duration-300 ease-in-out hover:text-blue-600 focus:text-blue-800">
      <GeoPinIcon className="my-auto mr-1" />
      {location}
    </span>
  );
}

export function Duration({ duration }: { duration: string }) {
  return (
    <span className="flex text-sm text-slate-600 transition duration-300 ease-in-out hover:text-blue-600 focus:text-blue-800">
      <ClockIcon className="my-auto mr-1" />
      {duration}
    </span>
  );
}
