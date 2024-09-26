import { ROUTES } from '@/constants';
import { Navigate, Outlet } from 'react-router-dom';
import { AuthProps } from './utils';

export const Public = ({ isAuth }: AuthProps) => (isAuth ? <Navigate to={ROUTES.DASHBOARD} /> : <Outlet />);
