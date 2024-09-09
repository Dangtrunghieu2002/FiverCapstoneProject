import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./authSlice";
import nguoiDungSlice from "./nguoiDungSlice";
import skillSlice from "./skillSlice";
import congViecSlice from "./congViecSlice"
import thueCongViecSlice from "./thueCongViecSlice"
export const store = configureStore({
  reducer: {
    authSlice,
    nguoiDungSlice,
    skillSlice,
    congViecSlice,
    thueCongViecSlice
  },
});
