import { motion } from "framer-motion";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

export default function About() {
  const values = [
    {
      number: "01",
      title: "Clear Communication",
      desc: "We like keeping things simple, understandable, and easy to work with.",
    },
    {
      number: "02",
      title: "Good User Experience",
      desc: "We pay attention to how people actually interact with digital products.",
    },
    {
      number: "03",
      title: "Long-Term Thinking",
      desc: "We build systems that businesses can continue growing with over time.",
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
          <p className="tagline">About Zedera</p>

          <h1>
            We build digital tools and experiences that help businesses move
            forward.
          </h1>

          <p className="hero-text">
            Zedera Tech Solutions works with businesses that want cleaner
            websites, better digital systems, and practical technology that
            actually supports growth.
          </p>
        </motion.div>
      </section>

      <section className="section">
        <motion.div
          className="about-grid"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <div>
            <p className="tagline">Who We Are</p>

            <h2>
              A team focused on building clean, useful, and modern digital
              solutions.
            </h2>
          </div>

          <div className="about-text">
            <p>
              We started Zedera with a simple idea: businesses should have
              access to digital solutions that are both professional and easy to
              use.
            </p>

            <p>
              Over time, our work expanded into websites, AI tools, branding,
              automation, and digital strategy. We care about building things
              that not only look good, but also work properly for the people
              using them.
            </p>
          </div>
        </motion.div>
      </section>

      <section className="section light">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <p className="tagline">How We Work</p>

          <h2>
            We try to keep the process clear, collaborative, and practical.
          </h2>

          <div className="cards">
            {values.map((value, i) => (
              <motion.div
                key={i}
                className="card"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.12 }}
                viewport={{ once: true }}
              >
                <span className="card-number">{value.number}</span>

                <h3>{value.title}</h3>

                <p>{value.desc}</p>
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
          <h2>Looking to build something better online?</h2>

          <p>
            We’d love to hear about your project and see how we can help.
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