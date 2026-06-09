import { motion } from "framer-motion";
import "../styles/passion.css";

const Passion = () => {
  return (
    <section id="passion" className="passion-section">
      <div className="container">

        <p className="passion-label">
          PASSION & PURPOSE
        </p>

        <h2 className="passion-heading">
          A career driven by purpose.

          <br />
          Packaging that protects, performs, and earns trust.
        </h2>

        <div className="passion-content">

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <p>
              For Me, packaging has never been just
              about materials, dimensions, or specifications.
            </p>

            <p>
              It is the first promise a brand makes to
              a consumer.
            </p>

            <p>
              Every package carries a responsibility —
              to protect, communicate, comply,
              and ultimately earn trust.
            </p>

            <p>
              Across more than two decades in FMCG,
              pharmaceutical, and personal care industries,
              he has approached packaging as the bridge
              between innovation and reliability.
            </p>

            <p>
              Whether leading sustainable redesigns,
              driving cost optimization, strengthening
              quality systems, or mentoring future
              professionals, his mission remains simple:
            </p>

            <blockquote>
              Creating packaging that performs with purpose.
            </blockquote>

          </motion.div>

          <div className="purpose-points">

            <div className="purpose-item">
              Protecting products.
              <span>
                Building consumer confidence.
              </span>
            </div>

            <div className="purpose-item">
              Balancing innovation.
              <span>
                With responsibility.
              </span>
            </div>

            <div className="purpose-item">
              Transforming ideas.
              <span>
                Into trusted experiences.
              </span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default Passion;