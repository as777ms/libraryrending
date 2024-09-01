import { configureStore } from '@reduxjs/toolkit'
import todolistReducer from "./reducers/todolist/todolistSlice"
import todoByIdReducer from "./reducers/todoById/todoByIdSlice"
import todoSliderReducer from "./reducers/todoSlider/sliderSlice"
import todoByIdinSliderReducer from "./reducers/todoByIdinSlider/todoByIdinSliderSplice"
export const store = configureStore({
  reducer: {
    todolist : todolistReducer,
    todoById: todoByIdReducer,
    todoSlider: todoSliderReducer,
    todoByIdinSlider: todoByIdinSliderReducer
  },
})