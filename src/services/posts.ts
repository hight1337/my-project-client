import {
  CREATE_POST,
  DELETE_POST,
  GET_ALL_POSTS,
  GET_MY_POSTS,
  GET_POST,
  UPDATE_POST,
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

export const getPostById = async (id: string | undefined) => {
  const response = await $api.get<IPost>(`${GET_POST}/${id}`);
  return response.data;
};

export const updatePost = async (id: number, data: TCreatePostArguments) => {
  const response = await $api.patch<IPost>(`${UPDATE_POST}/${id}`, data);
  return response.data;
};

export const deletePost = async (id: number) => {
  const response = await $api.delete<IPost>(`${DELETE_POST}/${id}`);
  return response.data;
};
