import { FC } from "react";
// libs
import { Divider, FloatButton, Typography } from "antd";
// components
import Slider from "components/Slider/Slider";
import Post from "components/Post/Post";
// assets
import { ArrowUpOutlined } from "@ant-design/icons";
// styles
import "./main.scss";

const { Title } = Typography;

const Main: FC = () => {
  return (
    <>
      <div className="slider-container">
        <Slider />
      </div>
      <Title level={2} style={{ margin: 0 }}>
        Posts
      </Title>
      <Divider style={{ margin: "10px 0" }} />
      <div className="posts-container">
        <Post
          author="Vlad"
          title="Test Title"
          shortDescription="asdasdasdasdasdasdasdasdasdasd"
          dateCreated={"26.01.2023"}
        />
      </div>
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
