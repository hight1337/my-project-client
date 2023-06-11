// api
import $api from "./api";
// constants
import { GET_ME, LOG_OUT } from "constants/endpoints/user";
// types
import { IUser } from "types/user";

export const getMe = async () => {
  const response = await $api.get<IUser>(GET_ME);
  return response.data;
};

export const logOut = async () => {
  await $api.post(LOG_OUT);
};
