import {useCallback} from 'react'
import {useAppDispatch, useAppSelector} from 'store/hooks'
import {
    restartWalk, selectMoveCountReportStatus, selectPlayerIsWalking, selectPlayerMoveCount,
} from 'store/modules/player'

import styles from './Layout.module.css'

export function Layout({children}) {
    const dispatch = useAppDispatch()
    const isWalking = useAppSelector(selectPlayerIsWalking)
    const moveCount = useAppSelector(selectPlayerMoveCount)
    const moveCountReportStatus = useAppSelector(selectMoveCountReportStatus)

    const handleRestart = useCallback(() => {
        dispatch(restartWalk())
    }, [dispatch])

    return (
        <div className={styles.root}>
            <div className={styles.header}>
                <h1>CookUnity Maze Challenge</h1>
                {isWalking && (
                    <div className={styles.toolbar}>
                        <div>Moves: {moveCount}</div>
                        <button onClick={handleRestart}>restart</button>
                    </div>
                )}
            </div>
            <div className={styles.content}>
                {children}
            </div>
            <div className={styles.footer}>
                {moveCountReportStatus === 'loading' && 'Reporting move count...'}
                {moveCountReportStatus === 'error' && 'Error reporting move count :('}
                {moveCountReportStatus === 'success' && 'Move count reported successfully!'}
            </div>
        </div>
    )
}
