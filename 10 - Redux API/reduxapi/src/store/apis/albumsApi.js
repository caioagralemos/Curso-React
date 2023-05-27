import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { faker } from '@faker-js/faker'

const albumsApi = createApi({
    reducerPath: 'albums',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:3005'
    }),
    endpoints(builder) {
        return {
            fetchAlbums: builder.query({ // query pra pegar dados ou mutation pra alterar algo
                query: (user) => {
                    return {
                        url: '/albums', // relative path da url
                        params: {
                            userId: user.id, // query string (/albums/userId=user.id)
                        },
                        method: 'GET' // método da request
                    }
                }
            }),
            addAlbum: builder.mutation({
                query: (user) => {
                    return{
                        url: '/albums',
                        method: 'POST',
                        body: {
                            userId: user.id,
                            title: faker.commerce.productName()
                        }
                    }
                }
            })
        }
    }

})

// albumsApi.useFetchAlbumsQuery() -- nosso hook quando formos usar no add

export const {useFetchAlbumsQuery, useAddAlbumMutation} = albumsApi
export {albumsApi}