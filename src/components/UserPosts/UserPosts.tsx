import { FC } from "react";
// libs
import { Empty, Space } from "antd";
// components
import Post from "components/Post/Post";
// styles
import "./styles.scss";
// types
import { IPost } from "types/posts";

interface IProps {
  posts: IPost[] | undefined;
}

const UserPosts: FC<IProps> = ({ posts }) => {
  return (
    <>
      {!posts ? (
        <Space
          direction="vertical"
          style={{
            width: "100%",
            height: "700px",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Empty description="Posts empty" />
        </Space>
      ) : (
        <div className="inner-posts-container">
          {posts.map((post) => (
            <Post post={post} />
          ))}
        </div>
      )}
    </>
  );
};

export default UserPosts;
