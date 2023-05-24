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
            //
        }
    }
})

const store = configureStore({
    reducer: {
        songs: songsSlice.reducer // daqui sai o songs
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