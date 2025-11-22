import React, { useEffect } from "react";
import "./Menu.css";

// Import only available images
import PopCorn from "../assets/Popcorn.png";
import FishPop from "../assets/FishPop.png";
import Nuggets from "../assets/Nuggets.png";
import Momos from "../assets/Momos.png";

// Shawarma
import Kubus from "../assets/Kubus.png";
import Rumali from "../assets/Rumali.png";
import Cheese from "../assets/Cheese.png";
import Turkish from "../assets/Turkish Roll.png";

// Burgers
import veg from "../assets/VegBurger.jpg";
import ChickenBurger from "../assets/ChickenBurger.png";
import beefd from "../assets/beefdummy.jpg";
import Jumbo from "../assets/Jumbo.png";

// AL-Faham
import Alfham from "../assets/Alfham.png";
import Peri from "../assets/Peri.png";
import Honey from "../assets/Honey.png";
import Cream from "../assets/Cream.png";

// Chinese
import VegRice from "../assets/Veg Rice.png";
import ChickenRice from "../assets/Chicken Rice.png";
import Vegnoodals from "../assets/VegNood.png";
import Chickennoodals from "../assets/ChickenNoodal.png";
import ChickenBiriyani from "../assets/ChickenBiriyani.png";
import PannerMasala from "../assets/PannerMasala.png";
import Chicken65 from "../assets/Chicken65.png";
import Mashroom from "../assets/Mashroom.png";

// Juice
import Orange from "../assets/Orange.png";
import PineApple from "../assets/PineApple.png";
import Grap from "../assets/Grap.png";
import Mango from "../assets/Manjo.png";

// Shakes
import Tenter from "../assets/Tenter.png";
import Bule from "../assets/Bule.png";
import Mangoo from "../assets/Mangoo.png";
import Choclate from "../assets/Choclate.png";

// Mojito
import Water from "../assets/Water.png";
import Kiwi from "../assets/Kiwi.png";
import Black from "../assets/Black.png";
import Passion from "../assets/Passion.png";

