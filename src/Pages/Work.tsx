import { motion } from "framer-motion";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

export default function Work() {
  const projectTypes = [
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
      desc: "Practical tools that help teams save time, respond faster, and reduce repetitive work.",
    },
    {
      title: "Brand & Marketing Systems",
      category: "Digital Branding",
      desc: "Clearer messaging, stronger visuals, and better digital communication across channels.",
    },
  ];

  return (
    <main>
      <Navbar />

      <section className="hero about-hero">
        <motion.div
          className="hero-content"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="tagline">Our Work</p>

          <h1>The kind of digital work we help businesses build.</h1>

          <p className="hero-text">
            From websites and platforms to AI tools and digital branding, we
            focus on practical solutions that help businesses operate and
            communicate better.
          </p>
        </motion.div>
      </section>

      <section className="section portfolio">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <p className="tagline">Project Areas</p>

          <h2>We build around what each business actually needs.</h2>

          <div className="portfolio-grid">
            {projectTypes.map((project, i) => (
              <motion.div
                key={i}
                className="project-card"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
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

      <section className="cta">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <h2>Have something specific in mind?</h2>

          <p>
            Tell us what you want to build, and we’ll help shape the right
            digital solution.
          </p>

          <a href="/contact" className="btn primary">
            Start a Project
          </a>
        </motion.div>
      </section>

      <Footer />
    </main>
  );
}