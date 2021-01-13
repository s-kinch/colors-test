import React, { useCallback, useState } from "react"
import "./App.css"
import Square from "./components/Square"
import { DndProvider } from "react-dnd"
import { HTML5Backend } from "react-dnd-html5-backend"
import { TouchBackend } from "react-dnd-touch-backend"
import { CustomDragLayer } from "./components/CustomDragLayer"
import { Container } from "./components/Container"

function App() {
    const [snapToGridAfterDrop, setSnapToGridAfterDrop] = useState(true)
    const [snapToGridWhileDragging, setSnapToGridWhileDragging] = useState(
        false
    )

    const handleSnapToGridAfterDropChange = useCallback(() => {
        setSnapToGridAfterDrop(!snapToGridAfterDrop)
    }, [snapToGridAfterDrop])

    const handleSnapToGridWhileDraggingChange = useCallback(() => {
        setSnapToGridWhileDragging(!snapToGridWhileDragging)
    }, [snapToGridWhileDragging])

    return (
        <DndProvider
            backend={TouchBackend}
            options={{ enableMouseEvents: true }}
        >
            <Container snapToGrid={snapToGridAfterDrop} />
            <CustomDragLayer snapToGrid={snapToGridWhileDragging} />
        </DndProvider>
    )
}

export default App
