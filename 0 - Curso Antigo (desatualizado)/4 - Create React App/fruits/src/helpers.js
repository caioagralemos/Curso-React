function choice(array) {
    var random = Math.floor(Math.random() * array.length)
    return array[random]
}

function remove(array, fruit){
    var indice = array.indexOf(fruit)
    if (indice !== -1) {
        return array.splice(indice, 1)
    } else {
        return undefined
    }
}

export {choice, remove}