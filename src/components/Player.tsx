import {useEffect} from 'react'
import {useAppDispatch} from 'store/hooks'
import {walk} from 'store/modules/player'

import styles from './Player.module.css'

const WALK_SPEED = 250

export function Player() {
    const dispatch = useAppDispatch()
    useEffect(() => {
        const intervalId = setInterval(() => dispatch(walk()), WALK_SPEED)
        return () => clearInterval(intervalId)
    }, [dispatch])

    return (
        <div className={styles.root}>
        </div>
    )
}
