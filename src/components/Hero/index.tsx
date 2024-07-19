import Typewriter from "../../Typewriter";
import Headshot from "../../assets/headshot.avif";
import Resume from "../../assets/Rylee_Shearer_Resume.pdf";
import { DocumentIcon, GitHubIcon, LinkedInIcon } from "../Global/Icon";

export default function Hero({
  typeWriterData,
  bioData,
}: {
  typeWriterData: { startText: string; list: string[] };
  bioData: { sectionOne: string; sectionTwo: string };
}) {
  const links = {
    linkedIn: "https://www.linkedin.com/in/rylee-s/",
    github: "https://github.com/rylee-s",
  };
  return (
    <>
      <section className="relative py-8 pt-20 lg:py-36 ">
        <div className="mx-auto flex w-full flex-col gap-10 px-5 sm:px-10 md:px-12 lg:max-w-7xl lg:flex-row lg:gap-12 lg:px-5">
          <div className="absolute inset-y-0 hidden w-full lg:right-0 lg:block lg:w-1/2">
            <span className="absolute -left-6 top-24 hidden h-24 w-24 rotate-90 skew-x-12 rounded-3xl bg-green-400 opacity-60 blur-xl md:left-4 lg:top-28 lg:block lg:opacity-95"></span>
            <span className="absolute bottom-12 right-4 h-24 w-24 rounded-3xl bg-blue-600 opacity-80 blur-xl"></span>
          </div>
          <span className="absolute -top-5 aspect-square w-4/12 rotate-90 skew-x-12 skew-y-12 rounded-full bg-gradient-to-tr from-blue-600 to-green-400 opacity-40 blur-2xl lg:left-0 lg:w-2/12"></span>
          <div
            className="relative mx-auto flex max-w-3xl flex-col items-center rounded-3xl bg-white 
          p-3 text-center lg:mx-0 lg:w-1/2 lg:max-w-none lg:flex-1 lg:items-start lg:py-7 lg:text-left xl:py-8"
          >
            <h1 className="text-3xl font-bold leading-tight text-gray-900 sm:text-4xl md:text-5xl">
              {typeWriterData.startText}{" "}
              <span
                id="header-type-writer"
                className="bg-gradient-to-br from-indigo-600 from-20% via-blue-600 via-30% to-green-600 bg-clip-text text-transparent"
              >
                <Typewriter words={typeWriterData.list} />
                <span className="cursor-animation bg-gradient-to-br from-indigo-600 from-20% via-blue-600 via-30% to-green-600 bg-clip-text pl-0.5 text-transparent">
                  |
                </span>
              </span>
            </h1>
            <p className="my-8 text-gray-700">
              {bioData.sectionOne}
              <br />
              <br />
              {bioData.sectionTwo}
            </p>
            <div className="w-full rounded-lg bg-gray-300 p-6 text-center font-bold text-gray-700">
              <div className="flex justify-around font-bold text-gray-700">
                <div
                  className="rounded-lg border bg-gray-100 p-2 shadow-md hover:border-gray-700 hover:shadow-xl"
                  onClick={() => window.open(links.linkedIn, "_blank")}
                >
                  <LinkedInIcon />
                  <p>LinkedIn</p>
                </div>
                <div
                  className="rounded-lg border bg-gray-100 p-2 shadow-md hover:border-gray-700 hover:shadow-xl"
                  onClick={() => window.open(links.github, "_blank")}
                >
                  <GitHubIcon />
                  <p>GitHub</p>
                </div>
                <div
                  className="rounded-lg border bg-gray-100 p-2 shadow-md hover:border-gray-700 hover:shadow-xl"
                  onClick={() => window.open(Resume)}
                >
                  <DocumentIcon />
                  <p>Resume</p>
                </div>
              </div>
            </div>
          </div>
          <div className="relative flex max-w-3xl flex-1">
            <img
              src={Headshot}
              alt="Headshot Image"
              rel="prefetch"
              className="m-auto max-h-96 rounded-3xl object-cover"
            />
          </div>
        </div>
      </section>
    </>
  );
}
