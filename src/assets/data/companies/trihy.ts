import { Company } from "../../../types/ResumeData";

const company: Company = {
  name: "Trihydro Corporation",
  location: "Fort Collins, CO",
  link: "https://www.trihydro.com/software",
  description: "Environmental consulting and software development",
  positions: [
    {
      title: "Junior Software Engineer",
      description: "",
      startDate: "02/01/2024",
      bullets: [
        "Work on projects related to federal connected vehicle programs with various State Departments of Transportation (DOTs), ensuring alignment with guidelines and specifications",
        "Manage and resolve tickets for bug fixes and feature requests",
        "Utilize .NET, C#, C++, and Java within Azure and client-hosted environments, applying knowledge of techniques like dependency injection to optimize application performance",
        "Employ Agile and Scrum methodologies to manage development processes to ensure timely and efficient project delivery",
      ],
      skills: [
        {
          categoryLabel: "Languages",
          skills: [
            {
              label: "C#",
              level: 89,
            },
            {
              label: "JavaScript",
              level: 90,
            },
            {
              label: "TypeScript",
              level: 91,
            },
            {
              label: "C++",
              level: 75,
            },
            {
              label: "SQL",
              level: 88,
            },
          ],
        },
        {
          categoryLabel: "Packages & Frameworks",
          skills: [
            {
              label: ".NET",
              level: 90,
            },
            {
              label: "Entity Framework",
              level: 89,
            },
            {
              label: "Asp .NET",
              level: 90,
            },
            {
              label: "Docker",
              level: 89,
            },
          ],
        },
        {
          categoryLabel: "Databases",
          skills: [
            {
              label: "Microsoft SQL Server",
              level: 89,
            },
            {
              label: "Relational Databases",
              level: 92,
            },
            {
              label: "Document Databases",
              level: 85,
            },
            {
              label: "PostgreSQL",
              level: 90,
            },
          ],
        },
        {
          categoryLabel: "Cloud Services",
          skills: [
            {
              label: "Azure Functions",
              level: 87,
            },
            {
              label: "Azure App Service",
              level: 90,
            },
            {
              label: "Azure Application Insights",
              level: 90,
            },
            {
              label: "Azure",
              level: 85,
            },
            {
              label: "Azure Cosmos DB",
              level: 83,
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
              level: 91,
            },
            {
              label: "MVC (Model, View, Controller)",
              level: 92,
            },
          ],
        },
      ],
    },
  ],
};

export default company;
