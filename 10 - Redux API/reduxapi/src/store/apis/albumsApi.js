import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { faker } from '@faker-js/faker'

// DEVELOPMENT ONLY
const pause = (duration) => {
    return new Promise((resolve) => {
        setTimeout(resolve, duration);
    })
}

const albumsApi = createApi({
    reducerPath: 'albums',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:3005',
        fetchFn: async(...args) => { // uma func que é executada ao fazer o fetch, normalmente ela só é um fetch(args)
            await pause(1000) // aqui introduzimos um pause de 1000ms
            return fetch(...args) // depois fazemos ela voltar ao mesmo ponto
        }
    }),
    endpoints(builder) {
        return {
            fetchAlbums: builder.query({ // query pra pegar dados ou mutation pra alterar algo
                providesTags: (result, error, user) => {
                    const tags = result.map(album => { // result é a nossa lista de albums
                        return {type: 'Album', id: album.id}
                    })
                    tags.push({type: 'UsersAlbums', id: user.id}) // dá a esses dados uma tag de Album
                    return tags
                },
                // assim que os dados na tag Album estiverem ultrapassados, ele vai dar outra request
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
                invalidatesTags: (result, error, user) => { // esse hook vai retornar apenas a tag pra o usuário em que adicionemos um album
                    return [{type: 'UsersAlbums', id: user.id}] // avisa que quando isso for executado os dados na tag Album estarão ultrapassados
                },
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
            }),
            deleteAlbum: builder.mutation({
                invalidatesTags: (result, error, album) => { // esse hook vai retornar apenas a tag pra o usuário em que adicionemos um album
                    return [{type: 'Album', id: album.id}] // avisa que quando isso for executado os dados na tag Album estarão ultrapassados
                },
                query: (album) => {
                    return{
                        url: `/albums/${album.id}`,
                        method: 'DELETE'
                    }
                }
            })
        }
    }

})

// albumsApi.useFetchAlbumsQuery() -- nosso hook quando formos usar no add

export const {useFetchAlbumsQuery, useAddAlbumMutation, useDeleteAlbumMutation} = albumsApi
export {albumsApi}