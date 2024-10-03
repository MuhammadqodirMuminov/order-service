import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { IProducts } from './types';

export const productsApi = createApi({
	reducerPath: 'productsApi',
	baseQuery: fetchBaseQuery({ baseUrl: 'https://dummyjson.com/products' }),
	endpoints: builder => ({
		getProducts: builder.query<IProducts, void>({
			query: () => '/',
		}),
	}),
});

export const { useGetProductsQuery } = productsApi;
