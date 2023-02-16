import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
    name: 'movie',
    initialState: {
        queryDetails: {
            page: 1,
            perPage: 10,
        },
        loaded: [],
        error: ''
    },
    reducers: {
        getMovies: (state, action) => {
            state.loaded = action.payload;
        },
    }
})

const { reducer } = moviesSlice;
export const Actions = moviesSlice.actions;
export default reducer;