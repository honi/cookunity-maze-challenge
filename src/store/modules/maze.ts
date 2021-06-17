import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import {RootState} from 'store'

export const START = 1
export const EXIT = 2
export const WALL = 3
export const EMPTY = 4

export type Tile = typeof START | typeof EXIT | typeof WALL | typeof EMPTY

export interface MazeState {
    columns: number
    tiles: Tile[]
}

const initialState: MazeState = {
    columns: 0,
    tiles: []
}

export const mazeSlice = createSlice({
    name: 'maze',
    initialState,
    reducers: {
        setMaze: (_, action: PayloadAction<MazeState>) => action.payload
    },
})

export default mazeSlice.reducer
export const {setMaze} = mazeSlice.actions

export const selectColumns = (state: RootState) => state.maze.columns
export const selectTiles = (state: RootState) => state.maze.tiles
