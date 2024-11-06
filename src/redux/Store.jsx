import { configureStore } from '@reduxjs/toolkit';
import loginAttemptsReducer from './LoginAttemptsSlice';
import authReducer from './AuthSlice';

const store = configureStore({
  reducer: {
    loginAttempts: loginAttemptsReducer,
    auth: authReducer,
  },
});

export default store;
