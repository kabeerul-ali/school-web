
import { motion } from "framer-motion";
import { FiArrowUpRight } from "react-icons/fi";
import "./style/achievements.css";

function Achievements({ school }) {
  const achievements = school.achievements;

  if (!achievements?.items?.length) return null;

  return (
    <section className="achievements-section" id="achievements">

      <div className="achievements-container">

        <div className="achievements-heading">
          <span>{achievements.label}</span>
          <h2>{achievements.title}</h2>
        </div>

        <div className="achievement-list">
          {achievements.items.map((item, index) => (
            <motion.article
              className="achievement-item"
              key={`${item.year}-${item.title}`}
              initial={{ opacity: 0, x: -25 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * .12 }}
            >
              <span className="achievement-year">{item.year}</span>

              <div className="achievement-info">
                <h3>{item.title}</h3>
                <p>{item.detail}</p>
              </div>

              <FiArrowUpRight className="achievement-arrow" />
            </motion.article>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Achievements;
