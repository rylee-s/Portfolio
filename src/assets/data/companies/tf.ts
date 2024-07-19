import { Company } from "../../../types/ResumeData";

const company: Company = {
  name: "Trace First Inc.",
  location: "Fort Collins, CO",
  link: "https://www.tracefirst.com",
  description: "Animal health software provider",
  skills: [
    {
      categoryLabel: "Languages",
      skills: [
        {
          label: "Ruby",
          level: 90,
        },
        {
          label: "JavaScript",
          level: 90,
        },
        {
          label: "SQL",
          level: 89,
        },
      ],
    },
    {
      categoryLabel: "Packages & Frameworks",
      skills: [
        {
          label: "Ruby on Rails",
          level: 93,
        },
        {
          label: "React",
          level: 79,
        },
        {
          label: "Node JS",
          level: 92,
        },
        {
          label: "Nginx",
          level: 85,
        },
      ],
    },
    {
      categoryLabel: "Databases",
      skills: [
        {
          label: "MYSql",
          level: 95,
        },
        {
          label: "Relational Databases",
          level: 89,
        },
        {
          label: "Redis",
          level: 85,
        },
      ],
    },
    {
      categoryLabel: "Cloud Services",
      skills: [
        {
          label: "AWS",
          level: 94,
        },
        {
          label: "AWS S3",
          level: 94,
        },
        {
          label: "AWS RDS",
          level: 94,
        },
        {
          label: "AWS EC2",
          level: 94,
        },
        {
          label: "Github",
          level: 94,
        },
        {
          label: "AWS Quicksight",
          level: 94,
        },
        {
          label: "DataDog",
          level: 94,
        },
      ],
    },
    {
      categoryLabel: "Tools & Concepts",
      skills: [
        {
          label: "Git",
          level: 94,
        },
        {
          label: "Performance Monitoring and Optimization",
          level: 90,
        },
        {
          label: "Agile Development",
          level: 87,
        },
        {
          label: "MVC (Model, View, Controller)",
          level: 92,
        },
      ],
    },
  ],
  positions: [
    {
      title: "Software Engineer",
      description: "",
      startDate: "08/01/2022",
      endDate: "07/01/2023",
      bullets: [
        "Adhered to client guidelines and contract specifications to successfully design and maintain a single tenant LIMS system, optimizing the process of lab testing from sample receipt through final report generation and billing",
        "Played a key role in expanding the application user base from solely animal health laboratories to agricultural, environmental, and public health laboratories",
        "Scaled and redesigned the file processing and storage of 19+ TB of client data to improve application performance",
        "Created and managed analytics modules, handling diverse datasets such as time series, revenue, KPI, and geographical data, derived from millions of rows of client data",
        "Successfully optimized various app pages, significantly reducing instances of load time violations and enhancing overall performance",
        "Assisted with quarterly releases for 19 applications and 8 clients based across North America",
        "Led the development of an offline native application for a state government to allow input, processing, and secure upload of field data for license and permit compliance",
      ],
      skills: [
        {
          categoryLabel: "Languages",
          skills: [
            {
              label: "TypeScript",
              level: 91,
            },
          ],
        },
        {
          categoryLabel: "Packages & Frameworks",
          skills: [
            {
              label: "Express JS",
              level: 98,
            },
            {
              label: "Electron",
              level: 85,
            },
          ],
        },
      ],
    },
    {
      title: "Junior Software Engineer",
      description: "",
      startDate: "05/01/2021",
      endDate: "08/01/2022",
      bullets: [
        "Followed project requirements meticulously to implement and test application features, honing skills in feature development and testing procedures resulting in a promotion to Software Engineer",
        "Actively participated in two major framework version upgrades, conducting thorough system reviews and testing to support the team in adapting to newer technologies",
        "Reviewed and refactored application logging and error reporting systems, contributing to improved issue resolution time and enabling more in-depth analytics for better problem diagnosis",
        "Developed and maintained integrations for lab equipment, utilizing technologies such as webhooks, REST API communication, and machine-generated file uploads to streamline data entry",
      ],
    },
    {
      title: "Support Engineer",
      description: "",
      startDate: "03/01/2021",
      endDate: "05/01/2021",
      bullets: [
        "Delivered in-depth third-tier support to client IT and development staff, resolving complex software and integration related issues with a focus on providing usable solutions resulting in a promotion to Junior Software Engineer",
        "Monitored error logging across from various providers to help with identifying unreported issues and troubleshooting existing ones",
        "Collaborated with on-site and remote development teams by participating in discussions to spec out required changes and deliver timely solutions to client",
      ],
    },
  ],
};

export default company;
