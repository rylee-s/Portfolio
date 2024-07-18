import { ResumeData } from "./types";
import education from "./Education";
import projects from "./Projects";
import Trihydro from "./Companies/Trihydro";
import tf from "./Companies/TF";
import aab from "./Companies/AAB";

const experience = [Trihydro, tf, aab];

const data: ResumeData = {
  experience,
  education,
  skills: [],
  projects,
  general: {
    name: "Rylee Shearer",
    typewriter: {
      startText: "Software",
      list: [
        "Engineer",
        "Developer",
        "Enthusiast",
        "Creator",
        "Designer",
        "Architect",
      ],
    },
    bio: {
      sectionOne:
        "Welcome! I'm a software developer with a passion for learning and a drive to explore technology, both new and old",
      sectionTwo:
        "In the world of software, code is just a tool. It's the bridge between complex problems and usable solutions. My goal is to make that bridge as seamless as possible. I strive to make the digital experiences I craft, accessible, enjoyable, and efficient for all users.",
    },
  },
};

export default data;
