import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  email: null,
  password: null,
  token: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser(state, action) {
      state.email = action.payload.email;
      state.password = action.payload.password;
      state.token = action.payload.token;
      localStorage.setItem("token", state.token);
    },
    setUserLogin(state, action) {
      state.email = action.payload.email;
      state.password = action.payload.password;
      state.token = action.payload.token;
      localStorage.setItem("tokenLogin", state.token);
    },
    removeUser(state) {
      state.email = null;
      state.password = null;
      state.token = null;
      localStorage.clear();
      console.log('exit')
    },
  },
});


export const { setUser, setUserLogin, removeUser } = userSlice.actions;

export default userSlice.reducer;
