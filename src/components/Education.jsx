import { motion } from "framer-motion";
import { FiAward } from "react-icons/fi";

import { education } from "../data/portfolioData";
import "../styles/education.css";

const Education = () => {
  return (
    <section id="education" className="education-section">
      <div className="container">

        <p className="education-label">
          EDUCATION
        </p>

        <h2 className="education-heading">
          A foundation in science and design.
        </h2>

        <div className="education-grid">

          {education.map((item, index) => (
            <motion.div
              key={index}
              className="education-card"
              initial={{
                opacity: 0,
                y: 40,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                delay: index * 0.15,
              }}
            >

              <div className="education-icon">
                <FiAward />
              </div>

              <h3>{item.degree}</h3>

              <p>{item.institute}</p>

            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default Education;