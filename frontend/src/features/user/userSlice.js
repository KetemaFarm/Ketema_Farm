import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const getUserFromLocalStorage = () => {
  return JSON.parse(localStorage.getItem("user") || null);
};

const initialState = {
  user: getUserFromLocalStorage(),
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    loginUser: (state, action) => {
      const user = { role: action.payload.role, token: action.payload.access };
      state.user = user;
      localStorage.setItem("user", JSON.stringify(user));
    },
    logoutUser: (state) => {
      state.user = null;
      //   localStorage.clear()
      localStorage.removeItem("user");
      toast.success("Logged out successfully");
    },
  },
});

export const { logoutUser, loginUser } = userSlice.actions;
export default userSlice.reducer;
