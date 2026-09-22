
import { FaGithub, FaLinkedin, FaInstagram, FaTwitter } from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>© 2026 Satyam Kumar. All rights reserved.</p>

        <div className="footer-links">
          <a
            href="https://github.com/Satyamkumar195"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>

          <a
            href="https://www.linkedin.com/in/satyam-kumar-84b682328"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>

          <a
            href="https://www.instagram.com/satyam_thakur_195/"
            target="_blank"
            rel="noreferrer"
            aria-label="Instagram"
          >
            <FaInstagram />
          </a>

          <a
            href="https://x.com/Satyam3638?s=09"
            target="_blank"
            rel="noreferrer"
            aria-label="Twitter"
          >
            <FaTwitter />
          </a>

          <a href="#home" className="back-to-top">
            Back to Top
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

