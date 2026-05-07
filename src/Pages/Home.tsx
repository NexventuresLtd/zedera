import { motion } from "framer-motion";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

export default function Home() {
  const services = [
    {
      number: "01",
      title: "Web & App Development",
      desc: "We build websites and applications that look good, work smoothly, and are easy for people to use.",
    },
    {
      number: "02",
      title: "AI Tools & Automation",
      desc: "We help businesses use AI in practical ways, from chatbots to automation tools that save time.",
    },
    {
      number: "03",
      title: "Digital Marketing & Branding",
      desc: "We support brands with clear messaging, content, visibility, and stronger online presence.",
    },
  ];

  const reasons = [
    {
      number: "01",
      title: "Clear direction",
      desc: "We keep the work organized so every project has a clear goal and structure.",
    },
    {
      number: "02",
      title: "User-first thinking",
      desc: "We design around real people, not just around how the page looks.",
    },
    {
      number: "03",
      title: "Built to grow",
      desc: "We create systems that can be improved and expanded over time.",
    },
    {
      number: "04",
      title: "Design that works",
      desc: "We care about both the visual quality and the functionality behind it.",
    },
  ];

  const projectAreas = [
    {
      title: "Business Websites",
      category: "Web Development",
      desc: "Clean websites for companies that need a stronger and more professional online presence.",
    },
    {
      title: "Digital Platforms",
      category: "Platforms",
      desc: "Custom systems for learning, operations, customer access, or internal workflows.",
    },
    {
      title: "AI Tools",
      category: "AI & Automation",
      desc: "Practical tools that help teams save time and reduce repetitive work.",
    },
    {
      title: "Brand & Marketing Systems",
      category: "Digital Branding",
      desc: "Clearer messaging, stronger visuals, and better digital communication.",
    },
  ];

  return (
    <main>
      <Navbar />

      <section className="hero">
        <motion.div
          className="hero-content"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="tagline">Zedera Tech Solutions</p>

          <h1>Technology solutions built for modern businesses.</h1>

          <p className="hero-text">
            We design and build websites, platforms, AI tools, and digital
            systems that help businesses work better and show up stronger
            online.
          </p>

          <div className="hero-buttons">
            <a href="/contact" className="btn primary">
              Start a Project
            </a>

            <a href="/services" className="btn secondary">
              Explore Services
            </a>
          </div>
        </motion.div>
      </section>

      <section className="section" id="services">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <p className="tagline">What We Do</p>

          <h2>We help businesses build better digital tools and experiences.</h2>

          <div className="cards">
            {services.map((service) => (
              <motion.div
                key={service.number}
                className="card"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <span className="card-number">{service.number}</span>
                <h3>{service.title}</h3>
                <p>{service.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      <section className="section why-section" id="why">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <p className="tagline">Why Zedera</p>

          <h2>
            We build digital solutions that feel clear, practical, and easy to
            use.
          </h2>

          <p className="why-intro">
            We keep the process simple, focus on the people using the product,
            and build systems that can grow with the business.
          </p>

          <div className="why-cards">
            {reasons.map((reason) => (
              <motion.div
                key={reason.number}
                className="why-card"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <span>{reason.number}</span>
                <h3>{reason.title}</h3>
                <p>{reason.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      <section className="section portfolio" id="work">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <p className="tagline">Project Areas</p>

          <h2>We build around what each business actually needs.</h2>

          <div className="portfolio-grid">
            {projectAreas.map((project) => (
              <motion.div
                key={project.title}
                className="project-card"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <div className="project-image">
                  <span>{project.title}</span>
                </div>

                <div className="project-content">
                  <p className="project-category">{project.category}</p>
                  <h3>{project.title}</h3>
                  <p>{project.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      <section className="cta" id="contact">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <h2>Have a project in mind?</h2>

          <p>
            Let’s talk about what you want to build and how Zedera can help.
          </p>

          <a href="/contact" className="btn primary">
            Contact Zedera
          </a>
        </motion.div>
      </section>

      <Footer />
    </main>
  );
}