import {
  CREATE_POST,
  GET_ALL_POSTS,
  GET_MY_POSTS,
} from "constants/endpoints/posts";
import $api from "./api";
// types
import { IPost } from "types/posts";

type TMyPostsArguments = {
  page: number;
  limit: number;
};

type TCreatePostArguments = {
  title: string;
  shortDescription: string;
  content: string;
};

export const getMyPosts = async (data: TMyPostsArguments) => {
  const response = await $api.get<IPost[]>(
    `${GET_MY_POSTS}?page=${data.page}&limit=${data.limit}`
  );
  return response.data;
};

export const createPost = async (data: TCreatePostArguments) => {
  const response = await $api.post<IPost>(CREATE_POST, data);
  return response.data;
};

export const getAllPosts = async () => {
  const response = await $api.get<IPost[]>(GET_ALL_POSTS);
  return response.data;
};
