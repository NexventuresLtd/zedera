import { motion } from "framer-motion";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

export default function Contact() {
  return (
    <main>
      <Navbar />

      <section className="hero about-hero contact-hero">
        <motion.div
          className="hero-content"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="tagline">Contact Zedera</p>

          <h1>Let’s talk about what you want to build.</h1>

          <p className="hero-text">
            Whether it’s a website, platform, AI tool, or digital strategy, tell
            us what you need and we’ll help you figure out the next step.
          </p>
        </motion.div>
      </section>

      <section className="section contact-section">
        <div className="contact-grid">
          <motion.div
            className="contact-info"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <p className="tagline">Get in touch</p>

            <h2>We’re ready when you are.</h2>

            <p className="contact-text">
              Send us a short message about your project. It does not have to be
              perfect  just tell us what you’re thinking, and we’ll take it
              from there.
            </p>

            <div className="contact-details">
              <div>
                <span>Email</span>
                <p>zederaet@gmail.com</p>
              </div>

              <div>
                <span>Phone</span>
                <p>0984951144</p>
                <p>0921319769</p>
              </div>

              <div>
                <span>Location</span>
                <p>Sherifa Building / 11th Floor</p>
              </div>

              <div>
                <span>Website</span>
                <p>www.zederaet.com</p>
              </div>
            </div>
          </motion.div>

          <motion.form
            className="contact-form"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            action="mailto:zederaet@gmail.com"
            method="POST"
            encType="text/plain"
          >
            <input type="text" name="name" placeholder="Your Name" required />

            <input type="email" name="email" placeholder="Your Email" required />

            <input
              type="text"
              name="project"
              placeholder="What do you need help with?"
            />

            <textarea
              name="message"
              placeholder="Tell us a little about the project..."
              rows={6}
              required
            />

            <button type="submit" className="btn primary">
              Send Message
            </button>
          </motion.form>
        </div>
      </section>

      <section className="cta">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <h2>Have an idea but not a full plan yet?</h2>

          <p>That’s completely fine. Reach out and we’ll help you shape it.</p>

          <a href="mailto:zederaet@gmail.com" className="btn primary">
            Email Zedera
          </a>
        </motion.div>
      </section>

      <Footer />
    </main>
  );
}