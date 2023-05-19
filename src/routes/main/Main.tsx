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
  // TODO: implement scroll up functionality
  return (
    <>
      <div className="slider-container">
        <Slider />
      </div>
      <Title level={2} style={{ margin: 0 }}>
        News
      </Title>
      <Divider style={{ margin: "10px 0" }} />
      {/* implement scroll up functionality */}
      <FloatButton
        icon={<ArrowUpOutlined />}
        onClick={() => console.log("click")}
      />
    </>
  );
};

export default Main;
