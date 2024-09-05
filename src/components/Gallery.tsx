import GalleryItem, {Song} from './GalleryItem'


interface GalleryProps {
    data: Song[]
}
function Gallery(props:GalleryProps){

    const display = props.data.map((item: Song, index: number) => {
        return (
            <GalleryItem item={item} key={index} />
        )
    })

    return (
        <div>
            {display}
        </div>
    )
}

export type {Song}
export default Gallery
