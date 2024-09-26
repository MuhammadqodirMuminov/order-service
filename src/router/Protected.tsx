import { ROUTES } from '@/constants';
import { Navigate, Outlet } from 'react-router-dom';
import { AuthProps } from './utils';

export const Protected = ({ isAuth }: AuthProps) => (isAuth ? <Outlet /> : <Navigate to={ROUTES.LOGIN} />);
