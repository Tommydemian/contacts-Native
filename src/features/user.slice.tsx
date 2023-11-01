import { createSlice } from '@reduxjs/toolkit';

type InitialState = {
  isLoggedIn: boolean;
  data: {};
  loading: boolean;
  error: boolean;
};

const initialState: InitialState = {
  isLoggedIn: false,
  data: {},
  loading: false,
  error: false,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
});

export const {} = userSlice.actions;

export default userSlice.reducer;
