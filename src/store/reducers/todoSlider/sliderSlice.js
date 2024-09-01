import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

export const getSlider = createAsyncThunk("items/getSlider", async () => {
  try{
   const {data} = await axios.get('http://localhost:3000/items')
   return data
  }catch(error){
    console.log(error)
  }
})

export const todoSliderSlice = createSlice({
  name: 'todoSliderSlice',
  initialState:{
  items:[]
  },
  reducers: {
   
  },
  extraReducers : (builder) => {
    builder.addCase(getSlider.fulfilled, (state,action) => {
      state.items = action.payload
    })
  }
})

export default todoSliderSlice.reducer
