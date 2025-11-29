import React from "react";
import "./Footer.css";

// Material Icons
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";

function Footer() {
  return (
    <footer className="footer">

      <div className="social-icons">
        <FacebookIcon className="social-icon" />
        <InstagramIcon className="social-icon" />
        <YouTubeIcon className="social-icon" />
      </div>

      <ul className="footer-links">
        <li>Audio Description</li>
        <li>Help Center</li>
        <li>Gift Cards</li>

        <li>Investor Relations</li>
        <li>Jobs</li>
        <li>Terms of Use</li>

        <li>Legal Notice</li>
        <li>Cookie Preferences</li>
        <li>Corporate Information</li>
      </ul>

      <button className="service-code">Service Code</button>

      <p className="copy">© 1997–2024 Netflix, Inc.</p>
    </footer>
  );
}

export default Footer;
