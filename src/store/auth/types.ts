export interface InitialState {
	user: any | null;
	token: string | null;
	isAuth: boolean;
	loading: {
		sign: boolean;
	};
	error: null | string | unknown;
}

export interface IAuthData {
	id: number;
	phone_number: string;
	type: string;
	tokens: ITokens;
}

export interface ITokens {
	access: string;
	refresh: string;
}
