import ProjectCard from "./ProjectCard";
import { Project } from "../EmploymentTree/expierience.types";
import { Section } from "../Global/Tiles";

export default function Projects({ projects }: { projects: Project[] }) {
  return (
    <div className="m-auto max-w-3xl">
      <Section>
        {projects.map((project, index) => (
          <ProjectCard project={project} key={index} />
        ))}
      </Section>
    </div>
  );
}
