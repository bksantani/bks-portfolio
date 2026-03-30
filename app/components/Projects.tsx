export default function Projects() {
  const projects = [
    {
      title: "Mortgage Journey Ecosystem (Rabobank)",
      tech: [
        "Java 21/25",
        "Spring Boot 4",
        "Angular 21 (Signals)",
        "Kubernetes",
        "Azure DevOps"
      ],
      description:
        "Delivered full‑stack solutions powering key mortgage journeys including Bepaal je Bod, Mortgage Calculator, Mortgage Interest Page, external partner widgets, and customer appointment flows used by millions.",
    },
    {
      title: "Microservices Modernization (Rabobank)",
      tech: [
        "Domain‑Driven Design",
        "Kafka",
        "PostgreSQL",
        "Spring Boot 4",
        "NX Monorepo"
      ],
      description:
        "Architected resilient, domain‑aligned microservices with improved performance, observability, and security. Led modernization from legacy stacks to Java 25 + Spring Boot 4.",
    },
    {
      title: "AI Prompt & Context Toolkit",
      tech: [
        "Reusable Prompts",
        "Role-Based Contexts",
        "AI Templates",
        "Automated Docs"
      ],
      description:
        "Designed and implemented reusable prompt packs and role‑based context templates (breakdown/dev/test/review) enabling consistent code templates, architecture documents, test skeletons, and API definitions.",
    },
    {
      title: "Mortgage Calculation Microservices (TCS)",
      tech: ["Java 11", "Kafka", "Angular", "Split.io"],
      description:
        "Developed microservices for income/mortgage calculations and implemented feature‑flagged A/B tests to optimize customer conversions.",
    },
    {
      title: "Enterprise Portal Modernization (Cognizant)",
      tech: [
        "Java 8",
        "Spring Boot",
        "Angular",
        "AWS Kinesis",
        "Salesforce Integrations"
      ],
      description:
        "Built and integrated scalable microservices for a telecom enterprise portal, including identity system integrations and event‑driven features.",
    },
    {
      title: "ESB Integrations (Infosys)",
      tech: ["Apache Camel", "Java", "Oracle DB", "JSF"],
      description:
        "Developed ESB integrations and backend systems for large-scale enterprise applications while mentoring junior developers.",
    }
  ];

  return (
    <section
      id="projects"
      className="max-w-6xl mx-auto py-24 px-6 scroll-mt-20"
    >
      <h2 className="text-4xl font-bold mb-10 text-center">Projects</h2>

      <div className="grid md:grid-cols-2 gap-10">
        {projects.map((proj) => (
          <div
            key={proj.title}
            className="bg-[#1b2539] p-8 rounded-xl shadow-lg hover:scale-[1.03] transition group"
          >
            <h3 className="text-2xl font-semibold mb-3 text-primary">
              {proj.title}
            </h3>

            <p className="opacity-90 text-sm leading-relaxed mb-4">
              {proj.description}
            </p>

            <div className="flex flex-wrap gap-2 mt-3">
              {proj.tech.map((tech) => (
                <span
                  key={tech}
                  className="bg-[#233044] text-primary text-xs px-3 py-1 rounded-full"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}