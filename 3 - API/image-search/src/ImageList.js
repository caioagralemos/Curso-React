import Imagem from "./Image";
import './ImageList.css'

function ImageList({imagens}) {

    const images = imagens.map(r => {
        return <Imagem
            url={r.urls.small}
            description={r.alt_description}
            key={r.id}
            link={r.urls.regular}
            />
        })

    return(
        <div className="image-list">{images}</div>
    )
}

export default ImageList