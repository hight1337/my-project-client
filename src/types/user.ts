export interface IUser {
  email: string;
  id: string;
  firstName: string;
  lastName: string;
}

export interface IActiveUser {
  accessToken: string;
  refreshToken: string;
  user: IUser;
}
