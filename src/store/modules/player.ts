import {createAsyncThunk, createSlice, PayloadAction} from '@reduxjs/toolkit'
import {RootState} from 'store'

export const reportMoveCount = createAsyncThunk('player/reportMoveCount', async (moveCount: number) => {
    await fetch('https://www.mocky.io/v2/5df38f523100006d00b58560', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({moveCount}),
    })
})

interface PlayerState {
    path: number[]
    position: number
    moveCountReportStatus: null | 'loading' | 'error' | 'success'
}

const initialState: PlayerState = {
    path: [],
    position: 0,
    moveCountReportStatus: null,
}

export const playerSlice = createSlice({
    name: 'player',
    initialState,
    reducers: {
        setPath: (state, action: PayloadAction<number[]>) => {
            state.path = action.payload
        },
        walk: (state) => {
            if (state.position < state.path.length - 1) {
                state.position += 1
            }
        },
        restartWalk: (state) => {
            state.position = 0
            state.moveCountReportStatus = null
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
export const {setPath, walk, restartWalk} = playerSlice.actions

export const selectPlayerTile = (state: RootState) => state.player.path[state.player.position]
export const selectPlayerIsWalking = (state: RootState) => state.player.path.length > 0
export const selectPlayerMoveCount = (state: RootState) => state.player.position
export const selectMazeComplete = (state: RootState) => state.player.position == state.player.path.length - 1
export const selectMoveCountReportStatus = (state: RootState) => state.player.moveCountReportStatus
