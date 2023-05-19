import React, { FC } from "react";
// libs
import { Space, Typography, Image, Divider, Avatar, Button } from "antd";
// assets
import { ClockCircleOutlined, UserOutlined } from "@ant-design/icons";
// styles
import "./post.scss";
// utils
import { randomColor } from "utils/random-color";

interface IProps {
  title: string;
  shortDescription: string;
  image?: string;
  dateCreated: string;
  author: string;
}

const { Title, Paragraph, Text } = Typography;

const Post: FC<IProps> = ({
  title,
  shortDescription,
  image,
  dateCreated,
  author,
}) => {
  return (
    <div className="post-container">
      <div style={{ height: "400px", overflow: "hidden" }}>
        <Image
          className="post-image"
          src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
          preview={false}
        />
      </div>
      <Space style={{ paddingLeft: 20, margin: "15px 0 10px 0" }}>
        <ClockCircleOutlined />
        <Text>{dateCreated}</Text>
        <Divider type="vertical" style={{ margin: 0 }} />
        <Avatar
          size={30}
          style={{ backgroundColor: randomColor() }}
          icon={<UserOutlined />}
        />
        <Text>{author}</Text>
      </Space>
      <div style={{ paddingLeft: 20 }}>
        <Title level={3}>{title}</Title>
        <Paragraph>{shortDescription}</Paragraph>
        <Button type="primary">Read more</Button>
      </div>
    </div>
  );
};

export default Post;
