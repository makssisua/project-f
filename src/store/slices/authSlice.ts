import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit'
import authServices from '../../services/authServices';

interface AuthState {
  user: UserData | null
  isError: boolean;
  isSuccess: boolean;
  isLoading: boolean;
  message: string;
};

const storedUser = localStorage.getItem('user');
const user: UserData | null = storedUser ? JSON.parse(storedUser) : null;

const initialState: AuthState = {
  user: user,
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: ''
};

// Register user
export const registerUser: any = createAsyncThunk('auth/register', async (user: userRegistration, { rejectWithValue }) => {
  try {
    return await authServices.register(user)
  } catch (error: any) {
    const message =
      (error.response &&
        error.response.data &&
        error.response.data.message) ||
      error.message ||
      error.toString();
    return rejectWithValue(message);
  }
});

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    reset: (state: AuthState) => {
      state.isError = false
      state.isLoading = false
      state.isSuccess = false
      state.message = ''
    }
  },
  extraReducers: (builder) => {
    builder
    .addCase(registerUser.pending, (state) => {
      state.isLoading = true
    })
    .addCase(registerUser.fulfilled, (state, actions: any) => {
      state.isLoading = false
      state.isSuccess = true
      state.user = actions.payload
    })
    .addCase(registerUser.rejected, (state, actions: any) => {
      state.isLoading = false
      state.isError = true
      state.message = actions.payload
      state.user = null
    })
  }
});

export const { reset } = authSlice.actions;
export default authSlice.reducer