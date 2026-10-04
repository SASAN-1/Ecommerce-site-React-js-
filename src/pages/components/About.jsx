import React from "react";

import { mainImg, story20, story22, story24, story26 } from "@/assets/images";
import { MdOutlineDirectionsBike } from "react-icons/md";
import { TbTruckDelivery } from "react-icons/tb";
import { HiOutlineWrenchScrewdriver } from "react-icons/hi2";

const stories = [
  {
    year: "2020",
    image: story20,
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolores, eligendi esse, sit adipisci qui ipsum obcaecati nobis odio cupiditate doloribus nostrum molestiae aliquam.",
  },
  {
    year: "2022",
    image: story22,
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolores, eligendi esse, sit adipisci qui ipsum obcaecati nobis odio cupiditate doloribus nostrum molestiae aliquam.",
  },
  {
    year: "2024",
    image: story24,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, voluptate.",
  },
  {
    year: "2026",
    image: story26,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, voluptate.",
  },
];

const About = () => {
  return (
    <div className="about-body">
      <div className="about-main-container">
        <img src={mainImg} alt="About Us img" className="about-img" />
        <p className="about-motto">Built for the ride.</p>
        <p className="about-txt">NEXT STEP:ADVENTURE</p>
      </div>
      <div className="history-section">
        <h1 className="history-title">OUR STORY</h1>

        <div className="story-section">
          {stories.map((story, index) => (
            <div
              className={`story ${index % 2 !== 0 ? "reverse" : ""}`}
              key={story.year}
            >
              <div className="story-img-container">
                <img
                  src={story.image}
                  alt={`${story.year} image`}
                  className="story-img"
                />
              </div>

              <div className="story-des">
                <h1>{story.year}</h1>
                <p>{story.description}</p>
              </div>
            </div>
          ))}
        </div>
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
            <HiOutlineWrenchScrewdriver size={28} /> <p>Rider Focused</p>
          </span>
          <span className="service-highlight">
            <TbTruckDelivery size={34} /> <p>Fast Delivery</p>
          </span>
          {/* <span className="service-highlight">
            <RiCustomerService2Line size={28} /> <p>Customer Focus</p>
          </span> */}
        </div>
      </div>
      <div className="location-section">
        <h1 className="location-title">Where are we today?</h1>
        <div className="location-container">
          <p className="location">Baneshowr</p>
          <p className="location">Baneshowr</p>
          <p className="location">Baneshowr</p>
          <p className="location">Baneshowr</p>
        </div>
      </div>
    </div>
  );
};

export default About;
