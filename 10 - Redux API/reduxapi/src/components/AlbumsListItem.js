import Button from "./Button";
import ExpandablePanel from "./ExpandablePanel";
import { GoTrashcan } from "react-icons/go";
import { useDeleteAlbumMutation } from "../store/apis/albumsApi";
import PhotosList from "./PhotosList";

export default function AlbumsListItem({ album }) {
    const [deleteAlbum, results] = useDeleteAlbumMutation()

    const handleDelete = () => {
        deleteAlbum(album)
    }

    const header = <div>
        <Button onClick={handleDelete} loading={results.isLoading}><GoTrashcan /></Button>
        {album.title}
    </div>

    return <ExpandablePanel key={album.id} header={header}>
        <PhotosList album={album} />
    </ExpandablePanel>
}