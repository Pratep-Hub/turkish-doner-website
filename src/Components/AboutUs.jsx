import "./AboutUs.css";

import shop1 from "../assets/Auto1.jpg";
import shop2 from "../assets/Auto2.jpg";
import shop3 from "../assets/Auto3.jpg";
import shop4 from "../assets/Auto4.jpg";
import shop5 from "../assets/Auto5.jpg";

import Reviewer1 from "../assets/Reviewer1.png";
import Reviewer2 from "../assets/Reviewer2.png";
import Reviewer3 from "../assets/Reviewer3.png";
import Reviewer4 from "../assets/Reviewer4.png";
import Reviewer5 from "../assets/Reviewer5.jpg";

import { useEffect, useState } from "react";

function AboutUs() {
  const images = [shop1, shop2, shop3, shop4, shop5];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="about" className="about-section">
      {/* Heading */}
      <div className="about-title-section">
        <h1 className="popular-title">
          <span className="blue-text">About</span>
          <span className="orange-text"> Us</span>
        </h1>
       <p className="popular-subtext">
  Discover our story, our passion for great food, and why customers love choosing Turkish Doner every single day.
</p>

      </div>

      <div className="about-container">
        {/* IMAGE SLIDER */}
        <div className="about-img-box">
          <img
            src={images[index]}
            alt="Shop"
            className="about-img fade-animation"
          />

          {/* Stats */}
          <div className="stats-row">
            <div className="stats-box new-style">
              <div className="stats-icon-bg">
                <span className="stats-icon">👥</span>
              </div>
              <h3 className="stats-value">1K+</h3>
              <p className="stats-label">Happy Customers</p>
            </div>

            <div className="stats-box new-style">
              <div className="stats-icon-bg">
                <span className="stats-icon">⭐</span>
              </div>
              <h3 className="stats-value">4.5★</h3>
              <p className="stats-label">Google Review</p>
            </div>

            <div className="stats-box new-style">
              <div className="stats-icon-bg">
                <span className="stats-icon">🧑‍🍳</span>
              </div>
              <h3 className="stats-value">1 Year</h3>
              <p className="stats-label">Experience</p>
            </div>
          </div>

          {/* REVIEW SECTION */}
          <div className="review-wrapper">
            <div className="review-top-pill">
              <div className="pill-icons">
                <img src={Reviewer1} alt="u1" />
                <img src={Reviewer2} alt="u2" />
                <img src={Reviewer4} alt="u3" />
              </div>

              <span className="pill-count">50+</span>
              <h3 className="pill-title">Our Reviewer</h3>
            </div>

            <div className="review-box-row">
              <div className="review-box-small">
                <p className="review-small-text">
                  '₹200–400', Nice Place, Good Food, Good Service.  
                  “Amazing taste! Very fresh food.”
                </p>
                <div className="review-user">
                  <img src={Reviewer4} alt="p1" />
                  <div>
                    <h4 className="review-name">Nikhil AG</h4>
                    <div className="small-stars">⭐⭐⭐⭐⭐</div>
                  </div>
                </div>
              </div>

              <div className="review-box-small">
                <p className="review-small-text">
                  "Nice experience, taste is awesome. Will recommend!"
                </p>
                <div className="review-user">
                  <img src={Reviewer3} alt="p2" />
                  <div>
                    <h4 className="review-name">Sunny Rajak</h4>
                    <div className="small-stars">⭐⭐⭐⭐⭐</div>
                  </div>
                </div>
              </div>

              <div className="review-box-small">
                <p className="review-small-text">
                  "Great spot for a quick meal with family."
                </p>
                <div className="review-user">
                  <img src={Reviewer5} alt="p3" />
                  <div>
                    <h4 className="review-name">Bijesh Shivaram</h4>
                    <div className="small-stars">⭐⭐⭐⭐</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT CONTENT */}
        <div className="about-content">
          <p className="about-text">
            Turkish Doner is a place we built with passion for good food and happy
            moments. Here, you’ll find everything from mouth-watering shawarmas
            and juicy burgers to premium chicken Alfaham, delicious Chinese
            dishes, refreshing juices, and rich creamy shakes. We use fresh
            ingredients every day because great taste should never be compromised.
          </p>

          <p className="about-text">
            Our team puts their heart into every dish—carefully preparing each
            item with balanced spices, quality ingredients and hygiene at the
            highest standard. Your happiness motivates us every day, and we work
            to make sure every bite feels special.
          </p>

          <div className="about-highlights">
  <div className="highlight-box">
    <span className="icon">🥗</span> Fresh Ingredients
  </div>

  <div className="highlight-box">
    <span className="icon">⚡</span> Fast Service
  </div>

  <div className="highlight-box">
    <span className="icon">🔥</span> Premium Taste
  </div>

  <div className="highlight-box">
    <span className="icon">🧼</span> 100% Hygienic
  </div>
</div>

        </div>
      </div>
    </section>
  );
}

export default AboutUs;
