import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  sidebarStatus: false,
};

const sidebarSlice = createSlice({
  name: "sidebar",
  initialState,
  extraReducers: (builder) => {},
  reducers: {
    setSideBarOn: (state) => {
      state.sidebarStatus = true;
    },
    setSideBarOff: (state) => {
      state.sidebarStatus = false;
    },
  },
});
export const { setSideBarOff, setSideBarOn } = sidebarSlice.actions;
export const selectSideBarStatus = (state) => state.sidebar.sidebarStatus;

export default sidebarSlice.reducer;
