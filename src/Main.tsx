import { useDragScroll } from './DragScroll'

function DemoComponent(): JSX.Element {
    const { container, content } = useDragScroll()

    function buildUrl(imageId: string): string {
        return `https://images.unsplash.com/${imageId}xlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60`
    }

    function buildListImages(): React.ReactElement[] {
        const listUrlImages = [
            'photo-1547514701-42782101795e?ixid=MXwxMjA3fDB8MHxzZWFyY2h8M3x8ZnJ1aXR8ZW58MHx8MHw%3D&i',
            'photo-1421167418805-7f170a738eb4?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTJ8fGZydWl0fGVufDB8fDB8&i',
            'photo-1530730459653-e0edd4c6072e?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTR8fGZydWl0fGVufDB8fDB8&i',
            'photo-1591287083773-9a52ba8184a4?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTV8fGZydWl0fGVufDB8fDB8&i',
            'photo-1439127989242-c3749a012eac?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MjB8fGZydWl0fGVufDB8fDB8&i',
            'photo-1547514701-42782101795e?ixid=MXwxMjA3fDB8MHxzZWFyY2h8M3x8ZnJ1aXR8ZW58MHx8MHw%3D&i',
            'photo-1421167418805-7f170a738eb4?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTJ8fGZydWl0fGVufDB8fDB8&i',
            'photo-1530730459653-e0edd4c6072e?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTR8fGZydWl0fGVufDB8fDB8&i',
            'photo-1591287083773-9a52ba8184a4?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTV8fGZydWl0fGVufDB8fDB8&i',
            'photo-1439127989242-c3749a012eac?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MjB8fGZydWl0fGVufDB8fDB8&i',
        ].map(
            (imageId, index): React.ReactElement => (
                <li key={index} className="item">
                    <a href="//unsplash.com/">
                        <img src={buildUrl(imageId)} alt="unsplash" />
                    </a>
                </li>
            ),
        )

        return listUrlImages
    }

    return (
        <div className="container">
            <div className="drag-scroll" ref={container}>
                <ul ref={content}>{buildListImages()}</ul>
            </div>
        </div>
    )
}

export default DemoComponent
