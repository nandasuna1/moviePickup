import { createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react"
import { REACT_APP_API_KEY, REACT_APP_API_HOST,REACT_APP_API_URL } from "../consts/consts"
const moviesApiHeaders = {
    'X-RapidAPI-Key': REACT_APP_API_KEY,
    'X-RapidAPI-Host': REACT_APP_API_HOST
}

const baseURL = REACT_APP_API_URL

const createRequest = (url: string) => ({url, headers: moviesApiHeaders})

interface Movies {
    id: string,

}

type GetMoviesResponse = Movies[]

console.log('url', baseURL);


export const moviesApi = createApi({
    reducerPath: 'moviesApi',
    baseQuery: fetchBaseQuery({ baseUrl: baseURL}),
    endpoints: (builder) => ({
        getMovies: builder.query<GetMoviesResponse, void>({
            query: () => createRequest('/x/upcoming'),
            onError: (error) => {
                console.error('An error occurred:', error)
            }
        })
    })
})

export const {
    useGetMoviesQuery,
} = moviesApi