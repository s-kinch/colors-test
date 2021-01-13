import React from "react"
import { useDrop } from "react-dnd"

function getStyles(left, top, isDragging, zIndex) {
    const transform = `translate3d(${left}px, ${top}px, 0)`
    return {
        position: "absolute",
        transform,
        WebkitTransform: transform,
        // IE fallback: hide the real node using CSS when dragging
        // because IE will ignore our custom "empty image" drag preview.
        // opacity: isDragging ? 0 : 1,
        // height: isDragging ? 0 : "",
        // zIndex,
        height: "60px",
        width: "60px",
    }
}

const StackSquare = (props) => {
    const { left, top } = props
    const [, drop] = useDrop({
        accept: "SQUARE",
        // drop(item, monitor) {
        //     console.log(item)
        //     // const delta = monitor.getDifferenceFromInitialOffset()

        //     // let left = Math.round(item.left + delta.x)
        //     // let top = Math.round(item.top + delta.y)
        //     // if (snapToGrid) {
        //     //     ;[left, top] = doSnapToGrid(left, top)
        //     // }
        //     // const newZIndex = zIndex + 1
        //     // moveBox(item.id, left, top, newZIndex)
        //     // setZIndex(newZIndex)
        //     return item
        // },
        collect: (monitor) => ({
            isOver: monitor.isOver(),
            isOverCurrent: monitor.isOver({ shallow: true }),
        }),
    })
    return <div ref={drop} style={getStyles(left, top, false, null)}></div>
}

export default StackSquare
