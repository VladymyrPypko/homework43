import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Album } from "../model/Album.interface";
import { Photo } from "../model/Photo.interface";


export const albumsApi = createApi({
  reducerPath: 'albumsApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://jsonplaceholder.typicode.com/' }),
  endpoints: (builder) => ({
    getAlbums: builder.query<Album[], void>({
      query: () => 'albums'
    }),
    getAlbumPhotos: builder.query<Photo[], number>({
      query: (albumId) => `albums/${albumId}/photos`
    })
  })
})

export const { useGetAlbumsQuery, useGetAlbumPhotosQuery } = albumsApi;