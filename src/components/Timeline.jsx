import { motion } from "framer-motion";
import { timeline } from "../data/portfolioData";
import { FiBriefcase } from "react-icons/fi";

import "../styles/timeline.css";

const Timeline = () => {
  return (
    <section id="journey" className="journey-section">
      <div className="container">

        <p className="journey-label">
          PROFESSIONAL JOURNEY
        </p>

        <h2 className="journey-heading">
          Two decades. Five chapters.
          <br />
          One craft.
        </h2>

        <div className="journey-timeline">

          {timeline.map((item, index) => (
            <motion.div
              key={index}
              className={`journey-item ${
                index % 2 === 0 ? "left" : "right"
              }`}
              initial={{
                opacity: 0,
                y: 40,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{ once: true }}
            >

              <div className="journey-content">

                <span className="journey-year">
                  {item.year}
                </span>

                <h3>{item.role}</h3>

                <p className="company">
                  <FiBriefcase />
                  {item.company}
                </p>

                <p className="description">
                  {item.description}
                </p>

              </div>

              <div className="timeline-center">
                <div className="timeline-dot"></div>
              </div>

            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default Timeline;