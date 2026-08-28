import React from "react";

import { mainImg } from "@/assets/images";
import { MdOutlineDirectionsBike } from "react-icons/md";
import { TbTruckDelivery } from "react-icons/tb";
import { RiCustomerService2Line } from "react-icons/ri";
import { HiOutlineWrenchScrewdriver } from "react-icons/hi2";

const About = () => {
  return (
    <div className="about-body">
      <div className="about-main-container">
        <img src={mainImg} alt="About Us img" className="about-img" />
        <h1 className="about-heading">ABOUT</h1>
        <p className="about-txt">NEXT STEP:ADVENTURE</p>
      </div>
      <div className="history-section">
        <h1 className="history-title">OUR HISTORY</h1>
        <p className="history-paragraph">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum
          expedita architecto voluptatum pariatur, commodi ex praesentium
          impedit id facere, sunt mollitia nulla sint optio nesciunt. Error
          eligendi cupiditate dignissimos, dolores quas corporis exercitationem,
          deleniti laudantium sint magnam atque? Rerum repellendus cumque alias
          accusamus maxime fugiat nostrum libero, maiores quisquam tempora
          dolore aliquid, pariatur totam provident, in neque magnam. Dolores
          rem, iusto saepe sequi magnam expedita. Veritatis iste itaque adipisci
          reprehenderit explicabo? Tempora excepturi reiciendis dignissimos
          quibusdam praesentium vel id molestiae tenetur eaque voluptates at
          ratione modi quos cupiditate recusandae harum fugit, neque corrupti
          exercitationem. Dolores magni aliquam cum reiciendis illum.
        </p>
      </div>
      <div className="service-section" id="services">
        <h1 className="service-title">Why choose us?</h1>
        <div className="service-highlights">
          <span className="service-highlight">
            <MdOutlineDirectionsBike size={34} /> <p>Quality Bikes</p>
          </span>
          <span className="service-highlight">
            <HiOutlineWrenchScrewdriver size={28} /> <p>Reliable Support</p>
          </span>
          <span className="service-highlight">
            <TbTruckDelivery size={34} /> <p>Fast Delivery</p>
          </span>
          <span className="service-highlight">
            <RiCustomerService2Line size={28} /> <p>Customer Focus</p>
          </span>
        </div>
      </div>
    </div>
  );
};

export default About;
