
import {
  FiMapPin,
  FiPhone,
  FiMail,
  FiClock,
  FiArrowUpRight
} from "react-icons/fi";

import {
  FaFacebookF,
  FaInstagram,
  FaYoutube
} from "react-icons/fa";

import "./style/contact.css";

function Contact({ school }) {
  const contact = school.contact;

  if (!contact) return null;

  const socialIcons = {
    facebook: FaFacebookF,
    instagram: FaInstagram,
    youtube: FaYoutube
  };

  const social = contact.social || school.social || {};

  return (
    <section className="contact-section" id="contact">

      <div className="contact-container">

        <div className="contact-heading">
          <span>GET IN TOUCH</span>
          <h2>Let's Begin Something Extraordinary.</h2>
          <p>
            We would love to hear from you. Connect with our school
            and discover the opportunities waiting for your child.
          </p>
        </div>

        <div className="contact-content">

          <div className="contact-details">

            <div className="contact-detail">
              <span><FiMapPin /></span>
              <div>
                <small>OUR LOCATION</small>
                <p>{contact.address || "Address unavailable"}</p>
              </div>
            </div>

            {contact.phone && (
              <a href={`tel:${contact.phone}`} className="contact-detail">
                <span><FiPhone /></span>
                <div>
                  <small>CALL US</small>
                  <p>{contact.phone}</p>
                </div>
              </a>
            )}

            {contact.email && (
              <a href={`mailto:${contact.email}`} className="contact-detail">
                <span><FiMail /></span>
                <div>
                  <small>EMAIL US</small>
                  <p>{contact.email}</p>
                </div>
              </a>
            )}

            {contact.hours && (
              <div className="contact-detail">
                <span><FiClock /></span>
                <div>
                  <small>OFFICE HOURS</small>
                  <p>{contact.hours}</p>
                </div>
              </div>
            )}

            <div className="contact-socials">
              {Object.entries(social).map(([platform, url]) => {
                const Icon = socialIcons[platform];

                if (!Icon || !url) return null;

                return (
                  <a
                    key={platform}
                    href={url}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={platform}
                  >
                    <Icon />
                  </a>
                );
              })}
            </div>

          </div>

          <form
            className="contact-form"
            action={contact.email ? `mailto:${contact.email}` : undefined}
            method="post"
            encType="text/plain"
          >
            <span>SEND AN ENQUIRY</span>

            <div className="contact-input-row">
              <input
                type="text"
                name="Name"
                placeholder="Your Name"
                required
              />

              <input
                type="email"
                name="Email"
                placeholder="Email Address"
                required
              />
            </div>

            <input
              type="tel"
              name="Phone"
              placeholder="Phone Number"
              required
            />

            <textarea
              name="Message"
              rows="5"
              placeholder="How can we help you?"
              required
            />

            <button type="submit">
              Send Enquiry <FiArrowUpRight />
            </button>

            <small>
              This enquiry form uses your device's configured email application.
            </small>
          </form>

        </div>

        {contact.mapUrl && (
          <div className="contact-map">
            <iframe
              src={contact.mapUrl}
              title={`${school.name} location`}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
        )}

      </div>
    </section>
  );
}

export default Contact;
