import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios';


export const getTodos = createAsyncThunk("todolist/getTodos", async () => {
  try {
    let { data } = await axios.get('http://localhost:3000/data');
    return data;
  } catch (error) {
    console.log(error);
  }
});


export const todolistSlice = createSlice({
  name: 'todolist',
  initialState: {
    data: [],
    items: []
  },
  reducers: {
    
  },
  extraReducers: (builder) => {
    builder.addCase(getTodos.fulfilled, (state, action) => {
      state.status = 'succeeded';
      state.data = action.payload;
    });
    builder.addCase(getTodos.rejected, (state, action) => {
      state.status = 'failed';
      state.error = action.error.message;
    });
  },
  
})

// export const { increment, decrement, incrementByAmount } = todolistSlice.actions

export default todolistSlice.reducer