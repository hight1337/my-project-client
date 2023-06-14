import React, { FC } from "react";
// libs
import { useForm } from "react-hook-form";
import { useMutation } from "react-query";
// components
import ModalComponent from "components/Modal/ModalComponent";
// components
import MainInput from "components/MainInput/MainInput";
import MainTextArea from "components/MainInput/MainTextArea";
import { Button } from "antd";
// api
import { updatePost } from "services/posts";
// types
import { IPost } from "types/posts";
import { AxiosError } from "axios";
// queries
import {
  CONTENT_VALIDATION,
  SHORT_DESCRIPTION_VALIDATION,
  TITLE_VALIDATION,
} from "utils/validation-rules";
import { POSTS_QUERIES } from "constants/queries";
import {
  showErrorNotification,
  showSuccessNotification,
} from "utils/notifications";

interface IProps {
  isModalVisible: boolean;
  setIsModalVisible: (visible: boolean) => void;
  post: IPost;
  refreshPosts: () => void;
}

interface IEditPostForm {
  title: string;
  shortDescription: string;
  content: string;
}

const EditPostModal: FC<IProps> = ({
  isModalVisible,
  setIsModalVisible,
  post,
  refreshPosts,
}) => {
  const { title, shortDescription, content, _id } = post;

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<IEditPostForm>({
    mode: "onSubmit",
  });

  const { isLoading, mutate } = useMutation(
    [POSTS_QUERIES.UPDATE_POST, _id],
    (data: IEditPostForm) => updatePost(_id, data),
    {
      onSuccess: () => {
        showSuccessNotification("Post updated successfully");
        refreshPosts();
        setIsModalVisible(false);
      },
      onError: (error: AxiosError<AxiosError>) => {
        showErrorNotification(error.response?.data.message);
      },
    }
  );

  const onSubmit = (data: IEditPostForm) => {
    mutate(data);
  };

  return (
    <ModalComponent
      modalTitle="Edit post"
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
        defaultValue={title}
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
        defaultValue={shortDescription}
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
        defaultValue={content}
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
        Save changes
      </Button>
    </ModalComponent>
  );
};

export default EditPostModal;
