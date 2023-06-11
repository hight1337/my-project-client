import { combineReducers, configureStore } from "@reduxjs/toolkit";
// reducers
import userReducer from "./user/reducers";
import { USER_SLICE } from "constants/redux";

const rootReducer = combineReducers({
  [USER_SLICE]: userReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
