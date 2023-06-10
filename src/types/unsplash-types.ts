export interface IUnsplashPhoto {
  id: string;
  created_at: Date;
  updated_at: Date;
  height: number;
  color: string;
  blur_hash: string;
  likes: number;
  liked_by_user: boolean;
  urls: {
    full: string;
    raw: string;
    regular: string;
    small: string;
    small_s3: string;
    thumb: string;
  };
  description: string;
  user: IUnsplashUser;
}

export interface IUnsplashUser {
  id: string;
  username: string;
  name: string;
  portfolio_url: string;
  bio: string;
  location: string;
  total_likes: number;
  total_photos: number;
  total_collections: number;
  instagram_username: string;
  twitter_username: string;
  profile_image: {
    small: string;
    medium: string;
    large: string;
  };
  links: {
    self: string;
    html: string;
    photos: string;
    likes: string;
    portfolio: string;
  };
}
