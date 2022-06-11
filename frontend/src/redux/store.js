import { configureStore } from "@reduxjs/toolkit";

import userReducer from "./features/user/userSlice";
import toggleThemeReducer from "./features/theme/colorThemeSlice";

export const store = configureStore({
  reducer: {
    user: userReducer,
    theme: toggleThemeReducer,
  },
});
