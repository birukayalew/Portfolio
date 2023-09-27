import React, { useState } from 'react';
import {
  FaEnvelopeOpen,
  FaPhoneSquareAlt,
  FaLinkedinIn,
  FaGithub,
  FaYoutube,
  FaDribbble,
} from "react-icons/fa";
import { FiSend } from 'react-icons/fi';
import './contact.css';

const Contact = () => {
  const [messageDisplayed, setMessageDisplayed] = useState(false);

  const handleFormSubmit = (e) => {
    e.preventDefault();

    // Display a message indicating that the message was not sent
    setMessageDisplayed(true);
  };

  return (
    <section className="contact section">
      <h2 className="section__title">
        Get In<span>Touch</span>
      </h2>

      <div className="contact__container container grid">
        <div className="contact__data">
          <h3 className="contact__title">Let's have a chat</h3>
          <p className="contact__description">
            Feel free to get in touch with me. I am always open to discussing
            new projects, creative ideas, or opportunities to be part of your
            visions.
          </p>

          <div className="contact__info">
            <div className="info__item">
              <FaEnvelopeOpen className='info__icon' />
              <div>
                <span className="info__title">Mail me</span>
                <h4 className="info__desc">se.biruk.ayalew@gmail.com</h4>
              </div>
            </div>

            <div className="info__item">
              <FaPhoneSquareAlt className='info__icon' />
              <div>
                <span className="info__title">Call me</span>
                <h4 className="info__desc">+251953266119</h4>
              </div>
            </div>
          </div>

          <div className="contact__socials">
            <a href="https://www.linkedin.com/in/biruk-tadesse-1024321ba/" target="_blank" className="contact__social-link">
              <FaLinkedinIn />
            </a>
            <a href="https://github.com/birukayalew" target="_blank" className="contact__social-link">
              <FaGithub />
            </a>
            <a href="https://youtube.com" target="_blank" className="contact__social-link">
              <FaYoutube />
            </a>
            <a href="https://dribble.com" target="_blank" className="contact__social-link">
              <FaDribbble />
            </a>
          </div>
        </div>

        <form onSubmit={handleFormSubmit} className="contact__form" id="contactForm">
          <div className="form__input-group">
            <div className="form__input-div">
              <input
                type="text"
                placeholder='Your Name'
                className="form__control"
                id="name"
              />
            </div>

            <div className="form__input-div">
              <input
                type="email"
                placeholder='Your Email'
                className="form__control"
                id="email"
              />
            </div>

            <div className="form__input-div">
              <input
                type="text"
                placeholder='Your Subject'
                className="form__control"
                id="subject"
              />
            </div>
          </div>

          <div className="form__input-div">
            <textarea
              placeholder='Your Message'
              className="form__control textarea"
              id="message"
            ></textarea>
          </div>

          {messageDisplayed && (
            <div id="messageContainer" className="message-container">
              Message not sent for now. Please contact me through email.
            </div>
          )}

          <button type="submit" className="button" id="sendMessageButton">
            Send Message
            <span className="button__icon contact__button-icon">
              <FiSend />
            </span>
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
