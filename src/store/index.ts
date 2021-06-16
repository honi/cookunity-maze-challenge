import {configureStore} from '@reduxjs/toolkit'

import mazeReducer from './modules/maze'
import playerReducer from './modules/player'

const store = configureStore({
    reducer: {
        maze: mazeReducer,
        player: playerReducer,
    },
})

export default store

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
