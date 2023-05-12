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
        // <div>{images}</div>
        <div><Imagem
        url='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5bc_8k6elbGhjaElqZjPzgwBNIqHNT-s_HzsMBmv6gQ&s'
        description='pig'
        key='zzzz'
        /></div>
    )
}

export default ImageList