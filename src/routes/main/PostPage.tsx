import { FC, useState } from "react";
// hooks
import { useQuery } from "react-query";
import { useNavigate, useParams } from "react-router-dom";
import { useAppSelector } from "hooks/redux";
// selectors
import { userSelector } from "store/user/selectors";
// api
import { getPostById } from "services/posts";
// assets
import {
  EditOutlined,
  DeleteOutlined,
  ArrowLeftOutlined,
} from "@ant-design/icons";
// components
import EditPostModal from "./components/EditPostModal";
import DeletePostModal from "./components/DeletePostModal";
import {
  Button,
  Divider,
  Image,
  Layout,
  Result,
  Space,
  Spin,
  Typography,
} from "antd";
// types
import { AxiosError } from "axios";
import { IPost } from "types/posts";
// queries
import { POSTS_QUERIES } from "constants/queries";
// utils
import { showErrorNotification } from "utils/notifications";
import { POST_IMAGE_URL } from "constants/helpers";

const { Title, Text } = Typography;

const PostPage: FC = () => {
  const { postId } = useParams();
  const currentUser = useAppSelector(userSelector);
  const navigate = useNavigate();

  const [isEditPostModalVisible, setIsEditPostModalVisible] =
    useState<boolean>(false);
  const [isDeletePostModalVisible, setIsDeletePostModalVisible] =
    useState<boolean>(false);

  const { isLoading, data, refetch } = useQuery(
    [POSTS_QUERIES.GET_ONE, postId],
    () => getPostById(postId),
    {
      refetchOnWindowFocus: false,
      retry: false,
      onError: (error: AxiosError<AxiosError>) => {
        if (error.response?.status === 401) return;
        showErrorNotification(error.response?.data.message);
      },
    }
  );

  const handleBack = () => {
    navigate(-1);
  };
  // @ts-ignore
  const shouldShowControls = currentUser?.id === data?.author._id;

  if (isLoading) {
    return (
      <Space
        style={{
          height: "400px",
          alignItems: "flex-end",
          justifyContent: "center",
          width: "100%",
        }}
      >
        <Spin size="large" />
      </Space>
    );
  }

  if (!data) {
    return (
      <Result
        status="404"
        title="404"
        subTitle="Post not found or deleted."
        extra={
          <Button onClick={handleBack} type="primary">
            Back
          </Button>
        }
      />
    );
  }
  return (
    <Layout>
      <Space>
        <Button
          type="default"
          icon={<ArrowLeftOutlined />}
          style={{ marginBottom: 20 }}
          onClick={handleBack}
        >
          Back
        </Button>
      </Space>
      <Image
        src={POST_IMAGE_URL}
        preview={false}
        style={{
          width: "100%",
          height: "100%",
          maxHeight: "300px",
          objectFit: "cover",
          objectPosition: "center",
          borderRadius: "15px",
        }}
      />
      <Space direction="vertical" style={{ paddingLeft: 15, marginTop: 10 }}>
        <Space
          direction="horizontal"
          style={{
            alignItems: "center",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          <Title type="secondary" level={2} style={{ marginBottom: 0 }}>
            {data?.title}
          </Title>
          {shouldShowControls && (
            <Space>
              <Button
                onClick={() => setIsEditPostModalVisible(true)}
                icon={<EditOutlined />}
              >
                Edit
              </Button>
              <Button
                type="default"
                onClick={() => setIsDeletePostModalVisible(true)}
                icon={<DeleteOutlined />}
                danger
              >
                Delete
              </Button>
            </Space>
          )}
        </Space>
        <Divider style={{ margin: 0 }} />
        <Title level={4}>{data?.shortDescription}</Title>
        <Text style={{ fontSize: 16 }}>{data?.content}</Text>
      </Space>
      <EditPostModal
        isModalVisible={isEditPostModalVisible}
        setIsModalVisible={setIsEditPostModalVisible}
        refreshPosts={refetch}
        post={data as IPost}
      />
      <DeletePostModal
        isModalVisible={isDeletePostModalVisible}
        setIsModalVisible={setIsDeletePostModalVisible}
        post={data as IPost}
      />
    </Layout>
  );
};

export default PostPage;
