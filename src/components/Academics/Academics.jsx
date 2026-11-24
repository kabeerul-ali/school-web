
import { motion } from "framer-motion";
import { FiArrowUpRight } from "react-icons/fi";
import "./style/academics.css";

function Academics({ school }) {
  const { academics, facilities } = school;

  return (
    <>
      {/* ACADEMICS */}

      {academics && (
        <section className="academics-section" id="academics">

          <div className="academics-container">

            <div className="academics-heading">
              <span>{academics.label}</span>
              <h2>{academics.title}</h2>
              <p>{academics.description}</p>
            </div>

            <div className="academic-programs">
              {academics.programs?.map((program, index) => (
                <motion.article
                  className="academic-program"
                  key={program.number || program.name}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.12 }}
                >
                  <span className="academic-number">
                    {program.number}
                  </span>

                  <div className="academic-info">
                    <h3>{program.name}</h3>
                    <p>{program.detail}</p>
                  </div>

                  <FiArrowUpRight className="academic-arrow" />
                </motion.article>
              ))}
            </div>

          </div>
        </section>
      )}

      {/* FACILITIES */}

      {facilities && (
        <section className="facilities-section" id="facilities">

          <div className="facilities-heading">
            <div>
              <span>{facilities.label}</span>
              <h2>{facilities.title}</h2>
            </div>

            <p>{facilities.description}</p>
          </div>

          <div className="facilities-grid">
            {facilities.items?.map((item, index) => (
              <motion.article
                className={`facility-item facility-item-${index + 1}`}
                key={item.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.12 }}
              >
                <img
                  src={item.image}
                  alt={item.name}
                  loading="lazy"
                />

                <div className="facility-overlay">
                  <span>{item.category}</span>
                  <h3>{item.name}</h3>
                  <FiArrowUpRight />
                </div>
              </motion.article>
            ))}
          </div>

        </section>
      )}
    </>
  );
}

export default Academics;
