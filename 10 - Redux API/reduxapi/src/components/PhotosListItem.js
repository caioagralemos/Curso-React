import { GoTrashcan } from "react-icons/go"
import { useDeletePhotoMutation } from "../store"

export default function PhotosListItem({ photo }) {
    const [deletePhoto] = useDeletePhotoMutation()
    const handleDelete = () => {
        deletePhoto(photo)
    }
    return (
        <div className="relative m-2">
            <img className="h-20 w-20" src={photo.url} alt="random pic" />
            <div onClick={handleDelete} className="absolute inset-0 flex items-center justify-center hover:bg-gray-200 opacity-0 hover:opacity-80">
                <GoTrashcan className="text-3xl"/>
            </div>
        </div>
    )
}