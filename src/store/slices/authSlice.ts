import { ACCESS_TOKEN } from "@/constants";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface AuthState {
  accessToken: string | null;
}

const initialState: AuthState = {
  accessToken: localStorage.getItem(ACCESS_TOKEN),
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setAccessToken: (state, action: PayloadAction<{ token: string; callback?: () => void }>) => {
      state.accessToken = action.payload.token;
      localStorage.setItem(ACCESS_TOKEN, action.payload.token);

      // Gọi callback sau khi lưu token
      if (action.payload.callback) {
        action.payload.callback();
      }
    },
    clearAccessToken: (state) => {
      state.accessToken = null;
      localStorage.removeItem(ACCESS_TOKEN);
    },
  },
});

export const { setAccessToken, clearAccessToken } = authSlice.actions;
export const authReducer = authSlice.reducer;
