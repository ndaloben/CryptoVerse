import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query'

const cryptoApiHeaders = {
'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com',
'X-RapidAPI-Key':'47bf86b7ecmsha1e24da813fd9fbp113688jsn99b33aa38dc6',
}

const baseUrl = 'https://coinranking1.p.rapidapi.com/coins';
const createRequest = (url) => ({url, headers: cryptoApiHeaders})

export const cryptoApi = createApi({
    reducerPath: 'cryptoApi',
    baseQuery: fetchBaseQuery({ baseUrl }),
    endpoints: (builder) => ({
        getCryptos: builder.query({
            query: () => createRequest('/coins')
        })
    })

});