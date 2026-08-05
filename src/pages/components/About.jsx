import React from "react";

import { mainImg } from "@/assets/images";

const About = () => {
  return (
    <>
      <div className="about-body">
        <div className="about-main-container">
          <img src={mainImg} alt="About Us img" className="about-img" />
          <h1 className="about-heading">ABOUT</h1>
          <p className="about-txt">NEXT STEP:ADVENTURE</p>
        </div>
        <div className="history-section">
          <h1 className="history-title">OUR HISTORY</h1>
          <p className="history-paragraph">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque
            dolores nisi ab labore nam quasi quis porro illo pariatur reiciendis
            libero expedita adipisci cum temporibus blanditiis tempore
            voluptatibus quam, atque ex sapiente sed. Beatae, minus porro illum
            inventore fugit, doloremque cupiditate eveniet minima ipsa cum
            provident suscipit ab omnis? Tempore nostrum, a ea quos commodi
            numquam nemo atque corrupti dolorem nobis repellat quam repellendus
            eaque possimus in magni, dolor corporis. Perferendis natus totam
            dignissimos vitae nisi laborum unde eum odio maxime velit, ex
            praesentium asperiores suscipit at ipsam quos ducimus ut, itaque
            ipsa quo enim, debitis necessitatibus distinctio. Animi, excepturi.
          </p>
        </div>
      </div>
    </>
  );
};

export default About;
