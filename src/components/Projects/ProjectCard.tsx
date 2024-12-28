import HBLogo from "../../assets/homebridge-logo.avif";
import Portfolio from "../../assets/portfolio-site.avif";
import Crowdle from "../../assets/crowdle-logo.avif";
import BreadBox from "../../assets/bread-box.png";

import { Project } from "../../types/ResumeData";
import { NewWindowIcon } from "../Global/Icon";
import { Item } from "../Global/Tiles";
import { log } from "../Global/Event";
import { Shield } from "../Global/Shield";

export default function ProjectCard({ project }: { project: Project }) {
  const handleClick = (project: Project) => {
    window.open(project.link, "_blank");
    log("project_select", {
      value: project.name,
    });
  };

  const logo = (img: string) => {
    switch (img) {
      case "homebridge logo":
        return HBLogo;
      case "portfolio site":
        return Portfolio;
      case "crowdle-logo":
        return Crowdle;
      case "bread-box":
        return BreadBox;
      default:
        return HBLogo;
    }
  };
  return (
    <div className="my-4 first:mt-0 last:mb-0">
      <Item>
        <div className="flex-wrap">
          <img
            className="m-auto rounded-xl border"
            src={logo(project.img)}
            alt={project.img}
          />
          <div>
            <div className="my-3 flex">
              <div>
                <h1 className="text-2xl font-extrabold">{project.name}</h1>
                <h2 className=" font-medium">{project.subtitle}</h2>
              </div>
              {project.link && (
                <span
                  className="shandow-xl	my-auto ml-auto cursor-pointer rounded-xl border border-gray-700 bg-slate-200 p-3 hover:bg-slate-400"
                  onClick={() => handleClick(project)}
                >
                  <NewWindowIcon width="30" height="30" />
                </span>
              )}
            </div>
            <hr className="mb-3 border-gray-700" />
            <h3 className="mb-2">{project.description}</h3>
            <div className="mt-4 flex flex-wrap">
              {project.badges &&
                project.badges.map((badge, index) => (
                  <img
                    className="m-1 rounded-xl shadow-xl"
                    src={badge.link}
                    alt={badge.alt}
                    key={index}
                  />
                ))}
            </div>
            <hr />
            <div className="mt-4 flex flex-wrap">
              {project.technology &&
                project.technology.map((badge, index) => (
                  <Shield
                    type={badge.type}
                    alt={badge.alt}
                    className="m-1 rounded-xl shadow-xl"
                    key={index}
                  />
                ))}
            </div>
          </div>
        </div>
      </Item>
    </div>
  );
}
