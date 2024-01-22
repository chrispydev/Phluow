import {createSlice} from '@reduxjs/toolkit';

const authSlice = createSlice({
  name: 'auth',
  initialState: {isAuthenticated: false},
  authUserData: {},
  reducers: {
    login: state => {
      state.isAuthenticated = true;
    },
    logout: state => {
      state.isAuthenticated = false;
    },
    setAuthUserData: (state, action) => {
      state.authUserData = action.payload;
    },
  },
});

export const {login, logout, setAuthUserData} = authSlice.actions;
export default authSlice.reducer;
