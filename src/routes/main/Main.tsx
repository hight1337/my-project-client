import { FC } from "react";
// libs
import { Divider, FloatButton, Typography } from "antd";
// components
import Slider from "components/Slider/Slider";

// assets
import { ArrowUpOutlined } from "@ant-design/icons";
// styles
import "./main.scss";

const { Title } = Typography;

const Main: FC = () => {
  const myArray = new Array(100).fill(0);
  return (
    <>
      <div className="slider-container">
        <Slider />
      </div>
      <Title level={2} style={{ margin: 0 }}>
        News
      </Title>
      <Divider style={{ margin: "10px 0" }} />
      {myArray.map((_, index) => (
        <div key={index} style={{ height: "50px" }}>
          {index}
        </div>
      ))}
      <FloatButton.BackTop
        duration={300}
        type="primary"
        icon={<ArrowUpOutlined />}
        visibilityHeight={300}
      />
    </>
  );
};

export default Main;
