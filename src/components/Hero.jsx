import { motion } from "framer-motion";
import { FaLinkedin, FaFileDownload } from "react-icons/fa";

import { personalInfo } from "../data/portfolioData";

import "../styles/hero.css";

const Hero = () => {
  return (
    <section className="hero">
      <div className="container hero-container">
        <motion.div
          className="hero-content"
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="hero-subtitle">Packaging Excellence</p>

          <h1>{personalInfo.name}</h1>

          <h2>{personalInfo.role}</h2>

          <p className="hero-tagline">{personalInfo.tagline}</p>

          <p className="hero-description">
            Driving innovation, quality, compliance, and cost optimization
            through world-class packaging solutions across FMCG,
            Pharmaceutical, and Personal Care industries.
          </p>

          <div className="hero-buttons">
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noreferrer"
              className="primary-btn"
            >
              <FaLinkedin />
              LinkedIn
            </a>

            <a href={personalInfo.resume} className="secondary-btn">
              <FaFileDownload />
              Resume
            </a>
          </div>
        </motion.div>

        <motion.div
          className="hero-card"
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <div className="experience-box">
            <h3>18+</h3>
            <span>Years Experience</span>
          </div>

          <div className="experience-box">
            <h3>FMCG</h3>
            <span>Industry Expertise</span>
          </div>

          <div className="experience-box">
            <h3>Pharma</h3>
            <span>Regulated Markets</span>
          </div>

          <div className="experience-box">
            <h3>Innovation</h3>
            <span>Packaging Leadership</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;