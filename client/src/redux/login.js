import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: localStorage.getItem("user_id")
    ? JSON.parse(localStorage.getItem("user_id"))
    : [],
  log: false,
  userId: "",
};

export const auth = createSlice({
  name: "counter",
  initialState,
  reducers: {
    login: (state, action) => {
      state.user = action.payload.user;
      state.userId = action.payload.userId;
      localStorage.setItem("user_id", JSON.stringify(action.payload.user));
      state.log = true;
    },
    logout: (state) => {
      state.user = {};
      state.log = false;
    },
  },
});

// Action creators are generated for each case reducer function
export const { login, logout } = auth.actions;

export default auth.reducer;
