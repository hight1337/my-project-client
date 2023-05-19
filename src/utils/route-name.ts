import { MAIN_ROUTES } from "constants/routes";

export const returnRouteName = (route: string) => {
  switch (route) {
    case MAIN_ROUTES.HOME:
      return "Home";
    case MAIN_ROUTES.ABOUT_US:
      return "About";
    case MAIN_ROUTES.MY_POST:
      return "My Post";
    case MAIN_ROUTES.GALLERY:
      return "Gallery";
    default:
      return "Home";
  }
};
