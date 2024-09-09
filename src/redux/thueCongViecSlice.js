import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { thueCongViec } from "../service/thueCongViec.service";
import { getLocalStorage } from "../utils/util";
import { data } from "autoprefixer";

export const layDanhSachCongViec = createAsyncThunk(
  "thueCongViec/layDanhSachCongViec",
  async (_, thunkAPI) => {
    const response = await thueCongViec.layDanhSachDaThue(
      getLocalStorage("user")?.token
    );
    return response.data.content;
  }
);

const initialState = {
  data: [],
  count: 0,
};

const thueCongViecSlice = createSlice({
  name: "thueCongViec",
  initialState,
  reducers: {
    addJob: (state, action) => {
      state.data = [...state.data, action.payload];
      state.count += 1;
    },
    removeJob: (state, action) => {
      // Tạo bản sao của state.data
      const newData = [...state.data];
      // Tìm chỉ số của phần tử cần xóa
      const index = newData.findIndex((item) => item.id === action.payload);
      if (index !== -1) {
        // Xóa phần tử tại chỉ số tìm được
        newData.splice(index, 1);
      }
      state.data = newData;
      state.count -= 1;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(layDanhSachCongViec.fulfilled, (state, action) => {
      state.data = action.payload;
      state.count = action.payload.length;
    });
  },
});

export const { addJob, removeJob } = thueCongViecSlice.actions;

export default thueCongViecSlice.reducer;
