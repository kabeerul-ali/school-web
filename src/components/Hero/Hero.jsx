
import { motion } from "framer-motion";
import { FiArrowDown, FiArrowUpRight } from "react-icons/fi";
import "./style/hero.css";

function Hero({ school }) {
  const hero = school.hero;

  return (
    <section
      className="school-hero"
      id="home"
      style={{ backgroundImage: `url(${hero.image})` }}
    >
      <div className="hero-overlay" />

      <div className="hero-content">

        <motion.span
          className="hero-eyebrow"
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: .8 }}
        >
          {hero.eyebrow}
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 45 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: .2 }}
        >
          {hero.title}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: .8, delay: .4 }}
        >
          {hero.description}
        </motion.p>

        <motion.a
          href="#about"
          className="hero-button"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: .7 }}
        >
          {hero.buttonText}
          <FiArrowUpRight />
        </motion.a>

      </div>

      <div className="hero-bottom">
        <span>EST. INSPIRING FUTURES</span>
        <a href="#about">
          SCROLL TO EXPLORE <FiArrowDown />
        </a>
      </div>
    </section>
  );
}

export default Hero;
