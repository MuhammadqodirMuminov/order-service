import { history } from '../lib/utils';
import { Router } from '../router';
import { HistoryProvider, ThemeProvider } from './providers';

export const App = () => {
	return (
		<ThemeProvider>
			<HistoryProvider history={history}>
				<Router />
			</HistoryProvider>
		</ThemeProvider>
	);
};
