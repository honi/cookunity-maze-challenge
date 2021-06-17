export const reportMoveCount = async (moveCount: number) => {
    const response = await fetch('http://www.mocky.io/v2/5df38f523100006d00b58560', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({moveCount}),
    })
    const data = await response.json()
    console.log(data)
}
