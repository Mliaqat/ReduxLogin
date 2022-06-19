import { createSlice } from "@reduxjs/toolkit";

const dataSlice = createSlice({
  name: "data",
  initialState: { data: [] },
  reducers: {
    storeData(state, action) {
      const newitem = action.payload;
      newitem.forEach(function (newitem) {
        state.data.push(newitem);
      });
    },
    // deleteData(state, action) {
    //     console.log(state.data);
    //     console.log(action.payload);
    //     state.data = state.data.filter(item => item.id !== action.payload)
    // }
  },
});

export const dataActions = dataSlice.actions;
export default dataSlice;
