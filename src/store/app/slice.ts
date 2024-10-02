import { LANG } from '@/constants';
import { getLocalStorage, setLocalStorage } from '@/lib/utils';
import { createSlice } from '@reduxjs/toolkit';
import { ENDPOINTS } from '../endpoints';
import { ETheme, TInitialState } from './types';

const initialState: TInitialState = {
	isModal: false,
	total_page: 0,
	page: 1,
	search: null,
	path: '',
	menu: [],
	theme: ETheme.LIGHT,
	lang: getLocalStorage('lang') ?? 'en',
};

const appSlice = createSlice({
	name: ENDPOINTS.app,
	initialState,
	reducers: {
		setLang: (state, { payload }) => {
			setLocalStorage(LANG, payload);
			state.lang = payload;
		},

		setModal: (state, { payload }) => {
			state.isModal = payload;
		},

		setMenu: (state, { payload }) => {
			state.menu = payload;
		},

		setTotalPage: (state, { payload }) => {
			state.total_page = payload;
		},

		setPage: (state, { payload }) => {
			state.page = payload;
		},

		setSearch: (state, { payload }) => {
			state.search = payload;
		},
	},
});

export const AppActions = appSlice.actions;
export const AppReducer = appSlice.reducer;
