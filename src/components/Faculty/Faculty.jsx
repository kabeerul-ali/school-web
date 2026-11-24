
import { motion } from "framer-motion";
import { FiArrowUpRight } from "react-icons/fi";
import "./style/faculty.css";

function Faculty({ school }) {
  const faculty = school.faculty;

  if (!faculty?.members?.length) return null;

  return (
    <section className="faculty-section" id="faculty">

      <div className="faculty-heading">
        <span>{faculty.label}</span>
        <h2>{faculty.title}</h2>
      </div>

      <div className="faculty-grid">
        {faculty.members.map((member, index) => (
          <motion.article
            className="faculty-card"
            key={member.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * .12 }}
          >
            <div className="faculty-image">
              <img src={member.image} alt={member.name} loading="lazy" />
              <span className="faculty-image-icon">
                <FiArrowUpRight />
              </span>
            </div>

            <div className="faculty-info">
              <h3>{member.name}</h3>
              <span>{member.role}</span>
            </div>
          </motion.article>
        ))}
      </div>

    </section>
  );
}

export default Faculty;
