import {EMPTY, EXIT, MazeState, START, Tile, WALL} from 'store/modules/maze'

export const parseMaze = (rawMaze: string): MazeState => {
    const tileMapping: Record<string, Tile> = {'S': START, 'E': EXIT, 'X': WALL, ' ': EMPTY}
    const rows = rawMaze.trim().split('\n').map(row => row.trim())
    const tiles = rows.join('').split('').map(tile => {
        const tileCode = tileMapping[tile]
        if (tileCode === undefined) throw new Error(`Invalid maze tile: ${tile}`)
        return tileCode
    })
    return {
        columns: rows.length,
        tiles
    }
}

export const calculatePath = (maze: MazeState) => {
    const start = maze.tiles.findIndex(tile => tile === START)
    const exit = maze.tiles.findIndex(tile => tile === EXIT)
    return calculateSubPath(maze, [start], exit)
}

const calculateSubPath = (maze: MazeState, path: number[], exit: number) => {
    const currentPosition = path[path.length - 1]
    if (currentPosition === exit) return path

    const nextPositions = getNextPositions(maze, path, currentPosition)

    while (nextPositions.length) {
        const nextPosition = nextPositions.pop()
        const nextPath = calculateSubPath(maze, [...path, nextPosition], exit)
        if (nextPath.length) return calculateSubPath(maze, nextPath, exit)
    }

    return []
}

const getNextPositions = (maze: MazeState, path: number[], position: number) => {
    const nextPositions: number[] = []
    const isValidPosition = nextPosition => (
        maze.tiles[nextPosition] !== WALL && !path.includes(nextPosition)
    )

    const up = position - maze.columns
    if (up >= 0 && isValidPosition(up)) {
        nextPositions.push(up)
    }

    const down = position + maze.columns
    if (down <= maze.tiles.length && isValidPosition(down)) {
        nextPositions.push(down)
    }

    const left = position - 1
    if (position % maze.columns > 0 && isValidPosition(left)) {
        nextPositions.push(left)
    }

    const right = position + 1
    if (position % maze.columns < maze.columns - 1 && isValidPosition(right)) {
        nextPositions.push(right)
    }

    return nextPositions
}
