import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { IDataRec } from '../interfaces/data-rec';

const headers = new Headers();
headers.append('Content-Type', 'application/json');
headers.append('Accept', 'application/json');
headers.append('Allow-Origin', '*');
headers.append('Authorization', 'Bearer NdfdxJjAkcw5LALuf2Kn');

export const charactersApi = createApi({
  reducerPath: 'charactersApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://the-one-api.dev/v2/',
    prepareHeaders: (headers) => {
      headers.set('Content-Type', 'application/json');
      headers.set('Accept', 'application/json');
      headers.set('Allow-Origin', '*');
      headers.set('Authorization', 'Bearer NdfdxJjAkcw5LALuf2Kn');

      return headers;
    },
  }),
  endpoints: (build) => ({
    getCharacters: build.query<IDataRec, string>({
      query: (search: string) => ({
        url: 'character',
        params: {
          limit: 20,
          name: `/${search}/i`,
        },
      }),
    }),
  }),
});

export const { useGetCharactersQuery } = charactersApi;
