import React from "react";
import sliderStyle from "../styles/Slider.module.scss";
import Image from "next/image";
import EastIcon from "@mui/icons-material/East";
import WestIcon from "@mui/icons-material/West";
import { useState } from "react";

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const data = ["/pagne1.png", "/pagne2.jpg", "/pagne3.jpg"];

  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? 2 : (prev) => prev - 1);
  };
  const nextSlide = () => {
    setCurrentSlide(currentSlide === 2 ? 0 : (prev) => prev + 1);
  };

  return (
    <div className={sliderStyle.slider}>
      <div
        className={sliderStyle.container}
        style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
      >
        <Image
          src={data[0]}
          alt="slide0"
          style={{ objectFit: "contain" }}
          width={4000}
          height={3000}
        />
        <Image
          src={data[1]}
          alt="slide1"
          style={{ objectFit: "cover" }}
          width={4000}
          height={3000}
        />
        <Image
          src={data[2]}
          alt="slide2"
          style={{ objectFit: "cover" }}
          width={4000}
          height={3000}
        />
      </div>
      <div className={sliderStyle.icons}>
        <div className={sliderStyle.icon} onClick={prevSlide}>
          <WestIcon style={{ fill: "black" }} />
        </div>
        <div className={sliderStyle.icon} onClick={nextSlide}>
          <EastIcon style={{ fill: "black" }} />
        </div>
      </div>
    </div>
  );
};

export default Slider;
