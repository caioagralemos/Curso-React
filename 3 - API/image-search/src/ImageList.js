import Imagem from "./Image";

function ImageList({imagens}) {

    const images = imagens.map(r => {
        return <Imagem
            url={r.urls.small}
            description={r.alt_description}
            key={r.id}
            />
        })

    return(
        <div>{images}</div>
    )
}

export default ImageList