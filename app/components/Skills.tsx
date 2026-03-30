export default function Skills() {
  const categories = [
    {
      title: "Full‑Stack Engineering",
      items: [
        "Java 21/25",
        "Spring Boot 4",
        "Angular 21 (Signals)",
        "NX Monorepo",
        "PostgreSQL",
        "Kafka",
        "REST APIs"
      ]
    },
    {
      title: "DevSecOps & Cloud",
      items: [
        "Azure DevOps",
        "Kubernetes",
        "Docker",
        "Cloud Foundry",
        "CI/CD Pipelines",
        "SonarQube",
        "Checkmarx",
        "NexusIQ",
        "Splunk Observability"
      ]
    },
    {
      title: "AI‑Driven Engineering",
      items: [
        "Reusable AI Prompt Packs",
        "Role‑Based Agent Contexts",
        "AI‑Powered Code Templates",
        "Automated Architecture Docs",
        "Boilerplate Generators",
        "AI‑Driven Testing",
        "Prompt Governance & Guardrails"
      ]
    },
    {
      title: "Leadership & Delivery",
      items: [
        "Technical Backlog Ownership",
        "System Design",
        "Code Reviews",
        "Mentoring",
        "Architecture Governance",
        "Technical Stakeholder Management"
      ]
    }
  ];

  return (
    <section
      id="skills"
      className="max-w-6xl mx-auto py-24 px-6 scroll-mt-20"
    >
      <h2 className="text-4xl font-bold mb-10 text-center">Core Skills</h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {categories.map((cat) => (
          <div
            key={cat.title}
            className="bg-[#1a2335] rounded-xl p-6 shadow-md hover:scale-105 transition"
          >
            <h3 className="text-primary font-semibold text-xl mb-4">
              {cat.title}
            </h3>
            <ul className="space-y-2 text-sm opacity-90">
              {cat.items.map((item) => (
                <li key={item}>• {item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}