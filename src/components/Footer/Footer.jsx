import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3>About Us</h3>
          <p>We are dedicated to saving lives by providing a platform for blood donation and transfusion.</p>
        </div>
        <div className="footer-section">
          <h3>Contact Us</h3>
          <p>Email: contact@bloodbank.com</p>
          <p>Phone: +1234567890</p>
        </div>
        <div className="footer-section">
          <h3>Follow Us</h3>
          <ul className="social-links">
            <li><a href="#">Facebook</a></li>
            <li><a href="#">Twitter</a></li>
            <li><a href="#">Instagram</a></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom"> 
      <p className='font-style-one'>&copy; 2024 Manish Yelam - Blood Bank </p>
      </div>
    </footer>
  );
}

export default Footer;

