import { createSelector } from "@reduxjs/toolkit";
import { USER_SLICE } from "constants/redux";
import { RootState } from "store/store";

const getState = (state: RootState) => state[USER_SLICE];

export const userSelector = createSelector(getState, (state) => state);
