
import { useState } from "react";
import { FiArrowLeft, FiArrowRight, FiStar } from "react-icons/fi";
import { AnimatePresence, motion } from "framer-motion";
import "./style/testimonials.css";

function Testimonials({ school }) {
  const data = school.testimonials;
  const [active, setActive] = useState(0);

  if (!data?.items?.length) return null;

  const items = data.items;
  const current = items[active];

  const change = (direction) => {
    setActive((prev) =>
      (prev + direction + items.length) % items.length
    );
  };

  return (
    <section className="testimonials-section" id="testimonials">

      <div className="testimonials-container">

        <div className="testimonials-heading">
          <span>{data.label}</span>
          <h2>{data.title}</h2>
        </div>

        <div className="testimonial-main">

          <span className="testimonial-quote">“</span>

          <AnimatePresence mode="wait">
            <motion.div
              className="testimonial-content"
              key={active}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: .35 }}
            >
              <div className="testimonial-stars" aria-label="5 stars">
                {[1, 2, 3, 4, 5].map((star) => (
                  <FiStar key={star} />
                ))}
              </div>

              <h3>{current.message}</h3>

              <div className="testimonial-author">
                <strong>{current.name}</strong>
                <span>{current.role}</span>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="testimonial-controls">
            <span>
              {String(active + 1).padStart(2, "0")} /{" "}
              {String(items.length).padStart(2, "0")}
            </span>

            <button onClick={() => change(-1)} aria-label="Previous testimonial">
              <FiArrowLeft />
            </button>

            <button onClick={() => change(1)} aria-label="Next testimonial">
              <FiArrowRight />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
}

export default Testimonials;
