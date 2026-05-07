import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-grid">
        <div>
          <Link to="/" className="footer-brand">
            <img src="/portrait.png" alt="Zedera logo" />
            <span>Zedera</span>
          </Link>

          <p className="footer-text">
            We build websites, platforms, AI tools, and digital systems for
            businesses that want to grow online.
          </p>
        </div>

        <div>
          <h4>Company</h4>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/services">Services</Link>
          <Link to="/work">Work</Link>
          <Link to="/contact">Contact</Link>
        </div>

        <div>
          <h4>Services</h4>
          <p>Web & App Development</p>
          <p>AI Tools & Automation</p>
          <p>Digital Marketing</p>
          <p>UI / UX Design</p>
          <p>Platform Consulting</p>
        </div>

        <div>
          <h4>Contact</h4>
          <p>Sherifa Building / 11th Floor</p>
          <p>0984951144</p>
          <p>0921319769</p>
          <p>zederaet@gmail.com</p>
          <p>www.zederaet.com</p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>
          © {new Date().getFullYear()} Zedera Tech Solutions. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
}