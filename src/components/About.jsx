import { motion } from "framer-motion";
import {
  FiTarget,
  FiAward,
  FiShield,
} from "react-icons/fi";

import "../styles/about.css";

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="container">

        <motion.p
          className="about-label"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
        >
          ABOUT
        </motion.p>

        <motion.h2
          className="about-heading"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          A career built on precision,
          <br />
          innovation, and trust.
        </motion.h2>

        <div className="about-grid">

          <motion.div
            className="about-content"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
          >
            <p>
              From a sharp-eyed <strong>QA/QC Executive</strong>
              at the start of his career to a
              <strong> Assistant General Manager</strong> leading packaging
              development for some of India's trusted
              consumer and pharmaceutical brands,
              Rajesh's journey reflects continuous growth,
              technical mastery, and leadership excellence.
            </p>

            <p>
              With more than eighteen years of experience
              spanning FMCG, Pharmaceutical, and Personal
              Care industries, he has successfully delivered
              packaging solutions that balance quality,
              compliance, cost optimization, and innovation.
            </p>

            <p>
              His expertise bridges regulatory precision
              with market-focused creativity, enabling
              products to reach consumers with packaging
              that protects, communicates, and performs.
            </p>
          </motion.div>

          <div className="about-highlights">

            <motion.div
              className="highlight-card"
              whileHover={{ y: -5 }}
            >
              <div className="icon-box">
                <FiTarget />
              </div>

              <div>
                <h3>Leadership</h3>
                <p>
                  Cross-functional collaboration across
                  packaging, sourcing, quality,
                  regulatory, and supply chain teams.
                </p>
              </div>
            </motion.div>

            <motion.div
              className="highlight-card"
              whileHover={{ y: -5 }}
            >
              <div className="icon-box">
                <FiAward />
              </div>

              <div>
                <h3>Innovation</h3>
                <p>
                  Sustainable packaging, material
                  optimization, artwork excellence,
                  and cost-smart engineering.
                </p>
              </div>
            </motion.div>

            <motion.div
              className="highlight-card"
              whileHover={{ y: -5 }}
            >
              <div className="icon-box">
                <FiShield />
              </div>

              <div>
                <h3>Excellence</h3>
                <p>
                  Commitment to quality, compliance,
                  consumer safety, and successful
                  launches across regulated markets.
                </p>
              </div>
            </motion.div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default About;