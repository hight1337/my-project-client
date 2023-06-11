import $api from "./api";
// endpoints
import { REFRESH, SIGN_IN, SIGN_UP } from "constants/endpoints/auth";
// types
import { IActiveUser } from "types/user";

type TUserSignIn = {
  email: string;
  password: string;
};
type TUserSignUp = {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
};

export const userSignIn = async (userData: TUserSignIn) => {
  const response = await $api.post<IActiveUser>(SIGN_IN, userData);
  return response.data;
};

export const userSignUp = async (userData: TUserSignUp) => {
  const response = await $api.post<IActiveUser>(SIGN_UP, userData);
  return response.data;
};

export const refreshTokens = async () => {
  const response = await $api.get<IActiveUser>(REFRESH);
  return response.data;
};
