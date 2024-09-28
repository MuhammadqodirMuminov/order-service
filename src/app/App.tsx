import { store } from '@/store/store';
import { Provider } from 'react-redux';
import { history } from '@/lib/utils';
import { Router } from '@/router';
import { HistoryProvider, ThemeProvider } from './providers';

export const App = () => {
	return (
		<Provider store={store}>
			<ThemeProvider>
				<HistoryProvider history={history}>
					<Router />
				</HistoryProvider>
			</ThemeProvider>
		</Provider>
	);
};
