
import { motion } from "framer-motion";
import { FiArrowUpRight } from "react-icons/fi";
import "./style/admission.css";

function Admission({ school }) {
  const admission = school.admission;

  if (!admission) return null;

  return (
    <section
      className="admission-section"
      id="admission"
      style={{
        backgroundImage: `url(${admission.image})`
      }}
    >
      <div className="admission-overlay" />

      <motion.div
        className="admission-content"
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: .8 }}
      >
        <span>{admission.label}</span>

        <h2>{admission.title}</h2>

        <p>{admission.description}</p>

        <a href={admission.link || "#contact"}>
          {admission.buttonText}
          <FiArrowUpRight />
        </a>
      </motion.div>

    </section>
  );
}

export default Admission;
