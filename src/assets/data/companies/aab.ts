import { Company } from "../../../types/ResumeData";

const company: Company = {
  name: "AAB Payroll",
  location: "Grand Rapids, MI",
  link: "https://www.dominionsystems.com/",
  description: "Payroll and HR software provider",
  positions: [
    {
      title: "Quality Assurance Engineer",
      description: "",
      startDate: "05/01/2019",
      endDate: "1/30/2021",
      bullets: [
        "Conducted review of unresolved support issues, gathering information to create detailed development tickets in an agile development environment",
        "Applied a combination of manual and automated testing techniques to rigorously evaluate feature updates and bug fixes, ensuring compliance with company standards for usability, accessibility, and functionality requirements",
        "Designed and managed automated testing scripts using Selenium and other cutting-edge automated testing tools, ensuring robust and efficient testing processes for software development lifestyle",
        "Fulfilled requests for custom reports by creating reusable SQL queries to meet the specific needs of clients and internal teams to enhance data-driven decision-making and gather data for regulatory reporting without affecting system performance",
      ],
      skills: [
        {
          categoryLabel: "Languages",
          skills: [
            {
              label: "JavaScript",
              level: 90,
            },
            {
              label: "TypeScript",
              level: 91,
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
              label: "Selenium",
              level: 90,
            },
            {
              label: "Node JS",
              level: 90,
            },
          ],
        },
        {
          categoryLabel: "Databases",
          skills: [
            {
              label: "Microsoft SQL Server",
              level: 90,
            },
            {
              label: "Relational Databases",
              level: 91,
            },
          ],
        },
        {
          categoryLabel: "Tools & Concepts",
          skills: [
            {
              label: "Git",
              level: 90,
            },
            {
              label: "Agile Development",
              level: 90,
            },
            {
              label: "Test Automation",
              level: 90,
            },
            {
              label: "Manual Testing",
              level: 90,
            },
          ],
        },
      ],
    },
  ],
};

export default company;
