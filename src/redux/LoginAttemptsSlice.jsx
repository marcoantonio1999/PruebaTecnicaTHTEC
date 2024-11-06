import { createSlice } from '@reduxjs/toolkit';

const MAX_ATTEMPTS = 3;

const loginAttemptsSlice = createSlice({
  name: 'loginAttempts',
  initialState: {
    attempts: 0,
    isLocked: false,
  },
  reducers: {
    incrementAttempts: (state) => {
      const newAttempts = state.attempts + 1;
      state.attempts = newAttempts;
      if (newAttempts >= MAX_ATTEMPTS) {
        state.isLocked = true;
        console.log("Contraseña incorrecta. Cuenta bloqueada.");
      }
    },
    resetAttempts: (state) => {
      state.attempts = 0;
      state.isLocked = false;
    },
  },
});

export const { incrementAttempts, resetAttempts } = loginAttemptsSlice.actions;
export default loginAttemptsSlice.reducer;
