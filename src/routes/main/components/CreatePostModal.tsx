import { FC, useEffect } from "react";
// libs
import { Button } from "antd";
import { useForm } from "react-hook-form";
import { useMutation } from "react-query";
// api
import { createPost } from "services/posts";
// components
import MainInput from "components/MainInput/MainInput";
import MainTextArea from "components/MainInput/MainTextArea";
import ModalComponent from "components/Modal/ModalComponent";
// types
import { AxiosError } from "axios";
// validation
import {
  CONTENT_VALIDATION,
  SHORT_DESCRIPTION_VALIDATION,
  TITLE_VALIDATION,
} from "utils/validation-rules";
// queries
import { POSTS_QUERIES } from "constants/queries";
// utils
import {
  showErrorNotification,
  showSuccessNotification,
} from "utils/notifications";

interface IProps {
  isModalVisible: boolean;
  setIsModalVisible: (visible: boolean) => void;
  revalidateUserPosts: () => void;
}

interface ICreatePostForm {
  title: string;
  shortDescription: string;
  content: string;
}

const CreatePostModal: FC<IProps> = ({
  isModalVisible,
  setIsModalVisible,
  revalidateUserPosts,
}) => {
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ICreatePostForm>({
    mode: "onSubmit",
  });

  useEffect(() => {
    reset();
  }, [isModalVisible, reset]);

  const { isLoading, mutate } = useMutation(
    POSTS_QUERIES.CREATE_POST,
    createPost,
    {
      onSuccess: () => {
        setIsModalVisible(false);
        showSuccessNotification("Post created successfully!");
        revalidateUserPosts();
      },
      onError: (error: AxiosError<AxiosError>) => {
        if (error.response?.status === 401) return;
        showErrorNotification(error.response?.data.message);
      },
    }
  );

  const onSubmit = (data: ICreatePostForm) => {
    mutate(data);
  };
  return (
    <ModalComponent
      modalTitle="Create New Post"
      isModalVisible={isModalVisible}
      setIsModalVisible={setIsModalVisible}
    >
      <MainInput
        inputName="title"
        inputType={"text"}
        inputLabel="Title"
        allowClear
        autoFocus
        control={control}
        validationRules={TITLE_VALIDATION}
        errorText={errors.title?.message}
        inputPlaceholder="Enter post title"
      />
      <MainTextArea
        inputName="shortDescription"
        inputLabel="Description"
        inputPlaceholder="Enter post description"
        minRows={3}
        maxRows={6}
        control={control}
        validationRules={SHORT_DESCRIPTION_VALIDATION}
        errorText={errors.shortDescription?.message}
      />
      <MainTextArea
        inputName="content"
        inputLabel="Post content"
        inputPlaceholder="Enter post content:"
        control={control}
        minRows={4}
        maxRows={15}
        validationRules={CONTENT_VALIDATION}
        errorText={errors.content?.message}
      />
      <Button
        onClick={handleSubmit(onSubmit)}
        type="primary"
        size="large"
        block
        style={{ marginTop: 20 }}
        disabled={Object.keys(errors).length > 0}
        loading={isLoading}
      >
        Create Post
      </Button>
    </ModalComponent>
  );
};

export default CreatePostModal;
