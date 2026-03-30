export default function About() {
  return (
    <section
      id="about"
      className="max-w-5xl mx-auto py-24 px-6 text-center scroll-mt-20"
    >
      <h2 className="text-4xl font-bold mb-6">About Me</h2>

      <p className="text-lg leading-relaxed opacity-90 max-w-3xl mx-auto">
        I am a <span className="text-primary font-semibold">Lead Software Engineer & Engineering Architect</span> 
        with 11+ years of experience designing, building, and modernizing cloud‑native systems in 
        enterprise environments. I specialize in Java, Spring Boot, Angular, distributed systems, 
        DevSecOps, and AI‑accelerated engineering workflows.
      </p>

      <p className="text-lg leading-relaxed opacity-90 max-w-3xl mx-auto mt-4">
        I deliver scalable, secure, and high‑impact applications used by millions, 
        with strong ownership of system design, modernization initiatives, engineering best practices, 
        and technical leadership across teams. Recently, I’ve been building reusable AI prompt packs
        and curated, role‑based agent contexts (breakdown, backend dev, backend testing, backend review,
        frontend dev) to standardize AI‑assisted workflows, reduce development cycles, and improve
        architectural consistency across squads.
      </p>
    </section>
  );
}