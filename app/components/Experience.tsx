export default function Experience() {
  const jobs = [
    {
      company: "Rabobank",
      role: "Lead Software Engineer / Engineering Architect",
      location: "Utrecht, Netherlands",
      period: "Apr 2022 – Present",
      bullets: [
        "Delivered full‑stack solutions for major mortgage journeys: Bepaal je Bod, Mortgage Calculator, Interest Page, external partner widgets, appointments.",
        "Built backend microservices using Java 21/25 + Spring Boot 4 and frontend apps using Angular 21 (Signals) with NX Monorepo.",
        "Owned system design, API specifications, service boundaries, scalability patterns, observability, and secure‑by‑design architecture.",
        "Drove modernization (Java 25, Spring Boot 4, Angular 21), improved CI/CD pipelines, and implemented strong DevSecOps governance.",
        "Led AI‑accelerated engineering initiatives using multi‑agent systems for architecture documents, API specs, and reusable code templates.",
        "Created Spring Boot skeletons, Angular component templates, automated documentation workflows, reducing development cycles by 30%.",
        "Reduced vulnerabilities by 45% through tooling + automation.",
        "Mentored engineers and provided architectural alignment across teams."
      ]
    },
    {
      company: "Tata Consultancy Services",
      role: "IT Analyst (Java Full‑Stack)",
      location: "Amsterdam, Netherlands",
      period: "Feb 2021 – Mar 2022",
      bullets: [
        "Developed mortgage calculation microservices using Java 11 + Angular.",
        "Integrated Kafka for async messaging patterns.",
        "Implemented A/B testing using Split.io for customer journey experiments.",
        "Developed automated test suites using WebDriver.io.",
        "Collaborated with architects to deliver reliable financial services in a regulated environment."
      ]
    },
    {
      company: "Cognizant",
      role: "Associate / Senior Developer / Team Lead",
      location: "Pune, India & Amsterdam",
      period: "Jan 2017 – Feb 2021",
      bullets: [
        "Developed enterprise microservices using Java 8 + Spring Boot + Angular.",
        "Built event‑driven systems using AWS Kinesis.",
        "Integrated Salesforce and internal identity systems for a telecom enterprise portal.",
        "Led two teams (15+ engineers) across backend and frontend.",
        "Owned design discussions, code reviews, and technical mentoring."
      ]
    },
    {
      company: "Infosys",
      role: "Senior System Engineer / System Engineer",
      location: "Pune, India",
      period: "Jul 2014 – Jan 2017",
      bullets: [
        "Built ESB integrations using Apache Camel, Java, Oracle DB.",
        "Developed backend systems with Spring + Hibernate.",
        "Created frontends using JSF/RichFaces.",
        "Authored design documents and mentored junior developers."
      ]
    }
  ];

  return (
    <section
      id="experience"
      className="max-w-6xl mx-auto py-24 px-6 scroll-mt-20"
    >
      <h2 className="text-4xl font-bold mb-10 text-center">Experience</h2>

      <div className="space-y-12">
        {jobs.map((job, idx) => (
          <div
            key={idx}
            className="bg-[#1b2539] p-8 rounded-xl shadow-lg hover:scale-[1.02] transition"
          >
            <div className="flex flex-col md:flex-row md:justify-between md:items-center">
              <h3 className="text-2xl font-semibold">
                {job.role} — <span className="text-primary">{job.company}</span>
              </h3>
              <p className="opacity-70 mt-2 md:mt-0">
                {job.location} • {job.period}
              </p>
            </div>

            <ul className="mt-4 space-y-2 opacity-90 text-sm md:text-base">
              {job.bullets.map((b, i) => (
                <li key={i}>• {b}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}