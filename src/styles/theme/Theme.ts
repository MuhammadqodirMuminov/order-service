import { createTheme } from '@mui/material';

export const theme = createTheme({
	palette: {
		mode: 'dark',
		primary: {
			light: '#757ce8',
			main: '#3f50b5',
			dark: '#002884',
			contrastText: '#fff',
		},
		secondary: {
			light: '#ff7961',
			main: '#f44336',
			dark: '#ba000d',
			contrastText: '#000',
		},
	},
	colorSchemes: { dark: true, light: true },
	components: {
		MuiButton: {
			variants: [
				{
					style: {
						borderRadius: '8px',
					},
					props: {
						variant: 'contained',
					},
				},
			],
		},
	},
	typography: {
		fontFamily: 'Montserrat, sans-serif',
		fontSize: 16, // base size
		h1: { fontSize: '2rem' }, // 32px
		h2: { fontSize: '1.5rem' }, // 24px
		body1: { fontSize: '1rem' }, // 16px
		body2: { fontSize: '0.875rem' }, // 14px
	},
});
