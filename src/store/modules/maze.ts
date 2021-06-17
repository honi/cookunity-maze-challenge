import {createSlice} from '@reduxjs/toolkit'
import {RootState} from 'store'

export const FREE = 0
export const WALL = 1
export const INIT = 2
export const EXIT = 3

type Tile = typeof FREE | typeof WALL | typeof INIT | typeof EXIT

interface MazeState {
    columns: number
    rows: number
    tiles: Tile[]
}

const initialState: MazeState = {
    columns: 12,
    rows: 12,
    tiles: [
        WALL, INIT, WALL, WALL, WALL, WALL, WALL, WALL, WALL, WALL, WALL, WALL,
        WALL, FREE, WALL, FREE, FREE, FREE, WALL, FREE, FREE, FREE, FREE, WALL,
        WALL, FREE, FREE, FREE, WALL, FREE, WALL, FREE, WALL, FREE, WALL, WALL,
        WALL, WALL, WALL, WALL, WALL, FREE, FREE, FREE, WALL, FREE, FREE, WALL,
        WALL, FREE, FREE, FREE, FREE, FREE, WALL, WALL, WALL, WALL, FREE, WALL,
        WALL, FREE, WALL, WALL, WALL, WALL, WALL, FREE, FREE, FREE, FREE, WALL,
        WALL, FREE, FREE, FREE, FREE, FREE, WALL, FREE, WALL, WALL, WALL, WALL,
        WALL, WALL, WALL, FREE, WALL, FREE, WALL, FREE, FREE, FREE, FREE, WALL,
        WALL, FREE, FREE, FREE, WALL, FREE, WALL, WALL, WALL, WALL, WALL, WALL,
        WALL, WALL, FREE, WALL, WALL, FREE, WALL, FREE, FREE, FREE, WALL, WALL,
        WALL, FREE, FREE, FREE, WALL, FREE, FREE, FREE, WALL, FREE, FREE, EXIT,
        WALL, WALL, WALL, WALL, WALL, WALL, WALL, WALL, WALL, WALL, WALL, WALL,
    ],
}

export const mazeSlice = createSlice({
    name: 'maze',
    initialState,
    reducers: {},
})

export const selectColumns = (state: RootState) => state.maze.columns
export const selectTiles = (state: RootState) => state.maze.tiles

export default mazeSlice.reducer
