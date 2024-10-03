import { AppReducer } from '../app/slice';
import { AuthReducer } from '../auth/slice';
import { productsApi } from '../products/features';

export const Reducers = {
	app: AppReducer,
	auth: AuthReducer,
	[productsApi.reducerPath]: productsApi.reducer,
};
