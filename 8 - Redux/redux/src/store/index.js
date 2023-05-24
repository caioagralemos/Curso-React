import { configureStore } from "@reduxjs/toolkit";
import { songsReducer, addSong, removeSong } from "./slices/songsSlice";
import { moviesReducer, addMovie, removeMovie } from "./slices/moviesSlice";
import { reset } from "./actions";

const store = configureStore({
    reducer: {
        songs: songsReducer, // daqui sai o songs
        movies: moviesReducer
    }
})

// const startingState = store.getState()
// console.log(JSON.stringify(startingState))

// store.dispatch({
//     type: 'song/addSong', // o link é colocado aqui!
//     payload: 'Conexões de Máfia ft. Rich the Kid'
// })

// console.log(JSON.stringify(store.getState()))

// console.log(songsSlice.actions.addSong('Somos tão Jovens')) // action object! já cria o despachador automaticamente
// store.dispatch(songsSlice.actions.addSong('Somos tão Jovens'))
// console.log(store.getState())

export {store, addSong, removeSong, addMovie, removeMovie, reset}