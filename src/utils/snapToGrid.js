export function snapToGrid(x, y) {
    const snappedX = Math.round(x / 60) * 60
    const snappedY = Math.round(y / 60) * 60
    return [snappedX, snappedY]
}
