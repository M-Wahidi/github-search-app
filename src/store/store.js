import { configureStore } from "@reduxjs/toolkit";
import userSlice from "../features/user/userSlice";
import themeSlice from "../features/theme/themeSlice";

const store = configureStore({
  reducer: {
    user: userSlice,
    theme: themeSlice,
  },
});

export default store;
