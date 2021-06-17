import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import {RootState} from 'store'

export const START = 1
export const EXIT = 2
export const WALL = 3
export const EMPTY = 4

type Tile = typeof START | typeof EXIT | typeof WALL | typeof EMPTY

interface MazeState {
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
        initMaze: (state, action: PayloadAction<string>) => {
            [state.columns, state.tiles] = parseMaze(action.payload)
        },
    },
})

export default mazeSlice.reducer
export const {initMaze} = mazeSlice.actions

export const selectColumns = (state: RootState) => state.maze.columns
export const selectTiles = (state: RootState) => state.maze.tiles

function parseMaze(input: string): [number, Tile[]] {
    const tileMapping: Record<string, Tile> = {'S': START, 'E': EXIT, 'X': WALL, ' ': EMPTY}
    const rows = input.trim().split('\n').map(row => row.trim())
    const tiles = rows.join('').split('').map(tile => {
        const tileCode = tileMapping[tile]
        if (tileCode === undefined) throw new Error(`Invalid maze tile: ${tile}`)
        return tileCode
    })
    return [rows.length, tiles]
}