const Menu = () => {

  // SCROLL ANIMATION
  useEffect(() => {
    const cards = document.querySelectorAll(".menu-box");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
          }
        });
      },
      { threshold: 0.2 }
    );

    cards.forEach((card) => observer.observe(card));
  }, []);

  return (
    <>
      {/* Heading */}
      <div id="menu" className="menu-heading-section">
        <h1 className="menu-heading-title">
          <span className="blue-text">Our</span>{" "}
          <span className="orange-text">Menu</span>
        </h1>

        <p className="menu-heading-subtext">
          A complete menu crafted for food lovers, packed with taste, freshness and quality.
        </p>
      </div>

      <section className="full-menu">

        <Category
          title="Starters"
          items={[
      { img: PopCorn, name: "Chicken PopCorn", slogan: "Crispy Bites Packed With Real Chicken Flavor" },
{ img: FishPop, name: "Fish PopCorn", slogan: "Fresh Fish Crunch With Every Bite" },
{ img: Nuggets, name: "Nuggets Chicken", slogan: "Golden, Juicy & Irresistibly Crispy" },
{ img: Momos, name: "Momos Fried", slogan: "Crispy Outside, Juicy Inside — Perfect Snack!" },

          ]}
        />

        <Category
          title="Shawarma"
          items={[
        { img: Kubus, name: "Kubus Shawarma", slogan: "Soft Kubus Wrap Filled With Juicy Goodness" },
{ img: Rumali, name: "Rumali Shawarma", slogan: "Thin, Soft & Perfectly Rolled Delight" },
{ img: Cheese, name: "Cheese Shawarma", slogan: "Loaded With Melted Cheese & Spicy Flavors" },
{ img: Turkish, name: "Turkish Shawarma", slogan: "Traditional Turkish Taste in Every Bite" },

          ]}
        />

        <Category
          title="Burgers"
          items={[
         { img: veg, name: "Veg Burger", slogan: "Fresh, Crunchy & Totally Yummy" },
{ img: ChickenBurger, name: "Chicken Burger", slogan: "Juicy Chicken Loaded With Flavor" },
{ img: beefd, name: "Beef Burger", slogan: "Smoky, Meaty & Grilled to Perfection" },
{ img: Jumbo, name: "TD Jumbo Burger", slogan: "Big Size, Big Taste, Big Satisfaction" },

          ]}
        />

        <Category
          title="AL-Faham"
          items={[
          { img: Alfham, name: "Normal AL-Faham", slogan: "Authentic Arabian Grill Flavor" },
{ img: Peri, name: "Peri Peri AL-Faham", slogan: "Hot, Spicy & Fire-Grilled Perfection" },
{ img: Honey, name: "Honey AL-Faham", slogan: "Sweet Heat With Juicy Tender Bites" },
{ img: Cream, name: "Butter AL-Faham", slogan: "Rich, Creamy & Melt-in-the-Grill Taste" },

          ]}
        />

        <Category
          title="Chinese"
          items={[
           { img: VegRice, name: "Veg Fried Rice", slogan: "Fresh Veggies, Pure Wok Flavor" },
{ img: ChickenRice, name: "Chicken Fried Rice", slogan: "Smoky, Savory & Perfectly Tossed" },
{ img: Vegnoodals, name: "Veg Noodles", slogan: "Soft, Flavorful & Wok-Tossed Goodness" },
{ img: Chickennoodals, name: "Chicken Noodles", slogan: "Juicy Chicken With Authentic Wok Taste" },

{ img: ChickenBiriyani, name: "Chicken Biriyani", slogan: "Fragrant, Spicy & Truly Irresistible" },
{ img: PannerMasala, name: "Paneer Butter", slogan: "Creamy, Rich & Comforting Flavors" },
{ img: Chicken65, name: "Chicken 65", slogan: "Crispy, Spicy & Full of Punch" },
{ img: Mashroom, name: "Mushroom Chilly", slogan: "Tangy Heat With a Chef’s Twist" },

          ]}
        />

        <Category
          title="Juice"
          items={[
          { img: Orange, name: "Orange", slogan: "Fresh, Zesty & Full of Vitamin Boost" },
{ img: PineApple, name: "PineApple", slogan: "Tropical Sweetness in Every Sip" },
{ img: Grap, name: "Grape", slogan: "Deep, Rich & Naturally Sweet" },
{ img: Mango, name: "Mango", slogan: "Thick, Juicy & King of Fruits" },

          ]}
        />

       <Category
  title="Shakes"
  items={[
    { img: Tenter, name: "Tender Coconut", slogan: "Fresh, Creamy & Natural Bliss" },
    { img: Bule, name: "Blueberry", slogan: "Rich, Smooth & Berry-Licious" },
    { img: Mangoo, name: "Mango", slogan: "Thick, Juicy & Summer Perfect" },
    { img: Choclate, name: "Chocolate", slogan: "Cold, Creamy & Chocolate Loaded" },
  ]}
/>


       <Category
  title="Mojito"
  items={[
    { img: Water, name: "Water Melon", slogan: "Chilled, Juicy & Summer-Perfect Refreshment" },
    { img: Kiwi, name: "Kiwi", slogan: "Fresh Mint Splash With Kiwi Twist" },
    { img: Black, name: "Black Current", slogan: "Bold, Fruity & Ice-Cold Fusion" },
    { img: Passion, name: "Passion Fruit", slogan: "Tangy, Cool & Perfectly Refreshing" },
  ]}
/>


      </section>
    </>
  );
};

const Category = ({ title, items }) => (
  <div className="category-block">
    <h2 className="category-title">{title}</h2>
    <div className="category-grid">
      {items.map((item, index) => (
        <div className="menu-box" key={index}>
          <img src={item.img} className="menu-box-img" alt="food" />
          <h3 className="menu-box-name">{item.name}</h3>
          <p className="menu-box-slogan">{item.slogan}</p>
        </div>
      ))}
    </div>
  </div>
);

export default Menu;
