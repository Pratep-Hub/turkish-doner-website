import "../Components/Footer.css";
import ZomatoLogo from "../assets/Zomato.png";
import SwiggyLogo from "../assets/swiggy.jpg";
import Whatsapp from "../assets/whatsapp.png";   // FIXED NAME
import Instra from "../assets/Instra.png";       // Instagram image logo

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

        {/* SOCIAL MEDIA RIGHT */}
        <div className="footer-box footer-social-right">
          <h3 className="footer-title">Follow Us</h3>

          {/* WhatsApp */}
          <div
            className="social-row"
            onClick={() => window.open("https://wa.me/9846055044", "_blank")}
          >
            <img
              src={Whatsapp}
              alt="WhatsApp"
              style={{ width: "22px", height: "22px" }}
            />
            <p>WhatsApp</p>
          </div>

          {/* Instagram */}
          <div
            className="social-row"
            onClick={() =>
              window.open(
                "https://www.instagram.com/turkishdoner_tpr?igsh=aHYyNHBzY3V0MHBy",
                "_blank"
              )
            }
          >
            <img
              src={Instra}
              alt="Instagram"
              style={{ width: "22px", height: "22px" }}
            />
            <p>Instagram</p>
          </div>

          {/* Zomato */}
          <div
            className="social-row"
            onClick={() => window.open("https://zomato.onelink.me/xqzv/ecz61n5n", "_blank")}
          >
            <img
              src={ZomatoLogo}
              alt="Zomato"
              style={{ width: "22px", height: "22px" }}
            />
            <p>Zomato</p>
          </div>

          {/* Swiggy */}
          <div
            className="social-row"
            onClick={() => window.open("https://www.swiggy.com/menu/1231557?source=sharing", "_blank")}
          >
            <img
              src={SwiggyLogo}
              alt="Swiggy"
              style={{ width: "22px", height: "22px" }}
            />
            <p>Swiggy</p>
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
