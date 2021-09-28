import React, { useState } from "react";

import { Carousel, BannerItem, Imgage } from "react-bootstrap";
import "./Banner.css";
import BannerItems from "./BannerItem";

const Banner = () => {
  const [items, setItem] = useState(BannerItems);

  return (
    <>
      <Carousel className="hero-area">
        {items.map((element) => {
          const { id, image, titles, description } = element;

          return (
            <Carousel.Item id={id} >
              <img className="d-block w-100 ban-image" src={image} alt="First slide" />
              <Carousel.Caption className="carousel-item-text">
                <h1>{titles}</h1>
                <p className="pt-3">{description}</p>
              </Carousel.Caption>
            </Carousel.Item>
          );
        })}
      </Carousel>
    </>
  );
};

export default Banner;