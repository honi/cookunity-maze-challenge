import {Maze} from 'components/Maze'
import {WelcomeOverlay} from 'components/WelcomeOverlay'
import {maze0} from 'mazes'
import {useCallback} from 'react'
import {useAppDispatch, useAppSelector} from 'store/hooks'
import {initMaze} from 'store/modules/maze'
import {calculatePath, selectPlayerIsWalking} from 'store/modules/player'

export default function Index() {
    const dispatch = useAppDispatch()
    const isWalking = useAppSelector(selectPlayerIsWalking)

    const handleStart = useCallback(() => {
        dispatch(initMaze(maze0))
        dispatch(calculatePath())
    }, [dispatch])

    return isWalking ? <Maze /> : <WelcomeOverlay onStart={handleStart} />
}
