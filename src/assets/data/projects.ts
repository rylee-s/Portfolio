import { Project } from "../../types/ResumeData";

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
        type: "rails",
        alt: "Ruby on Rails",
      },
      {
        type: "hotwire",
        alt: "Hotwire",
      },
      {
        type: "turbo",
        alt: "Turbo.js",
      },
      {
        type: "heroku",
        alt: "Heroku",
      },
      {
        type: "postgresql",
        alt: "PostgreSql",
      },
      {
        type: "redis",
        alt: "Redis",
      },
      {
        type: "tailwind",
        alt: "Tailwind CSS",
      },
      {
        type: "stimulus",
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
        type: "node",
        alt: "Node.js",
      },
      {
        type: "typescript",
        alt: "Typescript",
      },
      {
        type: "axios",
        alt: "Axios",
      },
      {
        type: "hbAPI",
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
        link: "https://img.shields.io/badge/build-96%25-brightgreen?label=Lighthouse%20Accessibility",
        alt: "Lighthouse Accessibility",
      },
      {
        link: "https://img.shields.io/badge/build-100%25-brightgreen?label=Lighthouse%20Best%20Practices",
        alt: "Lighthouse Best Practices",
      },
      {
        link: "https://img.shields.io/badge/build-91%25-green?label=Lighthouse%20SEO",
        alt: "Lighthouse SEO",
      },
    ],
    technology: [
      {
        type: "react",
        alt: "React",
      },
      {
        type: "tailwind",
        alt: "Tailwind CSS",
      },
      {
        type: "typescript",
        alt: "Typescript",
      },
      {
        type: "ghActions",
        alt: "Github Actions",
      },
    ],
  },
];

export default projects;
