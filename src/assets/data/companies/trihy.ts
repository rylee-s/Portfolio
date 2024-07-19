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
        "Collaborated within a cross-functional team to efficiently address and resolve customer issues spanning multiple bank products, demonstrating a versatile and comprehensive approach to operational support",
        "Acted as a subject matter expert, providing guidance on complex customer issues and collaborating with relevant departments to implement solutions",
      ],
      skills: [
        {
          categoryLabel: "Languages",
          skills: [
            {
              label: "C#",
              level: 90,
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
              level: 89,
            },
          ],
        },
        {
          categoryLabel: "Packages & Frameworks",
          skills: [
            {
              label: ".NET",
              level: 93,
            },
            {
              label: "Entity Framework",
              level: 79,
            },
            {
              label: "Asp .NET",
              level: 92,
            },
            {
              label: "Docker",
              level: 98,
            },
          ],
        },
        {
          categoryLabel: "Databases",
          skills: [
            {
              label: "Microsoft SQL Server",
              level: 95,
            },
            {
              label: "Relational Databases",
              level: 89,
            },
            {
              label: "Document Databases",
              level: 85,
            },
            {
              label: "PostgreSQL",
              level: 85,
            },
          ],
        },
        {
          categoryLabel: "Cloud Services",
          skills: [
            {
              label: "Azure Functions",
              level: 89,
            },
            {
              label: "Azure App Service",
              level: 97,
            },
            {
              label: "Azure Application Insights",
              level: 92,
            },
            {
              label: "Azure",
              level: 92,
            },
            {
              label: "Azure Cosmos DB",
              level: 85,
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
    },
  ],
};

export default company;
