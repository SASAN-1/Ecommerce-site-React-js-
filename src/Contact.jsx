import React from 'react'
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

const Contact = () => {
  return (
    <>
      <h1 className="contact-title">
        Get in touch
      </h1>
      <div className="contact-container">
        <ul className="info-list">
          <li className="info">
            <FaMapMarkerAlt className='icon'/>
            <div className="info-details">
              <h2>OUR LOCATION</h2>
              <p>Lokanthali, Bhaktapur</p>
            </div>
          </li>
          <li className="info">
            <FaEnvelope className='icon'/>
            <div className="info-details">
              <h2>EMAIL ADDRESS</h2>
              <p>info@sasan.com</p>
            </div>
          </li>
          <li className="info">
            <FaPhoneAlt className='icon'/>
            <div className="info-details">
              <h2>PHONE NUMBER</h2>
              <p>+977 9800000000</p>
            </div>
          </li>
        </ul>
        <form action="#" className="contact-form">
            <h3>SEND US A MESSAGE</h3>
            <input type="text" placeholder="Your Name" className="form-input" required/>
            <input type="email" placeholder="Your Email" className="form-input" required/>
            <textarea placeholder="Write your message here..." class="form-input"></textarea>
            <button type="submit">Send Message</button>
        </form>
      </div>
    </>
  )
}

export default Contact