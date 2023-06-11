import React, { FC } from "react";
// libs
import { Space, Typography, Image, Divider, Avatar, Button } from "antd";
import { useNavigate } from "react-router-dom";
// routes
import { MAIN_ROUTES } from "constants/routes";
// assets
import { ClockCircleOutlined, UserOutlined } from "@ant-design/icons";
// types
import { IPost } from "types/posts";
// styles
import "./post.scss";
// utils
import { randomColor } from "utils/random-color";
import { stringShortener } from "utils/helpers";

interface IProps {
  post: IPost;
}

const { Title, Paragraph, Text } = Typography;

const Post: FC<IProps> = ({ post }) => {
  const { title, shortDescription, createdAt, author, _id } = post;
  const navigate = useNavigate();
  const date = new Date(createdAt);
  const readableDate = date.toLocaleString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
  });

  return (
    <div className="post-container">
      <div style={{ overflow: "hidden" }}>
        <Image
          className="post-image"
          src="https://images.unsplash.com/photo-1600275066165-e4a26be839ec?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
          preview={false}
        />
      </div>
      <Space
        direction="horizontal"
        style={{
          paddingLeft: 20,
          margin: "10px 0",
          alignItems: "center",
          width: "100%",
          justifyContent: "space-between",
        }}
      >
        <Title level={3} style={{ margin: 0 }}>
          {title}
        </Title>

        <Button
          type="link"
          onClick={() => navigate(`${MAIN_ROUTES.POST}/${_id}`)}
        >
          Read more
        </Button>
      </Space>
      <div style={{ paddingLeft: 20 }}>
        <Paragraph>{stringShortener(shortDescription, 120)}</Paragraph>
      </div>

      <div style={{ display: "flex", flex: 1, alignItems: "flex-end" }}>
        <Space
          style={{
            paddingLeft: 20,
            paddingBottom: 10,
            width: "100%",
          }}
        >
          <ClockCircleOutlined style={{ fontSize: 12, color: "#c2c2c2" }} />
          <Text type="secondary" style={{ fontSize: 12 }}>
            {readableDate}
          </Text>
          <Divider
            type="vertical"
            style={{ margin: 0, height: 20, backgroundColor: "#e2e2e2" }}
          />
          <Avatar
            size={21}
            style={{
              backgroundColor: randomColor(),
              justifyContent: "center",
              alignItems: "center",
              display: "flex",
            }}
            icon={<UserOutlined style={{ fontSize: 9 }} />}
          />
          <Text type="secondary" style={{ fontSize: 12 }}>
            {author.firstName} {author.lastName}
          </Text>
        </Space>
      </div>
    </div>
  );
};

export default Post;
