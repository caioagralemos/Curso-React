import { createSlice } from "@reduxjs/toolkit"
import { reset } from "../actions"

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
        // resetMovies(state, action) {
        //     console.log(action)
        //     return []
        // }
    },
    extraReducers(builder) {
        builder.addCase(reset, (state, action) => {
            return [] // quando ele escutar que a ação reset for chamado, executa a arrow func
        })
    }
})

export const {addMovie, removeMovie} = moviesSlice.actions
export const moviesReducer = moviesSlice.reducer