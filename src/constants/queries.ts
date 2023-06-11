// AUTH
export const AUTH_QUERIES = {
  SIGN_IN: "auth-sign-in",
  SIGN_UP: "auth-sign-up",
} as const;

// USER
export const USER_QUERIES = {
  GET_ME: "user-get-me",
  LOG_OUT: "user-log-out",
} as const;

// GALLERY
export const GALLERY_QUERIES = {
  GET_ALL: "gallery-get-all",
  GET_RANDOM_ONE: "gallery-get-random-one",
} as const;

// POSTS
export const POSTS_QUERIES = {
  GET_MY_POSTS: "posts-get-my-posts",
  GET_ALL: "posts-get-all",
  GET_ONE: "posts-get-one",
  CREATE_POST: "posts-create",
  UPDATE_POST: "posts-update",
  DELETE_POST: "posts-delete",
} as const;
