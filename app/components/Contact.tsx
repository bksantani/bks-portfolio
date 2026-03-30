import { FaLinkedin } from "react-icons/fa";

export default function Contact() {
  return (
    <section
      id="contact"
      className="max-w-4xl mx-auto py-24 px-6 text-center scroll-mt-20"
    >
      <h2 className="text-4xl font-bold mb-6">Get in Touch</h2>

      <p className="text-lg opacity-90 max-w-2xl mx-auto mb-10">
        Feel free to reach out on LinkedIn for architecture discussions,
        engineering leadership opportunities, or collaboration.
      </p>

      <div className="flex justify-center mt-6">
        <a
          href="https://www.linkedin.com/in/bharat-kumar-santani"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-3 text-primary"
        >
          <FaLinkedin className="text-4xl" />
          <span className="text-lg">linkedin.com/in/bharat-kumar-santani</span>
        </a>
      </div>
    </section>
  );
}