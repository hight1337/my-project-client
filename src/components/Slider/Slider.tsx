import React, { FC } from "react";
// libs
import { Carousel } from "antd";

const contentStyle: React.CSSProperties = {
  margin: 0,
  height: "350px",
  color: "#fff",
  lineHeight: "350px",
  textAlign: "center",
  background: "#364d79",
};

const Slider: FC = () => {
  return (
    <Carousel autoplay swipe>
      <div>
        <h3 style={contentStyle}>1</h3>
      </div>
      <div>
        <h3 style={contentStyle}>2</h3>
      </div>
      <div>
        <h3 style={contentStyle}>3</h3>
      </div>
      <div>
        <h3 style={contentStyle}>4</h3>
      </div>
    </Carousel>
  );
};

export default Slider;
