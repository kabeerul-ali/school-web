
import { useState } from "react";
import { FiArrowLeft, FiArrowRight, FiX } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";
import "./style/gallery.css";

function Gallery({ school }) {
  const gallery = school.gallery;
  const [activeIndex, setActiveIndex] = useState(null);

  if (!gallery?.images?.length) return null;

  const images = gallery.images;

  const previous = () => {
    setActiveIndex((current) =>
      (current - 1 + images.length) % images.length
    );
  };

  const next = () => {
    setActiveIndex((current) =>
      (current + 1) % images.length
    );
  };

  return (
    <section className="gallery-section" id="gallery">

      <div className="gallery-heading">
        <span>{gallery.label}</span>
        <h2>{gallery.title}</h2>
      </div>

      <div className="gallery-grid">
        {images.map((item, index) => (
          <motion.button
            type="button"
            className={`gallery-item gallery-item-${index % 5 + 1}`}
            key={`${item.title}-${index}`}
            onClick={() => setActiveIndex(index)}
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: (index % 5) * .1 }}
            aria-label={`View ${item.title}`}
          >
            <img src={item.image} alt={item.title} loading="lazy" />
            <span>{item.title}</span>
          </motion.button>
        ))}
      </div>

      <AnimatePresence>
        {activeIndex !== null && (
          <motion.div
            className="gallery-lightbox"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveIndex(null)}
          >
            <button
              className="gallery-close"
              onClick={() => setActiveIndex(null)}
              aria-label="Close gallery"
            >
              <FiX />
            </button>

            <button
              className="gallery-prev"
              onClick={(e) => {
                e.stopPropagation();
                previous();
              }}
              aria-label="Previous image"
            >
              <FiArrowLeft />
            </button>

            <div className="gallery-lightbox-content">
              <img
                src={images[activeIndex].image}
                alt={images[activeIndex].title}
                onClick={(e) => e.stopPropagation()}
              />
              <p>{images[activeIndex].title}</p>
              <span>{activeIndex + 1} / {images.length}</span>
            </div>

            <button
              className="gallery-next"
              onClick={(e) => {
                e.stopPropagation();
                next();
              }}
              aria-label="Next image"
            >
              <FiArrowRight />
            </button>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
}

export default Gallery;
