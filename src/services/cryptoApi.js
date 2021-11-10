
import { createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'


const cryptoApiHeaders = {
    'x-rapidapi-host': 'api.coinranking.com/v2',
    'x-rapidapi-token': 'coinranking54e7fc5497b75cd8611b70047daa021966fc40b363417ecb',
    'Access-Control-Allow-Origin': '*',
}

// Another Api source for checking
// var options = {
//     method: 'GET',
//     url: 'https://coinlore-cryptocurrency.p.rapidapi.com/api/tickers/',
//     params: {start: '0', limit: '100'},
//     headers: {
//       'x-rapidapi-host': 'coinlore-cryptocurrency.p.rapidapi.com',
//       'x-rapidapi-key': 'c7ab38c029mshbb8dec892dbb8f1p176c5bjsnb6ac7147b613'
//     }
//   };

//https://coinlore-cryptocurrency.p.rapidapi.com/api

//https://api.coinranking.com/v2
//https://coinranking1.p.rapidapi.com
const baseUrl = 'https://api.coinranking.com/v2';

const  createRequest = (url) => ({url, header: cryptoApiHeaders});

export const cryptoApi = createApi({
    reducerPath: 'cryptoApi',
    baseQuery: fetchBaseQuery({ baseUrl}),
    endpoints: (builder) => ({
    getCryptos: builder.query({
    query: (count) => createRequest(`/coins?limit=${count}`),
    }),
}),
});

export const { useGetCryptosQuery,} = cryptoApi;

// var options = {
//     method: 'GET',
//     url: 'https://coinranking1.p.rapidapi.com/stats',
//     headers: {
//       'x-rapidapi-host': 'coinranking1.p.rapidapi.com',
//       'x-rapidapi-key': 'c7ab38c029mshbb8dec892dbb8f1p176c5bjsnb6ac7147b613'
//     }
//   };