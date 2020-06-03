import React from "react";
import Carousel from "./Carousel";
import Slider from "./Slider/Slider";

function Explore() {

  // const currentCarousel = Carousel(slides);

  return (
    <div id="explore-wrapper">

      <div id="search-container">
        <div id="search-bar">
          <div id="search-icon-container">
            Icon
          </div>
          <input
            type="text"
            name="email"
            placeholder="Search" />
        </div>
      </div>

      <div id="explore-photo-container">
        <img></img>
      </div>

      {/* <div id="carousel-container"> */}
      <Carousel />
      {/* </div> */}

      <div id="explore-photo-container">
        <img></img>
      </div>

    </div>

  );
}

export default Explore;
