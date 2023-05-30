import { useFetchAlbumsQuery, useAddAlbumMutation } from "../store"
import ExpandablePanel from "./ExpandablePanel"
import Skeleton from './Skeleton'
import Button from './Button'
import AlbumsListItem from "./AlbumsListItem"

export default function AlbumsList({ user }) {
    const { data, error, isLoading } = useFetchAlbumsQuery(user)
    const [addAlbum, results] = useAddAlbumMutation()

    const handleAddAlbum = () => {
        addAlbum(user)
    }

    let content;

    if (isLoading) {
        content = <Skeleton className='h-10 w-full' times={3} />
    } else if (error) {
        content = <div>Erro carregando album</div>
    } else {
        content = data.map((d) => {
            return <AlbumsListItem key={d.id} album={d} />
        })
    }

    return (
        <div>
            <div className='m-2 flex flex-row items-center justify-between'>
                <h3 className="text-lg font-bold">Albums for {user.name}</h3>
                <div className='flex right-0'>
                    <Button loading={results.isLoading} onClick={handleAddAlbum}>+ Add Album</Button>
                </div>
            </div>
            <div>
                {content}
            </div>
        </div>
    )
}