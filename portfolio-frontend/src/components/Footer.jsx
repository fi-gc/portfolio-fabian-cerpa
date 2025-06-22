import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope, FaHeart } from "react-icons/fa";
import "../styles/Footer.css";

const Footer = () => (
  <footer className="footer-wrapper">
    <div className="footer-content">
      <div className="copyright">
        © {new Date().getFullYear()} Fabián Ignacio Cerpa González
      </div>
      
      <div className="icons">
        <a href="https://github.com/fabiancerpa" target="_blank" rel="noopener noreferrer" title="GitHub">
          <FaGithub size={20} />
        </a>
        <a href="https://www.linkedin.com/in/fabian-gonzalez-cerpa" target="_blank" rel="noopener noreferrer" title="LinkedIn">
          <FaLinkedin size={20} />
        </a>
        <a href="mailto:gonzalez.cerpa.fi@gmail.com" title="Email">
          <FaEnvelope size={20} />
        </a>
      </div>
      
      <div className="made-with">
        Hecho con <FaHeart className="heart-icon" size={14} /> en React
      </div>
    </div>
  </footer>
);

export default Footer;
