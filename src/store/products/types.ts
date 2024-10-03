import { BaseResponse } from '@/types';

export interface IProducts extends BaseResponse {
	products: IProduct[];
}

export interface IProduct {
	id: number;
	title: string;
	description: string;
}
