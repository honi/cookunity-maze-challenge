import {Maze} from 'components/Maze'
import {WelcomeOverlay} from 'components/WelcomeOverlay'
import {useCallback, useState} from 'react'
import {useAppDispatch} from 'store/hooks'
import {calculatePath} from 'store/modules/player'

export default function Index() {
    const [showWelcome, setShowWelcome] = useState(true)
    const dispatch = useAppDispatch()
    const handleStart = useCallback(() => {
        dispatch(calculatePath())
        setShowWelcome(false)
    }, [dispatch])

    return showWelcome ? <WelcomeOverlay onStart={handleStart} /> : <Maze />
}
