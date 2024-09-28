// import { addNotification } from '@/libs/utils/addNotification';
import { isRejectedWithValue, Middleware } from '@reduxjs/toolkit';

export const errorHandlerMiddleware: Middleware = () => (next) => (action) => {
  if (isRejectedWithValue(action)) {
    // addNotification(action.error.message);
  }
  return next(action);
};
