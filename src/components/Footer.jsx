import { FaLinkedin } from "react-icons/fa";

import { personalInfo } from "../data/portfolioData";
import "../styles/footer.css";

const Footer = () => {
  return (
    <footer className="footer">

      <div className="container">

        <div className="footer-top">

          <div className="footer-brand">

            <h2>
              Rajesh Subramanian
            </h2>

            <p>
              Assistant General Manager – Packaging Development & SCM ·
              FMCG · Pharmaceutical · Personal Care
              <br />
              20+ years of expertise in packaging innovation,
              quality excellence, vendor development,
              and strategic leadership.
            </p>

            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noreferrer"
              className="footer-linkedin"
            >
              <FaLinkedin />
              LinkedIn Profile
            </a>

          </div>

          <div className="footer-nav">

            <div>
              <a href="#about">About</a>
              <a href="#journey">Journey</a>
              <a href="#skills">Skills</a>
            </div>

            <div>
              <a href="#education">Education</a>
              <a href="#passion">Passion</a>
              <a href="#contact">Contact</a>
            </div>

          </div>

        </div>

        <div className="footer-divider"></div>

        <div className="footer-bottom">

          <p>
            © {new Date().getFullYear()}
            {" "}
            Rajesh Subramanian.
            All rights reserved.
          </p>

          <p>
            Packaging that protects,
            performs, and earns trust.
          </p>

        </div>

      </div>

    </footer>
  );
};

export default Footer;