import { getLocalStorage, setLocalStorage } from '@/lib/utils';
import { ETheme, TInitialState } from './types';
import { createSlice } from '@reduxjs/toolkit';
import { ENDPOINTS } from '../endpoints';

const initialState: TInitialState = {
	isModal: false,
	total_page: 0,
	page: 1,
	search: null,
	path: '',
	menu: [],
	previewOpen: false,
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

		setPreviewOpen: (state, { payload }) => {
			state.previewOpen = payload;
		},

		setFilesList: (state, { payload }) => {
			state.fileList = payload;
		},
		setImageIds: (state, { payload }) => {
			state.imageIds = payload;
		},

		setAppStartDate: (state, { payload }) => {
			state.startDate = payload;
		},
		setAppEndDate: (state, { payload }) => {
			state.endDate = payload;
		},

		setThemeUi: (state, { payload }) => {
			setLocalStorage(THEMEUI, payload);
			state.themeUi = payload;
		},

		setModal: (state, { payload }) => {
			if (payload.type === 'get') {
				state.isModal.get = payload.data;
			} else if (payload.type === 'post') {
				state.isModal.post = payload.data;
			} else if (payload.type === 'put') {
				state.isModal.put = payload.data;
			} else if (payload.type === 'map') {
				state.isModal.map = payload.data;
			} else {
				state.isModal.delete = payload.data;
			}
		},

		setTheme: (state, { payload }) => {
			setLocalStorage(THEME, payload);
			state.theme = payload;
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

		setPreviewImage: (state, { payload }) => {
			state.previewImage = payload;
		},
		setPreviewTitle: (state, { payload }) => {
			state.previewTitle = payload;
		},
		setProdcutDrower: (state, { payload }) => {
			state.isModal.product_drower = payload;
		},
		setBrandDrower: (state, { payload }) => {
			state.isModal.brand_drower = payload;
		},
	},
});

export const appActions = appSlice.actions;
export const appReducer = appSlice.reducer;