import { configureStore } from "@reduxjs/toolkit";
import { usersReducer } from "./slices/usersSlice";
import {setupListeners} from '@reduxjs/toolkit/query'
import { albumsApi } from "./apis/albumsApi";
import { photosApi } from "./apis/photosApi";


export const store = configureStore({
    reducer: {
        users: usersReducer,
        [albumsApi.reducerPath]: albumsApi.reducer,
        [photosApi.reducerPath]: photosApi.reducer,
    },
    middleware: (getDefaultMiddleware) => {
        return getDefaultMiddleware()
            .concat(albumsApi.middleware)
            .concat(photosApi.middleware)
    }
})

setupListeners(store.dispatch)

export * from "./thunks/fetchUsers" // pegue tudo que foi exportado em fetchUsers e exporte aqui tb
export * from './thunks/addUser'
export * from './thunks/removeUser'
export { useFetchAlbumsQuery, useAddAlbumMutation, useDeleteAlbumMutation } from './apis/albumsApi'
export {useFetchPhotosQuery, useAddPhotoMutation, useDeletePhotoMutation} from './apis/photosApi'