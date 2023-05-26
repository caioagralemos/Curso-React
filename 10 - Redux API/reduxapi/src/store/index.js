import { configureStore } from "@reduxjs/toolkit";
import { usersReducer } from "./slices/usersSlice";
import { fetchUsers } from "./thunks/fetchUsers";

export const store = configureStore({
    reducer: {
        users: usersReducer
    }
})

export * from "./thunks/fetchUsers" // pegue tudo que foi exportado em fetchUsers e exporte aqui tb