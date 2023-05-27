import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

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
            })
        }
    }

})

// albumsApi.useFetchAlbumsQuery() -- nosso hook quando formos usar no add

export const {useFetchAlbumsQuery} = albumsApi
export {albumsApi}