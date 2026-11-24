
import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaLinkedinIn,
  FaArrowUp,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
} from "react-icons/fa";

import { Link } from "react-router-dom";
import "./style/footer.css";

const Footer = ({ school, slug }) => {
  const contact = school.contact || {};
  const social = {
    ...(school.social || {}),
    ...(contact.social || {}),
  };

  const quickLinks = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Academics", href: "#academics" },
    { label: "Facilities", href: "#facilities" },
    { label: "Gallery", href: "#gallery" },
    { label: "Contact", href: "#contact" },
  ];

  const socialLinks = [
    { url: social.facebook, icon: <FaFacebookF />, label: "Facebook" },
    { url: social.instagram, icon: <FaInstagram />, label: "Instagram" },
    { url: social.youtube, icon: <FaYoutube />, label: "YouTube" },
    { url: social.linkedin, icon: <FaLinkedinIn />, label: "LinkedIn" },
  ].filter((item) => item.url);

  return (
    <footer className="school-footer">
      <div className="footer-main">
        <div className="footer-brand">
          {school.logo && (
            <img src={school.logo} alt={`${school.name} logo`} />
          )}

          <Link to={`/school/${slug}`} className="footer-school-name">
            {school.name}
          </Link>

          <p>
            {school.footer?.description ||
              school.tagline ||
              "Inspiring excellence and shaping tomorrow's leaders."}
          </p>

          <div className="footer-socials">
            {socialLinks.map((item) => (
              <a
                key={item.label}
                href={item.url}
                target="_blank"
                rel="noreferrer"
                aria-label={item.label}
              >
                {item.icon}
              </a>
            ))}
          </div>
        </div>

        <div className="footer-links">
          <h3>Explore</h3>

          {quickLinks.map((link) => (
            <a key={link.label} href={link.href}>
              {link.label}
            </a>
          ))}
        </div>

        <div className="footer-contact">
          <h3>Get In Touch</h3>

          {contact.address && (
            <p>
              <FaMapMarkerAlt />
              <span>{contact.address}</span>
            </p>
          )}

          {contact.phone && (
            <a href={`tel:${contact.phone}`}>
              <FaPhoneAlt />
              <span>{contact.phone}</span>
            </a>
          )}

          {contact.email && (
            <a href={`mailto:${contact.email}`}>
              <FaEnvelope />
              <span>{contact.email}</span>
            </a>
          )}
        </div>
      </div>

      <div className="footer-bottom">
        <p>
          © {new Date().getFullYear()} {school.name}. All rights reserved.
        </p>

        <a href="#home" className="footer-top">
          Back to top <FaArrowUp />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
