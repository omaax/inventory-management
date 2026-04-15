import {BaseQueryFn, createApi, EndpointBuilder, EndpointDefinitions, FetchArgs, fetchBaseQuery, FetchBaseQueryError, FetchBaseQueryMeta} from "@reduxjs/toolkit/query"

export const api = createApi({
    baseQuery: fetchBaseQuery({ baseUrl: process.env.NEXT_PUBLIC_API_BASE_UL }),
    reducerPath: "api",
    tagTypes: [],
    endpoints: (build) => ({})
})

export const {} = api;