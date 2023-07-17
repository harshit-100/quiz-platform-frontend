import React from "react";
import "../assets/Footer.css"; // Import the CSS file for styling

const Footer = () => {
  return (
    <footer className="footer">
      <p>&copy; {new Date().getFullYear()} onesteply. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
