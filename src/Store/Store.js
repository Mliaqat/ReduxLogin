import { configureStore } from "@reduxjs/toolkit";
import courseData from "./courseDataSlice";
import dataSlice from "./dataSlice";
import uitoggle from "./UiSlice";

const Store = configureStore({
  reducer: {
    ui: uitoggle.reducer,
    data: dataSlice.reducer,
    courseData: courseData.reducer,
  },
});

export default Store;
