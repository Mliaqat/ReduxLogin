import { configureStore } from "@reduxjs/toolkit";
import dataSlice from "./dataSlice";
import uitoggle from "./UiSlice";

const Store = configureStore({
  reducer: { ui: uitoggle.reducer, data: dataSlice.reducer },
});

export default Store;
