import { errorHandlerMiddleware } from '@/middlewares';
import { configureStore } from '@reduxjs/toolkit';
import { Reducers } from './root';

export const store = configureStore({
	reducer: Reducers,
	devTools: true,
	middleware: getDefaultMiddleware => getDefaultMiddleware().concat(errorHandlerMiddleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
