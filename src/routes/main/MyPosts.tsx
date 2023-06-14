import { FC, useState } from "react";
// libs
import { Button, Space, Spin } from "antd";
import { useQuery } from "react-query";
// components
import UserPosts from "components/UserPosts/UserPosts";
// assets
import { PlusOutlined } from "@ant-design/icons";
// queries
import { POSTS_QUERIES } from "constants/queries";
// api
import { getMyPosts } from "services/posts";
// types
import { AxiosError } from "axios";
// utils
import { showErrorNotification } from "utils/notifications";
import CreatePostModal from "./components/CreatePostModal";

const MyPosts: FC = () => {
  const [page] = useState(0);

  const [isCreatePostModalVisible, setIsCreatePostModalVisible] =
    useState<boolean>(false);

  const limit = 50;

  const { isLoading, refetch, data } = useQuery(
    [POSTS_QUERIES.GET_MY_POSTS, page, limit],
    () => getMyPosts({ page, limit }),
    {
      refetchOnWindowFocus: false,
      retry: false,
      onError: (error: AxiosError<AxiosError>) => {
        if (error.response?.status === 401) return;
        showErrorNotification(error.response?.data.message);
      },
    }
  );

  return (
    <>
      <Button
        type="ghost"
        size="large"
        style={{
          marginLeft: 30,
          alignItems: "center",
          justifyContent: "center",
          display: "flex",
          padding: "0 10px",
          fontSize: 16,
        }}
        onClick={() => setIsCreatePostModalVisible(true)}
        icon={<PlusOutlined style={{ fontSize: 21 }} />}
      >
        Create new post
      </Button>
      {isLoading ? (
        <Space
          direction="vertical"
          style={{
            width: "100%",
            height: "700px",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Spin size="large" />
        </Space>
      ) : (
        <UserPosts posts={data} />
      )}
      <CreatePostModal
        isModalVisible={isCreatePostModalVisible}
        setIsModalVisible={setIsCreatePostModalVisible}
        revalidateUserPosts={refetch}
      />
    </>
  );
};

export default MyPosts;
