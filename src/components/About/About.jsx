
import { motion } from "framer-motion";
import { FiArrowUpRight } from "react-icons/fi";
import "./style/about.css";

function About({ school }) {
  const about = school.about;

  return (
    <section className="about-section" id="about">

      <div className="about-container">

        <motion.div
          className="about-visual"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.9 }}
        >
          <div className="about-image">
            <img src={about.image} alt={school.name} loading="lazy" />
          </div>

          <div className="about-experience">
            <strong>{about.experience || "25+"}</strong>
            <span>
              {about.experienceLabel || "Years of Excellence"}
            </span>
          </div>

          <span className="about-image-caption">
            EDUCATION · EXCELLENCE · INSPIRATION
          </span>
        </motion.div>

        <motion.div
          className="about-content"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.9 }}
        >
          <span className="about-label">{about.label}</span>

          <h2>{about.title}</h2>

          <div className="about-divider" />

          <p>{about.description}</p>

          <a href="#academics" className="about-button">
            {about.buttonText || "Discover Our Story"}
            <FiArrowUpRight />
          </a>
        </motion.div>

      </div>

      {school.stats?.length > 0 && (
        <div className="stats-section">
          <div className="stats-container">
            {school.stats.map((stat, index) => (
              <motion.div
                className="stat-item"
                key={stat.label}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.12 }}
              >
                <strong>{stat.value}</strong>
                <span>{stat.label}</span>
              </motion.div>
            ))}
          </div>
        </div>
      )}

    </section>
  );
}

export default About;
