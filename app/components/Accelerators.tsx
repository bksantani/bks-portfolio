export default function Accelerators() {
  const accelerators = [
    {
      title: "Role‑Based AI Prompt & Context Packs",
      desc: "Created reusable prompt libraries and role‑based context templates that generate architecture docs, API specifications, HLD/LLD drafts, testing templates, and code scaffolding — aligned with org policies that avoid autonomous agents.",
      bullets: [
        "Role-based contexts (breakdown, backend dev, backend test, backend review, frontend dev)",
        "Reusable prompt packs for architecture, docs, code and review",
        "Standardized engineering workflows",
        "Consistent architecture & coding standards via templates"
      ]
    },
    {
      title: "AI‑Powered Engineering Templates",
      desc: "Created reusable templates for Spring Boot services, Angular components, security guidelines, API specifications, and CICD practices.",
      bullets: [
        "Spring Boot microservice skeleton generators",
        "Angular component + Signals-based template packs",
        "Security design checklists (OWASP, OAuth2/OIDC)",
        "Reduced onboarding & setup time by 25–30%"
      ]
    },
    {
      title: "Automated Architecture Documentation",
      desc: "Developed systems that auto-generate architecture PDFs, HLD/LLD drafts, API documentation, and diagrams—cutting documentation timelines by 30–40%.",
      bullets: [
        "Reusable architecture scaffolding",
        "Model-to-doc conversion flows",
        "AI-assisted UML and system diagrams",
        "Reduced manual documentation overhead"
      ]
    },
    {
      title: "AI-Driven Testing & Refactoring",
      desc: "Leveraged AI-assisted test creation, refactoring suggestions, and intelligent code navigation to reduce defects and improve engineering velocity.",
      bullets: [
        "Automated unit & integration test suggestions",
        "LLM-powered code smell detection",
        "Refactoring pattern analysis",
        "Improved code quality and review efficiency"
      ]
    }
  ];

  return (
    <section
      id="accelerators"
      className="max-w-6xl mx-auto py-24 px-6 scroll-mt-20"
    >
      <h2 className="text-4xl font-bold mb-10 text-center">
        AI‑Accelerated Engineering
      </h2>

      <p className="text-center max-w-3xl mx-auto text-lg opacity-90 mb-14">
        I design and implement <span className="text-primary font-semibold">
        AI‑driven engineering frameworks</span> that automate and accelerate  
        development, architecture documentation, testing, and boilerplate 
        generation across teams — significantly improving velocity, consistency,  
        and delivery quality.
      </p>

      <div className="grid md:grid-cols-2 gap-10">
        {accelerators.map((acc) => (
          <div
            key={acc.title}
            className="bg-[#1b2539] p-8 rounded-xl shadow-lg hover:scale-[1.02] transition"
          >
            <h3 className="text-xl font-semibold text-primary mb-2">
              {acc.title}
            </h3>
            <p className="text-sm opacity-90 mb-4">{acc.desc}</p>

            <ul className="space-y-2 text-sm opacity-80">
              {acc.bullets.map((b) => (
                <li key={b}>• {b}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}