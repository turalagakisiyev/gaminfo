import { createSlice } from '@reduxjs/toolkit';
import GamesDB from "../gamesdb.json";

const initialState = {
    games: GamesDB,
    id:""
};

export const gamesSlice = createSlice({
    name: 'games',
    initialState,
    reducers: {
        setId: (state, action) => {
            state.id = action.payload;
        }
    },
});

export const { setId } = gamesSlice.actions;


export default gamesSlice.reducer;
