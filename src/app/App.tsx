import { Loading } from '@/components';
import { useBootstrap } from '@/lib/hooks/useBootstrap';
import { history } from '@/lib/utils';
import { Router } from '@/router';
import { HistoryProvider, ThemeProvider } from './providers';

export const App = () => {
	const { isInitiated } = useBootstrap();

	if (isInitiated) {
		return <Loading />;
	}
	return (
		<ThemeProvider>
			<HistoryProvider history={history}>
				<Router />
			</HistoryProvider>
		</ThemeProvider>
	);
};
