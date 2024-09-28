export type TInitialState = {
	isModal: boolean;
	total_page: number;
	page: number | null;
	search: string | null;
	theme: ETheme;
	lang: string | any;
	path: string;
	menu: IMenu[];
	previewOpen: boolean;
};

export enum ETheme {
	LIGHT = 'light',
	DARK = 'dark',
	SYSTEM = 'system',
}

export interface IMenu {
	key?: string;
	icon: string;
	label: string;
}

export interface MenuChildren {
	key: string;
	label: string;
}
