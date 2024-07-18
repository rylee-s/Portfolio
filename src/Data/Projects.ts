import { Project } from "./types";

const projects: Project[] = [
  {
    name: "Crowdle",
    subtitle: "Wordle With Friends!",
    description:
      "This game is a multiplayer version of the popular word game Wordle. It is built using Ruby on Rails and the Hotwire frameworks. Crowdle uses Action Cable for real-time communication between players using WebSocket's. The game is hosted on hosted on Heroku with a Postgres Database and Redis for caching in-progress game state. The front end is styled by hand using Tailwind CSS and uses Stimulus.js for interactivity.",
    link: "https://crowdle-7157641dfb64.herokuapp.com/",
    img: "crowdle-logo",
    technology: [
      {
        link: "https://img.shields.io/badge/Ruby%20on%20Rails-CC342D?logo=ruby",
        alt: "Ruby on Rails",
      },
      {
        link: "https://img.shields.io/badge/Hotwire-FFE801?logo=hotwire&logoColor=black",
        alt: "Hotwire",
      },
      {
        link: "https://img.shields.io/badge/Turbo-5CD8E5?logo=turbo&logoColor=white",
        alt: "Turbo.js",
      },
      {
        link: "https://img.shields.io/badge/Heroku-430098?logo=heroku",
        alt: "Heroku",
      },
      {
        link: "https://img.shields.io/badge/PostgreSql-4169E1?logo=PostgreSql&logoColor=white",
        alt: "PostgreSql",
      },
      {
        link: "https://img.shields.io/badge/Redis-DC382D?logo=Redis&logoColor=white",
        alt: "Redis",
      },
      {
        link: "https://img.shields.io/badge/Tailwind%20CSS-06B6D4?logo=tailwindcss&logoColor=white",
        alt: "Tailwind CSS",
      },
      {
        link: "https://img.shields.io/badge/Stimulus.js-FFC107?logo=stimulus&logoColor=black",
        alt: "Stimulus.js",
      },
    ],
  },
  {
    name: "Litter Robot 4 Integration",
    subtitle: "Homebridge Plugin",
    description:
      "This plugin handles the connection between Apple Homekit and Whisker's Litter Robot. It began as a personal project that quickly gained a small user base. It is written in Typescript and uses the Homebridge API to communicate with Homekit on a Node.js runtime.",
    link: "https://github.com/rylee-s/Homebridge-Litter-Robot-4",
    img: "homebridge logo",
    badges: [
      {
        link: "https://img.shields.io/npm/dt/homebridge-litter-robot-4?style=for-the-badge&logo=npm&label=Downloads",
        alt: "Npm Downloads",
      },
      {
        link: "https://img.shields.io/github/stars/rylee-s/Homebridge-Litter-Robot-4?style=for-the-badge&logo=github&label=Github%20Stars",
        alt: "Github Stars",
      },
    ],
    technology: [
      {
        link: "https://img.shields.io/badge/Node.js-339933?logo=nodedotjs&logoColor=white",
        alt: "Node.js",
      },
      {
        link: "https://img.shields.io/badge/Typescript-3178C6?logo=typescript&logoColor=white",
        alt: "Typescript",
      },
      {
        link: "https://img.shields.io/badge/Axios-5A29E4?logo=axios&logoColor=white",
        alt: "Axios",
      },
      {
        link: "https://img.shields.io/badge/Homebridge%20API-491F59?logo=homebridge&logoColor=white",
        alt: "Homebrdige API",
      },
    ],
  },
  {
    name: "Portfolio Site",
    subtitle: "This Site!",
    description:
      "This site is an SPA written in react using tailwind css for styling. I have the site data stored in a JSON document to allow for easy updates and changes. The site is hosted on Github Pages and uses Github Actions to automatically build and deploy on push to the main branch.",
    link: "https://github.com/rylee-s/Portfolio",
    img: "portfolio site",
    badges: [
      {
        link: "https://img.shields.io/badge/build-100%25-brightgreen?label=Lighthouse%20Performance",
        alt: "Lighthouse Performance",
      },
      {
        link: "https://img.shields.io/badge/build-100%25-brightgreen?label=Lighthouse%20Accessibility",
        alt: "Lighthouse Accessibility",
      },
      {
        link: "https://img.shields.io/badge/build-100%25-brightgreen?label=Lighthouse%20Best%20Practices",
        alt: "Lighthouse Best Practices",
      },
      {
        link: "https://img.shields.io/badge/build-90%25-green?label=Lighthouse%20SEO",
        alt: "Lighthouse SEO",
      },
    ],
    technology: [
      {
        link: "https://img.shields.io/badge/React-61DAFB?logo=react&logoColor=black",
        alt: "React",
      },
      {
        link: "https://img.shields.io/badge/Tailwind%20CSS-06B6D4?logo=tailwindcss&logoColor=white",
        alt: "Tailwind CSS",
      },
      {
        link: "https://img.shields.io/badge/Typescript-3178C6?logo=typescript&logoColor=white",
        alt: "Typescript",
      },
      {
        link: "https://img.shields.io/badge/Github%20Actions-2088FF?logo=github%20actions&logoColor=white",
        alt: "Github Actions",
      },
    ],
  },
];

export default projects;
