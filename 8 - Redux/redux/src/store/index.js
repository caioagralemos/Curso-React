import { configureStore, createSlice } from "@reduxjs/toolkit";

const songsSlice = createSlice({
    name: 'song',
    initialState: ['Deixe-me ir', 'Amor de Rapariga'],
    reducers: {
        // 'song' + '/' + 'addSong' - ACTION TYPE
        addSong(state, action) {
            state.push(action.payload)
        }, 
        removeSong(state, action) {
            // console.log(action.payload) é uma string com o nome da música que queremos deletar
            const index = state.indexOf(action.payload)
            state.splice(index, 1)
        },
        resetSongs(state, action) {
            return [] // para reassignar nosso state precisamos retornar!!
        }
    },
    extraReducers(builder) {
        builder.addCase(moviesSlice.actions.resetMovies, (state, action) => {
            return [] // quando ele escutar que resetMovies for chamado, executa a arrow func
        })
    }
})

const moviesSlice = createSlice({
    name: 'movie',
    initialState: ['Jurassic Park', 'Harry Potter'],
    reducers: {
        addMovie(state, action) {
            state.push(action.payload)
        }, 
        removeMovie(state, action) {
            const index = state.indexOf(action.payload)
            state.splice(index, 1)
        },
        resetMovies(state, action) {
            console.log(action)
            return []
        }
    }
})

const store = configureStore({
    reducer: {
        songs: songsSlice.reducer, // daqui sai o songs
        movies: moviesSlice.reducer
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

export {store}
export const {addSong, removeSong, resetSongs} = songsSlice.actions
export const {addMovie, removeMovie, resetMovies} = moviesSlice.actions