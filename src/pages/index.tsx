import {Maze} from 'components/Maze'
import {WelcomeOverlay} from 'components/WelcomeOverlay'
import {useCallback, useState} from 'react'

export default function Index() {
    const [showWelcome, setShowWelcome] = useState(true)
    const handleStart = useCallback(() => {
        setShowWelcome(false)
    }, [])
    return (
        <>
            <Maze />
            {showWelcome && <WelcomeOverlay onStart={handleStart} />}
        </>
    )
}
