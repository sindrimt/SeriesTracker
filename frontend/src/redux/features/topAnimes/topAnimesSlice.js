import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    topAnimes: [],
};

export const topAnimesSlice = createSlice({
    name: "topAnimes",
    initialState,
    reducers: {
        setTopAnimesState: (state, action) => {
            state.topAnimes = action.payload;
        },
    },
});

export const { setTopAnimesState } = topAnimesSlice.actions;

export default topAnimesSlice.reducer;
