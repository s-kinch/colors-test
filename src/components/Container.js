import React, { useCallback, useState } from "react"
import { useDrop } from "react-dnd"
import Square from "./Square"
import StackSquare from "./StackSquare"
import { snapToGrid as doSnapToGrid } from "../utils/snapToGrid"
import update from "immutability-helper"
import { squares, targets } from "../utils/squares"

const styles = {
    width: 500,
    height: 500,
    border: "1px solid black",
    position: "relative",
}

// const initialState = {
//     stacks = Array(16).keys().map(i => <StackSquare/>)
// }

export const Container = ({ snapToGrid }) => {
    const [boxes, setBoxes] = useState(squares)
    const [zIndex, setZIndex] = useState(0)

    const moveBox = useCallback(
        (id, left, top, zIndex) => {
            setBoxes(
                update(boxes, {
                    [id]: {
                        $merge: { left, top, zIndex },
                    },
                })
            )
        },
        [boxes]
    )

    const [, drop] = useDrop({
        accept: "SQUARE",
        drop(item, monitor) {
            const delta = monitor.getDifferenceFromInitialOffset()

            let left = Math.round(item.left + delta.x)
            let top = Math.round(item.top + delta.y)
            if (snapToGrid) {
                ;[left, top] = doSnapToGrid(left, top)
            }

            console.log(Math.abs(left / 60))
            console.log(Math.abs(top / 60))
            const newZIndex = zIndex + 1
            moveBox(item.id, left, top, newZIndex)
            setZIndex(newZIndex)
            return undefined
        },
    })

    return (
        <div ref={drop} style={styles}>
            {/* {targets.map((stack) => (
                <StackSquare key={stack.id} {...stack} />
            ))} */}
            {boxes.map((square) => (
                <Square key={square.id} {...square} />
            ))}
        </div>
    )
}
