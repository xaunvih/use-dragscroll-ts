import React from 'react'
import DragScroll, { IDragScrollOptions } from 'dragscroll-ts'

export interface IDragScrollConfig extends Omit<IDragScrollOptions, '$container' | '$content'> {}

function useDragScroll(
    options: IDragScrollConfig = {
        axis: 'x',
    },
) {
    const contentRef = React.useRef<HTMLElement | null>(null)
    const optionRef = React.useRef(options)
    const dragscroll = React.useRef<DragScroll | null>(null)

    const content = React.useCallback((node: HTMLElement | null) => {
        if (node) contentRef.current = node
    }, [])

    const container = React.useCallback((node: HTMLElement | null) => {
        if (node && contentRef.current) {
            const dragOptions: IDragScrollOptions = {
                $container: node,
                $content: contentRef.current,
                ...optionRef.current,
            }

            dragscroll.current = new DragScroll(dragOptions)
        }
    }, [])

    const dragscrollInst = dragscroll.current
    return {
        container,
        content,
        dragscrollInst,
    }
}

export { useDragScroll }
