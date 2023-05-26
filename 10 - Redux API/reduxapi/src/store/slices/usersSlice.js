import { createSlice } from "@reduxjs/toolkit";
import { fetchUsers } from "../thunks/fetchUsers";

const usersSlice = createSlice({
    name: 'users',
    initialState: {
        data: [],
        isLoading: false,
        error: null
    },
    reducers: {},
    extraReducers(builder){
        builder.addCase(fetchUsers.pending, (state, action) => {
            state.isLoading = true
        })
        builder.addCase(fetchUsers.rejected, (state, action) => {
            state.isLoading = false
            state.error = action.error // o thunk despacha o erro em action.error
        })
        builder.addCase(fetchUsers.fulfilled, (state,action) => {
            state.isLoading = false
            state.data = action.payload // o thunk despacha os dados em action.payload
        })
    }
})

// criados imediatamente em uma função thunk
// fetchUsers.fulfilled === 'users/fetch/fulfilled'
// fetchUsers.pending === 'users/fetch/pending'
// fetchUsers.rejected === 'users/fetch/rejected'

export const usersReducer = usersSlice.reducer