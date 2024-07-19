import { NewWindowIcon } from "./Icon";

export default function TitleLinkPill({
  title,
  link,
}: {
  title: string;
  link: string;
}) {
  return (
    <span
      onClick={() => window.open(link, "_blank")}
      className="group inline-flex cursor-pointer items-center rounded-full bg-blue-600 p-4 text-3xl font-medium text-white transition-all duration-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
    >
      {" "}
      {title}
      <span className="scale-80 inline-block max-w-0 overflow-hidden whitespace-nowrap pl-2 transition-all duration-500 group-hover:max-w-screen-2xl group-hover:scale-100 group-hover:px-2 group-focus:max-w-screen-2xl group-focus:px-2">
        <NewWindowIcon className="ml-1" />
      </span>
    </span>
  );
}
