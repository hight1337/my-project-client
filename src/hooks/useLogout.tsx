// libs
import { useMutation } from "react-query";
import { useNavigate } from "react-router-dom";
// hooks
import { useAppDispatch } from "./redux";
// api
import { logOut } from "services/user";
// store
import { removeUser } from "store/user/reducers";
// queries
import { USER_QUERIES } from "constants/queries";
// routes
import { AUTH_ROUTES } from "constants/routes";
// constants
import { USER_ACCESS_TOKEN } from "constants/local-sorage";
// types
import { AxiosError } from "axios";
// utils
import { removeItemFromLocalStorage } from "utils/local-storage";
import {
  showErrorNotification,
  showSuccessNotification,
} from "utils/notifications";

export const useLogout = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { mutate: userLogout } = useMutation(USER_QUERIES.LOG_OUT, logOut, {
    onSuccess: () => {
      dispatch(removeUser());
      removeItemFromLocalStorage(USER_ACCESS_TOKEN);
      showSuccessNotification("You have successfully logged out!");
      navigate(AUTH_ROUTES.SIGN_IN, { replace: true });
    },
    onError: (error: AxiosError<AxiosError>) => {
      showErrorNotification(error.response?.data.message);
    },
  });
  return { userLogout };
};
