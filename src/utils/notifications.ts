import { notification } from "antd";

export const showErrorNotification = (errorMessage: string | undefined) => {
  notification.error({
    message: errorMessage || "Something went wrong",
    duration: 5,
  });
};

export const showSuccessNotification = (successMessage: string) => {
  notification.success({
    message: successMessage,
    duration: 5,
  });
};
