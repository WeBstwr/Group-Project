import React from "react";
import "./home.css";
import heroProfile from "../../assets/heroProfile.jpg";

function Hero() {
  return (
    <section className="hero">
      <div className="hero__container">
        <div className="hero-text-box">
          <h2>
            hi, i am john, <br /> creative technologist
          </h2>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure
            inventore veritatis obcaecati soluta! Voluptatibus cum voluptatum,
            sint est, voluptates optio modi deleniti consequuntur excepturi at
            ipsum?
          </p>
          <button>download resume</button>
        </div>
        <div className="hero-profile">
          <img src={heroProfile} alt="hero profile" />
        </div>
      </div>
    </section>
  );
}

export default Hero;
