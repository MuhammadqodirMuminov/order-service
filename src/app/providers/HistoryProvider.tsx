import { BrowserHistory } from 'history';
import { useLayoutEffect, useState } from 'react';
import { Router, RouterProps } from 'react-router-dom';

type Props = {
	history: BrowserHistory;
} & Partial<RouterProps>;

export const HistoryProvider = ({ history, ...props }: Props) => {
	const [routes, setRoutes] = useState({ action: history.action, location: history.location });

	useLayoutEffect(
		() =>
			history.listen(update => {
				return setRoutes({ action: update.action, location: update.location });
			}),
		[history]
	);

	return <Router {...props} location={routes.location} navigationType={routes.action} navigator={history} />;
};
