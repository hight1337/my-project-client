import React, { FC } from "react";
// libs
import { Carousel } from "antd";
// styles
import "./styles.scss";

const Slider: FC = () => {
  return (
    <Carousel
      autoplay
      draggable
      style={{
        boxShadow: " 0px 0px 10px 1px rgba(0, 0, 0, 0.25)",
        borderRadius: "15px",
      }}
      effect="fade"
    >
      <div>
        <img
          src="https://images.unsplash.com/photo-1682687220211-c471118c9e92?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
          alt=""
          className="slider-image"
        />
      </div>
      <div>
        <img
          src="https://images.unsplash.com/photo-1509023464722-18d996393ca8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
          alt=""
          className="slider-image"
        />
      </div>
      <div>
        <img
          src="https://images.unsplash.com/photo-1475070929565-c985b496cb9f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
          alt=""
          className="slider-image"
        />
      </div>
      <div>
        <img
          src="https://images.unsplash.com/photo-1476842634003-7dcca8f832de?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
          alt=""
          className="slider-image"
        />
      </div>
      <div>
        <img
          src="https://images.unsplash.com/photo-1460355976672-71c3f0a4bdac?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1169&q=80"
          alt=""
          className="slider-image"
        />
      </div>
    </Carousel>
  );
};

export default Slider;
