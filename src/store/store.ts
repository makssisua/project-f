import { configureStore } from '@reduxjs/toolkit';
import authReducer from './slices/authSlice'
import trainingsReducer from './slices/trainingsSlice'

export const store = configureStore({
 reducer: {
  auth: authReducer,
  trainings: trainingsReducer
 },
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;