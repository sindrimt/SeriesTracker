import { configureStore } from "@reduxjs/toolkit";

import userReducer from "./features/user/userSlice";
import toggleThemeReducer from "./features/theme/colorThemeSlice";
import topAnimesReducer from "./features/topAnimes/topAnimesSlice";

export const store = configureStore({
    reducer: {
        user: userReducer,
        theme: toggleThemeReducer,
        topAnimes: topAnimesReducer,
    },
});
