import { FC } from "react";
// libs
import { Divider, FloatButton, Space, Spin, Typography } from "antd";
// components
import Slider from "components/Slider/Slider";
// assets
import { ArrowUpOutlined } from "@ant-design/icons";
// styles
import "./main.scss";
import { useQuery } from "react-query";
import { POSTS_QUERIES } from "constants/queries";
import { getAllPosts } from "services/posts";
import { AxiosError } from "axios";
import { showErrorNotification } from "utils/notifications";
import UserPosts from "components/UserPosts/UserPosts";

const { Title } = Typography;

const Main: FC = () => {
  const { isLoading, data } = useQuery(POSTS_QUERIES.GET_ALL, getAllPosts, {
    onError: (error: AxiosError<AxiosError>) => {
      if (error.response?.status === 404 || error.response?.status === 401)
        return;
      showErrorNotification(error.response?.data.message);
    },
    retry: false,
  });

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
        {isLoading ? (
          <Space
            direction="vertical"
            style={{
              width: "100%",
              height: "300px",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Spin size="large" />
          </Space>
        ) : (
          <UserPosts posts={data} />
        )}
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
