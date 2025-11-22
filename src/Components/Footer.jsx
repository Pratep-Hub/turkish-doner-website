import "../Components/Footer.css";
import { FaWhatsapp, FaInstagram, FaFacebookF, FaTwitter } from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer-section">

      {/* MAIN FOOTER */}
      <div className="footer-container">

        {/* LOGO + ABOUT */}
        <div className="footer-box">
          <h2 className="footer-logo">
            <span className="blue-text">Turkish</span>
            <span className="orange-text"> Doner</span>
          </h2>
          <p className="footer-about">
            Delivering authentic flavors with premium quality shawarma, burgers, grills, and more.
          </p>
        </div>

        {/* QUICK LINKS */}
        <div className="footer-box footer-center-links">
          <h3 className="footer-title">Quick Links</h3>
          <ul className="footer-links">
            <li onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>Home</li>
            <li onClick={() => document.getElementById("menu")?.scrollIntoView({ behavior: "smooth" })}>Menu</li>
            <li onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}>About Us</li>
            <li onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}>Contact</li>
          </ul>
        </div>

        {/* SOCIAL MEDIA — ICONS RIGHT SIDE */}
        <div className="footer-box footer-social-right">
          <h3 className="footer-title">Follow Us</h3>

          <div className="social-row">
            <FaWhatsapp className="icon" />
            <p>WhatsApp</p>
          </div>

          <div className="social-row">
            <FaInstagram className="icon" />
            <p>Instagram</p>
          </div>

          <div className="social-row">
            <FaFacebookF className="icon" />
            <p>Facebook</p>
          </div>

          <div className="social-row">
            <FaTwitter className="icon" />
            <p>Twitter</p>
          </div>

        </div>

      </div>

      {/* COPYRIGHT */}
      <div className="footer-bottom">
        © {new Date().getFullYear()} Turkish Doner — All Rights Reserved.
      </div>

    </footer>
  );
}

export default Footer;
