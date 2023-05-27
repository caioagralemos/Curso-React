import { useFetchAlbumsQuery } from "../store"
import ExpandablePanel from "./ExpandablePanel"
import Skeleton from './Skeleton'

function AlbumsList({user}){
    const {data, error, isLoading} = useFetchAlbumsQuery(user)

    let content;

    if (isLoading){
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

    return <div>
        {content}
    </div>
}

export default AlbumsList