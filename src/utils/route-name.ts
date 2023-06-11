import { MAIN_ROUTES } from "constants/routes";

export const returnRouteName = (route: string) => {
  switch (route) {
    case MAIN_ROUTES.HOME:
      return "Home";
    case MAIN_ROUTES.ABOUT_US:
      return "About";
    case MAIN_ROUTES.MY_POST:
      return "My Posts";
    case MAIN_ROUTES.GALLERY:
      return "Gallery";
    case MAIN_ROUTES.POST:
      return "Post";
    case MAIN_ROUTES.PROFILE:
      return "Profile";
    default:
      return "Home";
  }
};

export const menuActiveIndex = (route: string) => {
  switch (route) {
    case MAIN_ROUTES.HOME:
      return "1";
    case MAIN_ROUTES.MY_POST:
      return "2";
    case MAIN_ROUTES.GALLERY:
      return "3";
    case MAIN_ROUTES.ABOUT_US:
      return "4";
    default:
      return "1";
  }
};
