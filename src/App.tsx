import { createTheme, ThemeProvider } from '@mui/material';
import './index.css';
import { StyledButton } from './styled';

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

const App = () => {
	return (
		<ThemeProvider theme={theme}>
			<StyledButton variant='contained'>App</StyledButton>
		</ThemeProvider>
	);
};

export default App;
