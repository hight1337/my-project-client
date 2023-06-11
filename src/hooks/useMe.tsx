// libs
import { useQuery } from "react-query";
import { useNavigate } from "react-router-dom";
// api
import { getMe } from "services/user";
// routes
import { AUTH_ROUTES } from "constants/routes";
// queries
import { USER_QUERIES } from "constants/queries";
import { useAppDispatch } from "./redux";
import { setUser } from "store/user/reducers";

export const useMe = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  return useQuery(USER_QUERIES.GET_ME, getMe, {
    onSuccess: (data) => {
      dispatch(setUser(data));
    },
    onError: async () => {
      navigate(AUTH_ROUTES.SIGN_IN, { replace: true });
    },
    retry: false,
    refetchOnWindowFocus: false,
  });
};
