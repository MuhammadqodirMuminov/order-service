import { TOKENS, USER } from '@/constants';
import { useCallback, useEffect, useState } from 'react';
import { useActions } from '.';
import { getLocalStorage } from '../utils';
import { useSelector } from './useSelector';

export function useBootstrap() {
	const { setUser, setAuth, setToken, logout } = useActions();
	const { isAuth } = useSelector(state => state.auth);
	const [isInitiated, setIsInitiated] = useState(true);

	const user = getLocalStorage(USER);
	const accessToken = getLocalStorage(TOKENS.accessToken);

	const setApp = useCallback(() => {
		if (accessToken) {
			setUser(user);
			setAuth(true);
			setToken(accessToken);
			setIsInitiated(false);
		} else {
			setIsInitiated(false);
			logout();
		}
	}, [accessToken, setUser, setAuth, setToken, logout, user]);

	useEffect(() => {
		const appConfig = () => {
			try {
				setApp();
			} catch (error) {
				// addNotification(error);
				console.log(error);
			}
		};

		appConfig();
	}, [setApp]);

	return { isAuth, isInitiated };
}
