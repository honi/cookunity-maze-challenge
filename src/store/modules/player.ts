import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import {RootState} from 'store'

export const reportMoveCount = createAsyncThunk('player/reportMoveCount', async (moveCount: number) => {
    await fetch('http://www.mocky.io/v2/5df38f523100006d00b58560', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({moveCount}),
    })
})

interface PlayerState {
    path: number[]
    position: number
    moveCountReportStatus: 'walking' | 'loading' | 'error' | 'success'
}

const initialState: PlayerState = {
    path: [],
    position: 0,
    moveCountReportStatus: 'walking',
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
            state.moveCountReportStatus = 'walking'
        },
    },
    extraReducers: {
        [reportMoveCount.pending.toString()]: (state) => {
            state.moveCountReportStatus = 'loading'
        },
        [reportMoveCount.rejected.toString()]: (state) => {
            state.moveCountReportStatus = 'error'
        },
        [reportMoveCount.fulfilled.toString()]: (state) => {
            state.moveCountReportStatus = 'success'
        },
    }
})

export default playerSlice.reducer
export const {calculatePath, walk, restartWalk} = playerSlice.actions

export const selectPlayerTile = (state: RootState) => state.player.path[state.player.position]
export const selectPlayerIsWalking = (state: RootState) => state.player.path.length > 0
export const selectPlayerMoveCount = (state: RootState) => state.player.position
export const selectMazeComplete = (state: RootState) => state.player.position == state.player.path.length - 1
export const selectMoveCountReportStatus = (state: RootState) => state.player.moveCountReportStatus
