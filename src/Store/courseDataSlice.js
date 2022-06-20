import { createSlice } from "@reduxjs/toolkit";

const courseDataSlice = createSlice({
  name: "courseData",
  initialState: {
    courseData: [
      {
        name: "Liaqat",
        email: "liaqat@gmail.com",
        course: "Mern",
      },
      {
        name: "Liaqat",
        email: "liaqat@gmail.com",
        course: "Mern",
      },
      {
        name: "Liaqat",
        email: "liaqat@gmail.com",
        course: "Mern",
      },
      {
        name: "Liaqat",
        email: "liaqat@gmail.com",
        course: "Mern",
      },
    ],
  },
  reducers: {
    courseData(state, action) {
      const newitem = action.payload;
      newitem.forEach(function (newitem) {
        state.courseData.push(newitem);
      });
    },
  },
});

export const courseDataActions = courseDataSlice.actions;
export default courseDataSlice;
