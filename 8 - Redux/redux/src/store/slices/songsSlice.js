import { createSlice } from "@reduxjs/toolkit"
import { reset } from "../actions"

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
        }
    },
    extraReducers(builder) {
        builder.addCase(reset, (state, action) => {
            return [] // quando ele escutar que a ação reset for chamado, executa a arrow func
        })
    }
})


export const {addSong, removeSong} = songsSlice.actions
export const songsReducer = songsSlice.reducer