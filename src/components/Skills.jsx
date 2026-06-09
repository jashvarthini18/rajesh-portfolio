import { motion } from "framer-motion";
import {
  FiPackage,
  FiShield,
  FiEdit3,
  FiTruck,
  FiBriefcase,
} from "react-icons/fi";

import { expertise } from "../data/portfolioData";
import "../styles/skills.css";

const iconMap = {
  package: <FiPackage />,
  shield: <FiShield />,
  palette: <FiEdit3 />,
  truck: <FiTruck />,
  briefcase: <FiBriefcase />,
};

const Skills = () => {
  return (
    <section id="skills" className="skills-section">
      <div className="container">

        <p className="skills-label">
          SKILLS & EXPERTISE
        </p>

        <h2 className="skills-heading">
          Core capabilities.
          <br />
          End-to-end impact.
        </h2>

        <p className="skills-description">
          A comprehensive blend of technical expertise,
          packaging innovation, quality excellence,
          and leadership experience developed across
          FMCG, pharmaceutical, and personal care industries.
        </p>

        <div className="expertise-grid">

          {expertise.map((item, index) => (
            <motion.div
              key={index}
              className="expertise-card"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
              }}
            >
              <div className="card-header">

                <div className="icon-circle">
                  {iconMap[item.icon]}
                </div>

                <h3>{item.title}</h3>

              </div>

              <div className="skill-tags">

                {item.skills.map((skill, i) => (
                  <span key={i} className="skill-tag">
                    {skill}
                  </span>
                ))}

              </div>
            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default Skills;