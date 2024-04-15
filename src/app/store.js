import { configureStore } from '@reduxjs/toolkit'
import gamesReducer from '../game/gamesSlice'

export const store = configureStore({
    reducer: {
        games: gamesReducer,
    },
})

