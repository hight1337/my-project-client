import React, { FC } from "react";
// libs
import { useMutation } from "react-query";
import { useNavigate } from "react-router-dom";
// components
import ModalComponent from "components/Modal/ModalComponent";
import { Button, Space, Typography } from "antd";
// api
import { deletePost } from "services/posts";
// queries
import { POSTS_QUERIES } from "constants/queries";
// utils
import {
  showErrorNotification,
  showSuccessNotification,
} from "utils/notifications";
// types
import { AxiosError } from "axios";
import { IPost } from "types/posts";

const { Title, Text } = Typography;

interface IProps {
  isModalVisible: boolean;
  setIsModalVisible: (visible: boolean) => void;
  post: IPost;
}

const DeletePostModal: FC<IProps> = ({
  isModalVisible,
  setIsModalVisible,
  post,
}) => {
  const navigate = useNavigate();
  const { isLoading, mutate } = useMutation(
    [POSTS_QUERIES.DELETE_POST, post._id],
    () => deletePost(post._id),
    {
      onSuccess: () => {
        showSuccessNotification(`${post.title} post was deleted`);
        setIsModalVisible(false);
        navigate(-1);
      },
      onError: (error: AxiosError<AxiosError>) => {
        if (error.response?.status === 401) return;
        showErrorNotification(error.response?.data.message);
      },
    }
  );

  const handleDeletePost = () => {
    mutate();
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };
  return (
    <ModalComponent
      modalTitle="Delete Post"
      isModalVisible={isModalVisible}
      setIsModalVisible={setIsModalVisible}
    >
      <Title level={5}>
        Are you sure you want to delete "{`${post.title}`}" post?
      </Title>
      <Text>
        This action can not be undone. You will lose all information that this
        post contains.
      </Text>
      <Space
        style={{
          width: "100%",
          alignItems: "center",
          marginTop: 10,
        }}
      >
        <Button
          onClick={handleDeletePost}
          type="default"
          danger
          loading={isLoading}
          block
        >
          Delete
        </Button>
        <Button type="default" block onClick={handleCancel}>
          Cancel
        </Button>
      </Space>
    </ModalComponent>
  );
};

export default DeletePostModal;
