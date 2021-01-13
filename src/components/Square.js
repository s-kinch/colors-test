import { useDrag, useDrop } from "react-dnd"

function getStyles(left, top, isDragging, zIndex) {
    const transform = `translate3d(${left}px, ${top}px, 0)`
    return {
        position: "absolute",
        transform,
        WebkitTransform: transform,
        // IE fallback: hide the real node using CSS when dragging
        // because IE will ignore our custom "empty image" drag preview.
        opacity: isDragging ? 0 : 1,
        height: isDragging ? 0 : "",
        zIndex,
    }
}

export const PlainSquare = ({ drag, isDragging, backgroundColor }) => {
    return (
        <div
            className="square"
            ref={drag}
            style={{
                width: "60px",
                height: "60px",
                display: "inline-block",
                // margin: "10px",
                backgroundColor,
                // opacity: isDragging ? 0 : 1,
                ...(isDragging && {
                    boxShadow:
                        "rgba(0, 0, 0, 0.2) 0px 3px 3px -2px, rgba(0, 0, 0, 0.14) 0px 3px 4px 0px, rgba(0, 0, 0, 0.12) 0px 1px 8px 0px",
                }),
            }}
        >
            {/* {isDragging && "!!!"} */}
        </div>
    )
}

const Square = (props) => {
    const { id, backgroundColor, left, top, zIndex } = props

    const [{ isDragging }, drag] = useDrag({
        item: { id, type: "SQUARE", backgroundColor, left, top, zIndex },
        collect: (monitor) => {
            return { isDragging: !!monitor.isDragging() }
        },
    })

    return (
        <div ref={drag} style={getStyles(left, top, isDragging, zIndex)}>
            <PlainSquare {...props} />
        </div>
    )
}

export default Square
