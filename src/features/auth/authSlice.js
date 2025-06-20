
import { createSlice } from "@reduxjs/toolkit";

const user = JSON.parse(localStorage.getItem("authUser"));

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: user || null,
  },
  reducers: {
    login: (state, action) => {
      state.user = action.payload;
      localStorage.setItem("authUser", JSON.stringify(action.payload));
    },
    logout: (state) => {
      state.user = null;
      localStorage.removeItem("authUser");
    },
    signup: (state, action) => {
      const users = JSON.parse(localStorage.getItem("users")) || [];
      users.push(action.payload);
      localStorage.setItem("users", JSON.stringify(users));
    },
  },
});

export const { login, logout, signup } = authSlice.actions;
export default authSlice.reducer;
