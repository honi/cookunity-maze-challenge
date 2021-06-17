import {Maze} from 'components/Maze'
import {WelcomeOverlay} from 'components/WelcomeOverlay'
import {MAZE0} from 'mazes'
import {useCallback} from 'react'
import {useAppDispatch, useAppSelector} from 'store/hooks'
import {setMaze} from 'store/modules/maze'
import {selectPlayerIsWalking, setPath} from 'store/modules/player'
import {calculatePath, parseMaze} from 'utils'

export default function Index() {
    const dispatch = useAppDispatch()
    const isWalking = useAppSelector(selectPlayerIsWalking)

    const handleStart = useCallback(() => {
        const maze = parseMaze(MAZE0)
        const path = calculatePath(maze)
        dispatch(setMaze(maze))
        dispatch(setPath(path))
    }, [dispatch])

    return isWalking ? <Maze /> : <WelcomeOverlay onStart={handleStart} />
}
