import {Player} from 'components/Player'
import {useEffect} from 'react'
import {useAppDispatch, useAppSelector} from 'store/hooks'
import {selectColumns, selectTiles, WALL} from 'store/modules/maze'
import {reportMoveCount, selectMazeComplete, selectPlayerMoveCount, selectPlayerTile} from 'store/modules/player'

import styles from './Maze.module.css'

export function Maze() {
    const dispatch = useAppDispatch()
    const columns = useAppSelector(selectColumns)
    const tiles = useAppSelector(selectTiles)
    const playerTile = useAppSelector(selectPlayerTile)
    const mazeComplete = useAppSelector(selectMazeComplete)
    const moveCount = useAppSelector(selectPlayerMoveCount)

    useEffect(() => {
        if (mazeComplete) dispatch(reportMoveCount(moveCount))
    }, [dispatch, mazeComplete, moveCount])

    return (
        <div
            className={styles.root}
            style={{gridTemplateColumns: `repeat(${columns}, 1fr)`}}>
            {tiles.map((tile, index) => (
                <div
                    key={index}
                    className={`${styles.tile} ${tile === WALL ? styles.wall : ''}`}>
                    {index === playerTile && <Player />}
                </div>
            ))}
        </div>
    )
}
