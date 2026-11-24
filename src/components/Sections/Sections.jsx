
import { motion } from "framer-motion";
import { FiArrowUpRight } from "react-icons/fi";
import "./style/sections.css";

function Sections({ school }) {
  const { vision, mission, principal } = school;

  return (
    <>
      {/* VISION & MISSION */}

      {(vision || mission) && (
        <section className="purpose-section">

          <div className="purpose-heading">
            <span>THE FOUNDATION OF OUR EDUCATION</span>
            <h2>Driven By Purpose.<br />Defined By Excellence.</h2>
          </div>

          <div className="purpose-grid">

            {vision && (
              <motion.article
                className="purpose-item vision-item"
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <span className="purpose-number">01</span>
                <span className="purpose-label">{vision.label}</span>
                <h3>{vision.title}</h3>
                <p>{vision.description}</p>
                <FiArrowUpRight className="purpose-icon" />
              </motion.article>
            )}

            {mission && (
              <motion.article
                className="purpose-item mission-item"
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: .15 }}
              >
                <span className="purpose-number">02</span>
                <span className="purpose-label">{mission.label}</span>
                <h3>{mission.title}</h3>
                <p>{mission.description}</p>
                <FiArrowUpRight className="purpose-icon" />
              </motion.article>
            )}

          </div>
        </section>
      )}

      {/* PRINCIPAL MESSAGE */}

      {principal && (
        <section className="principal-section">

          <div className="principal-container">

            <motion.div
              className="principal-image"
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <img
                src={principal.image}
                alt={principal.name}
                loading="lazy"
              />
              <span className="principal-image-label">
                LEADERSHIP & INSPIRATION
              </span>
            </motion.div>

            <motion.div
              className="principal-content"
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: .8 }}
            >
              <span className="principal-label">
                A MESSAGE FROM OUR PRINCIPAL
              </span>

              <span className="principal-quote">“</span>

              <h2>{principal.message}</h2>

              <div className="principal-signature">
                <strong>{principal.signature || principal.name}</strong>
                <span>{principal.designation}</span>
              </div>

            </motion.div>

          </div>
        </section>
      )}
    </>
  );
}

export default Sections;
