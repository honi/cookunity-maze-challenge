import {useAppSelector} from 'store/hooks'
import {selectColumns, selectTiles, WALL} from 'store/modules/maze'

import styles from './Maze.module.css'

export function Maze() {
    const columns = useAppSelector(selectColumns)
    const tiles = useAppSelector(selectTiles)

    return (
        <div
            className={styles.root}
            style={{gridTemplateColumns: `repeat(${columns}, 1fr)`}}>
            {tiles.map((tile, index) => (
                <div
                    key={index}
                    className={`${styles.tile} ${tile === WALL ? styles.wall : ''}`}
                />
            ))}
        </div>
    )
}
