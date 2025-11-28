import React, { useState } from "react";
import "../Components/Home.css";

import shopImg from "../assets/Shop.jpg";
import Leef from "../assets/Leef Chicken.png";
import Dragan from "../assets/Dragan Chicken.png";
import Cream from "../assets/Cream Chiecken.png";
import Turkish from "../assets/Turkish Roll.png";
import Arabic from "../assets/Arabic Roll.png";
import Plate from "../assets/Plate.png";

<<<<<<< HEAD
=======
// PDF images
import menuPage1 from "../assets/menu1.png";
import menuPage2 from "../assets/menu2.png";

// Brand logos
>>>>>>> c07b0a173cd29ac70dc2a159095b309b1e47069b
import zomatoLogo from "../assets/Zomato.png";
import swiggyLogo from "../assets/swiggy.jpg";

function Home() {
  const [showOrderPopup, setShowOrderPopup] = useState(false);

  const zomatoURL = "https://zomato.onelink.me/xqzv/ecz61n5n";
  const swiggyURL = "https://www.swiggy.com/menu/1231557?source=sharing";

  return (
    <section id="home" className="home-section">

      {/* Background Section */}
      <div className="home-bg" style={{ backgroundImage: `url(${shopImg})` }}>
        <div className="overlay"></div>

        <div className="home-content">
          <h1 className="home-title">Delicious Food</h1>
          <h1 className="home-title highlight">Fast & Fresh</h1>

          <p className="home-subtext">
            Experience the perfect blend of flavor and speed. Our handcrafted dishes
            and crispy snacks are made with the finest ingredients, served hot and fresh.
          </p>

          {/* Only Order Online button - centered */}
          <div className="home-buttons single-button">
            <button className="btn-order" onClick={() => setShowOrderPopup(true)}>
              Order Online
            </button>
          </div>
        </div>
      </div>

      {/* ORDER POPUP */}
      {showOrderPopup && (
        <div className="order-popup-overlay" onClick={() => setShowOrderPopup(false)}>
          <div className="order-popup" onClick={(e) => e.stopPropagation()}>
            <h3 className="order-popup-title">Pick your favourite delivery partner</h3>

            <div className="order-box-container">
              <div className="order-box" onClick={() => window.open(zomatoURL, "_blank")}>
                <img src={zomatoLogo} className="brand-logo" alt="Zomato" />
              </div>

              <div className="order-box" onClick={() => window.open(swiggyURL, "_blank")}>
                <img src={swiggyLogo} className="brand-logo" alt="Swiggy" />
              </div>
            </div>

            <button className="close-btn" onClick={() => setShowOrderPopup(false)}>
              Close
            </button>
          </div>
        </div>
      )}

      {/* Popular Section */}
      <div className="popular-menu-section">
        <h1 className="popular-title">
          <span className="blue-text">Popular</span>
          <span className="orange-text"> Menu</span>
        </h1>

        <p className="popular-subtext">
          Our top-selling creations crafted with passion and perfection.
          Taste the excellence that keeps food lovers coming back.
        </p>
      </div>

      {/* Menu Cards */}
      <div className="menu-items-row">
        <div className="menu-card">
          <div className="heart-icon">♥</div>
          <img src={Leef} alt="item" className="menu-img" />
          <h3 className="menu-title">Vazhayla Alfam</h3>
          <p className="menu-desc">Hot Leaf Magic</p>
          <div className="menu-rating-price"><div className="stars">★★★★★</div></div>
        </div>

        <div className="menu-card">
          <div className="heart-icon">♥</div>
          <img src={Dragan} alt="item" className="menu-img" />
          <h3 className="menu-title">Dragon Alfam Chicken</h3>
          <p className="menu-desc">Feel the Fiery Flavor</p>
          <div className="menu-rating-price"><div className="stars">★★★★★</div></div>
        </div>

        <div className="menu-card">
          <div className="heart-icon">♥</div>
          <img src={Cream} alt="item" className="menu-img contain-img" />
          <h3 className="menu-title">Creamy Alfam Chicken</h3>
          <p className="menu-desc">Creamier With Every Bite</p>
          <div className="menu-rating-price"><div className="stars">★★★★★</div></div>
        </div>

        <div className="menu-card">
          <div className="heart-icon">♥</div>
          <img src={Turkish} alt="item" className="menu-img" />
          <h3 className="menu-title">Turkish Shawarma Roll</h3>
          <p className="menu-desc">Wrapped in Pure Turkish Magic</p>
          <div className="menu-rating-price"><div className="stars">★★★★★</div></div>
        </div>

        <div className="menu-card">
          <div className="heart-icon">♥</div>
          <img src={Arabic} alt="item" className="menu-img contain-img" />
          <h3 className="menu-title">Arabic Shawarma Roll</h3>
          <p className="menu-desc">The True Arabic Shawarma</p>
          <div className="menu-rating-price"><div className="stars">★★★★★</div></div>
        </div>

        <div className="menu-card">
          <div className="heart-icon">♥</div>
          <img src={Plate} alt="item" className="menu-img" />
          <h3 className="menu-title">Plate Shawarma</h3>
          <p className="menu-desc">Plated for Pure Pleasure</p>
          <div className="menu-rating-price"><div className="stars">★★★★★</div></div>
        </div>
      </div>
    </section>
  );
}

export default Home;
