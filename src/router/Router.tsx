import { ROUTES } from '@/constants';
import { useRoutes } from 'react-router-dom';
import { Dashboard, Login } from './Loadible';
import { Protected } from './Protected';
import { Public } from './Public';

export const Router = () => {
	const isAuth = false;
	return useRoutes([
		{
			element: <Protected isAuth={isAuth} />,
			children: [
				{
					path: ROUTES.DASHBOARD,
					element: <Dashboard />,
				},
			],
		},
		{
			element: <Public isAuth={isAuth} />,
			children: [
				{
					path: '/login',
					element: <Login />,
				},
			],
		},
	]);
};
