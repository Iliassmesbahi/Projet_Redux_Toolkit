import { configureStore } from "@reduxjs/toolkit";
import slice from './tutoSlice'
const store = configureStore({
  reducer: {
    tut:slice,
  },
  
});
export default store;