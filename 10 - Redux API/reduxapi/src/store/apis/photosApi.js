import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { faker } from '@faker-js/faker'

const photosApi = createApi({
    reducerPath: 'photos',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:3005'
    }),
    endpoints(builder){
        return {
            fetchPhotos: builder.query({
                query: (album) => {
                    return {
                        url: '/photos', // relative path da url
                        params: {
                            albumId: album.id, // query string (/albums/userId=user.id)
                        },
                        method: 'GET' // método da request
                    }
                }
            }),
            addPhoto: builder.mutation({
                query: (album) => {
                    return {
                        method: 'POST',
                        url: '/photos',
                        body: {
                            albumId: album.id,
                            url: faker.image.url(150, 150, true)
                        }
                    }
                }
            }),
            deletePhoto: builder.mutation({
                query: (photo) => {
                    return {
                        method: 'POST',
                        url: `/photos/${photo.id}`
                    }
                }
            }),
        }
    }
})

export const {useFetchPhotosQuery, useAddPhotoMutation, useDeletePhotoMutation} = photosApi
export {photosApi}