import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: { data: {}, loading: false, error: null },
  reducers: {
    getUser: (state, action) => {
      return (state = { ...state, data: action.payload });
    },
    setLoading: (state, action) => {
      return (state = { ...state, loading: action.payload });
    },
    setError: (state, action) => {
      return (state = { ...state, error: action.payload });
    },
  },
});

export default userSlice.reducer;
export const { getUser, setLoading, setError } = userSlice.actions;
