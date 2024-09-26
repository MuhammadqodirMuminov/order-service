import { theme } from '@/styles';
import { globalStyles } from '@/styles/global';
import { CssBaseline, ThemeProvider as Theme } from '@mui/material';
import { ReactNode } from 'react';
import '../../index.css';

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
	return (
		<Theme theme={theme}>
			<CssBaseline />
			{globalStyles}
			{children}
		</Theme>
	);
};
