import { AppActions } from '../app/slice';
import { AuthSliceActions } from '../auth/slice';

export const AllActions = {
	...AppActions,
	...AuthSliceActions,
};
