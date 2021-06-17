import {Maze} from 'components/Maze'
import {WelcomeOverlay} from 'components/WelcomeOverlay'
import {useCallback} from 'react'
import {useAppDispatch, useAppSelector} from 'store/hooks'
import {calculatePath, selectPlayerIsWalking} from 'store/modules/player'

export default function Index() {
    const dispatch = useAppDispatch()
    const isWalking = useAppSelector(selectPlayerIsWalking)

    const handleStart = useCallback(() => {
        dispatch(calculatePath())
    }, [dispatch])

    return isWalking ? <Maze /> : <WelcomeOverlay onStart={handleStart} />
}
