import Image from 'next/image'
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
                <div>
                    <Image src='/cookunity.png' alt='CookUnity' width={150} height={27} />
                    <div>Maze Challenge</div>
                </div>
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
                <div>
                    Developed by Joni Bekenstein (<a href='mailto:joni@bek.io' target='_blank' rel='noreferrer'>joni@bek.io</a>)
                </div>
                <div>
                    {moveCountReportStatus === 'loading' && 'Reporting move count...'}
                    {moveCountReportStatus === 'error' && 'Error reporting move count :('}
                    {moveCountReportStatus === 'success' && 'Move count reported successfully!'}
                </div>
            </div>
        </div>
    )
}
