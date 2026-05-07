import { motion } from "framer-motion";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

export default function Services() {
  const services = [
    {
      number: "01",
      title: "Web & App Development",
      desc: "We build websites and applications that are clean, responsive, and easy to manage.",
    },
    {
      number: "02",
      title: "AI Tools & Automation",
      desc: "We help businesses use AI in practical ways, like chatbots, workflow automation, and data-based tools.",
    },
    {
      number: "03",
      title: "Digital Marketing & Branding",
      desc: "We support businesses with content, SEO, social media, campaigns, and clearer brand communication.",
    },
    {
      number: "04",
      title: "UI / UX Design",
      desc: "We design digital experiences that are simple to use and easy for customers to understand.",
    },
    {
      number: "05",
      title: "Platform Consulting",
      desc: "We help teams make better decisions around platforms, technology choices, and digital growth.",
    },
    {
      number: "06",
      title: "Dedicated Tech Teams",
      desc: "We connect clients with skilled developers, designers, and AI specialists from Ethiopia and East Africa.",
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
          <p className="tagline">Our Services</p>

          <h1>Practical digital services for businesses that want to grow.</h1>

          <p className="hero-text">
            From websites and apps to AI tools and digital strategy, we help
            businesses build stronger systems and a better online presence.
          </p>
        </motion.div>
      </section>

      <section className="section">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <p className="tagline">What We Offer</p>

          <h2>
            Services built around real business needs, not just nice-looking
            pages.
          </h2>

          <div className="cards">
            {services.map((service, i) => (
              <motion.div
                key={i}
                className="card"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
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

      <section className="section light">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <p className="tagline">How We Work</p>

          <h2>We keep the process clear from the first conversation.</h2>

          <div className="cards">
            {[
              {
                number: "01",
                title: "Understand",
                desc: "We start by learning what the business needs, what the users expect, and what the solution should achieve.",
              },
              {
                number: "02",
                title: "Build",
                desc: "We design and develop the solution with a focus on structure, usability, and performance.",
              },
              {
                number: "03",
                title: "Improve",
                desc: "After launch, we help review, refine, and improve the product where needed.",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                className="card"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.12 }}
                viewport={{ once: true }}
              >
                <span className="card-number">{item.number}</span>

                <h3>{item.title}</h3>

                <p>{item.desc}</p>
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
          <h2>Not sure which service you need yet?</h2>

          <p>
            That’s okay. Tell us what you’re trying to build, and we’ll help
            you figure out the right direction.
          </p>

          <a href="/contact" className="btn primary">
            Talk to Zedera
          </a>
        </motion.div>
      </section>

      <Footer />
    </main>
  );
}