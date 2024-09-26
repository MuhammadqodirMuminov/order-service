import { createTheme, ThemeProvider } from '@mui/material';
import '../index.css';
import { history } from '../lib/utils';
import { Router } from '../router';
import { HistoryProvider } from './providers';

const theme = createTheme({
	components: {
		MuiButton: {
			variants: [
				{
					style: {
						backgroundColor: 'red',
					},
					props: {
						variant: 'contained',
					},
				},
			],
		},
	},
});

export const App = () => {
	return (
		<ThemeProvider theme={theme}>
			<HistoryProvider history={history}>
				<Router />
			</HistoryProvider>
		</ThemeProvider>
	);
};
