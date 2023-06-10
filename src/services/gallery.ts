import axios from "axios";
// types
import { IUnsplashPhoto } from "types/unsplash-types";

const UNSPLASH_URL = process.env.REACT_APP_UNSPLASH_API_URL;

type TGallaryArguments = {
  count: number;
  page: number;
};
export const getGalleryImages = async ({
  count = 10,
  page = 1,
}: TGallaryArguments) => {
  const response = await axios.get<IUnsplashPhoto[]>(
    `${UNSPLASH_URL}/photos?per_page=${count}&client_id=${process.env.REACT_APP_UNSPLASH_ACCESS_KEY}&page=${page}`
  );
  return response.data;
};
