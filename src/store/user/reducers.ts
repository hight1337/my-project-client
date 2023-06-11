import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { USER_SLICE } from "constants/redux";
import { IUser } from "types/user";

const initialState: IUser = {
  email: "",
  id: "",
  firstName: "",
  lastName: "",
};

export const userSlice = createSlice({
  name: USER_SLICE,
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<IUser>) => {
      state.email = action.payload.email;
      state.id = action.payload.id;
      state.firstName = action.payload.firstName;
      state.lastName = action.payload.lastName;
    },
    removeUser: (state) => {
      state.email = "";
      state.id = "";
      state.firstName = "";
      state.lastName = "";
    },
  },
});

export const { setUser, removeUser } = userSlice.actions;

export default userSlice.reducer;
