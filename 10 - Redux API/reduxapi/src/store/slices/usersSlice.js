import { createSlice } from "@reduxjs/toolkit";
import { fetchUsers } from "../thunks/fetchUsers";
import { addUser } from "../thunks/addUser";
import { removeUser } from "../thunks/removeUser";

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

        builder.addCase(addUser.pending, (state, action) => {
            state.isLoading = true
        })
        builder.addCase(addUser.fulfilled, (state, action) => {
            state.isLoading = false
            state.data.push(action.payload)
        })
        builder.addCase(addUser.rejected, (state, action) => {
            state.isLoading = false
            state.error = action.error

        })

        builder.addCase(removeUser.pending, (state, action) => {
            state.isLoading = true
        })
        builder.addCase(removeUser.fulfilled, (state, action) => {
            state.isLoading = false
            state.data = state.data.filter((user) => {
                return user.id !== action.payload.id
            })
        })
        builder.addCase(removeUser.rejected, (state, action) => {
            console.log('failed!!!', action.error)
            state.isLoading = false
            state.error = action.error
        })

    }
})

// criados imediatamente em uma função thunk
// fetchUsers.fulfilled === 'users/fetch/fulfilled'
// fetchUsers.pending === 'users/fetch/pending'
// fetchUsers.rejected === 'users/fetch/rejected'

export const usersReducer = usersSlice.reducer