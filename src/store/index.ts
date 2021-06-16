import {configureStore} from '@reduxjs/toolkit'

import mazeReducer from './modules/maze'

const store = configureStore({
    reducer: {
        maze: mazeReducer,
    },
})

export default store

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
