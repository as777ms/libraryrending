import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getTodosByIdSlider = createAsyncThunk("todoByIdinSlider/getTodosByIdSlider", async (id) => {
  try {
    let items = await axios.get(`http://localhost:3000/items?id=${id}`);
    return items.data;
  } catch (error) {
    console.log(error);
  }
});

export const todoByIdinSliderSplice = createSlice({
  name: 'todoByIdinSlider',
  initialState: {
    items: []
  },
  reducers: {},
  extraReducers: (builder) => {
      builder.addCase(getTodosByIdSlider.fulfilled, (state, action) => {
              state.items = action.payload;
          })
  },
});
export default todoByIdinSliderSplice.reducer;
