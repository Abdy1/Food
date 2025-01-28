// components/Footer.tsx
import React from 'react';


const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-sections">
        {/* Company Section */}
        <div className="footer-section company">
          <h4>Company</h4>
          <ul>
            <li>About Us</li>
            <li>Team</li>
            <li>Careers</li>
            <li>Blog</li>
          </ul>
        </div>

        {/* Contact Section */}
        <div className="footer-section contact">
          <h4>Contact</h4>
          <ul>
            <li>Help & Support</li>
            <li>Partner with Us</li>
            <li>Ride With Us</li>
          </ul>
        </div>

        {/* Legal Section */}
        <div className="footer-section legal">
          <h4>Legal</h4>
          <ul>
            <li>Terms & Conditions</li>
            <li>Refund & Cancellation</li>
            <li>Privacy Policy</li>
          </ul>
        </div>

        {/* Follow Us Section */}
        <div className="footer-section follow-us">
          <h4>Follow Us</h4>
          <div className="social-icons">
            <img src="/instagram-icon.png" alt="Instagram" />
            <img src="/facebook-icon.png" alt="Facebook" />
            <img src="/twitter-icon.png" alt="Twitter" />
          </div>
          <p>Receive exclusive offers in your mailbox</p>

          {/* Email input and Subscribe Button */}
          <div className="subscribe">
            <input type="email" placeholder="Enter your email" />
            <button className="subscribe-btn">Subscribe</button>
          </div>
        </div>
      </div>

      {/* Footer Line */}
      <div className="footer-line"></div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        <p>All rights reserved &copy; Your Company, 2021</p>
      </div>
    </footer>
  );
};

export default Footer;
