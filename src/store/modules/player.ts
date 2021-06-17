import {createSlice} from '@reduxjs/toolkit'
import {RootState} from 'store'

interface PlayerState {
    position: number
    path: number[]
}

const initialState: PlayerState = {
    position: 0,
    path: [],
}

export const playerSlice = createSlice({
    name: 'player',
    initialState,
    reducers: {
        calculatePath: (state) => {
            state.path = [1, 13, 25, 26, 27, 15, 16, 17, 29, 41, 53, 52, 51, 50, 49, 61, 73, 74, 75, 76, 77, 89, 101, 113, 125, 126, 127, 115, 116, 117, 129, 130, 131]
        },
        walk: (state) => {
            if (state.position < state.path.length - 1) {
                state.position += 1
            }
        },
        restartWalk: (state) => {
            state.position = 0
        },
    }
})

export const {calculatePath, walk, restartWalk} = playerSlice.actions

export const selectPlayerTile = (state: RootState) => state.player.path[state.player.position]
export const selectPlayerIsWalking = (state: RootState) => state.player.path.length > 0
export const selectPlayerMoveCount = (state: RootState) => state.player.position
export const selectMazeComplete = (state: RootState) => state.player.position == state.player.path.length - 1

export default playerSlice.reducer
