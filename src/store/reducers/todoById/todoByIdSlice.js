import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getTodosById = createAsyncThunk("todoById/getTodosById", async (id) => {
  try {
    let { data } = await axios.get(`http://localhost:3000/data?id=${id}`);
    return data;
  } catch (error) {
    console.log(error);
  }
});

export const todoByIdSlice = createSlice({
  name: 'todoById',
  initialState: {
    data: []
  },
  reducers: {},
  extraReducers: (builder) => {
      builder.addCase(getTodosById.fulfilled, (state, action) => {
              state.data = action.payload;
          })
  },
});
export default todoByIdSlice.reducer;
