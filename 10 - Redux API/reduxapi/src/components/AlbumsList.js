import { useFetchAlbumsQuery, useAddAlbumMutation } from "../store"
import ExpandablePanel from "./ExpandablePanel"
import Skeleton from './Skeleton'
import Button from './Button'

function AlbumsList({ user }) {
    const { data, error, isLoading } = useFetchAlbumsQuery(user)
    const [addAlbum, results] = useAddAlbumMutation()

    const handleAddAlbum = () => {
        addAlbum(user)
    }

    let content;

    if (isLoading) {
        content = <Skeleton times={3} />
    } else if (error) {
        content = <div>Erro carregando album</div>
    } else {
        content = data.map((d) => {
            const header = <div>{d.title}</div>

            return <ExpandablePanel key={d.id} header={header}>
                List of Photos
            </ExpandablePanel>
        })
    }

    return (
        <div>
            <div className='flex'>
                Albums for {user.name}
                <div className='flex right-0'>
                    <Button onClick={handleAddAlbum}>+ Add Album</Button>
                </div>
            </div>
            <div>
                {content}
            </div>
        </div>
    )
}

export default AlbumsList