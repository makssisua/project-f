import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import authServices from '../../services/authServices';

const storedUser = localStorage.getItem('user');
const user: User | null = storedUser ? JSON.parse(storedUser) : null;

const initialState: AuthState = {
  user: user,
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: ''
};

// Register user
export const registerUser = createAsyncThunk('auth/register', async (user: SignupInputs, { rejectWithValue }) => {
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

// Login user
export const loginUser = createAsyncThunk('auth/login', async (user: LoginInputs, { rejectWithValue }) => {
  try {
    return await authServices.login(user)
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

export const logout = createAsyncThunk('auth/logout', async () => {
  return authServices.logout();
});

export const getMe = createAsyncThunk('auth/getMe', async (token: string, { rejectWithValue }) => {
  try {
    return await authServices.getMe(token);
  } catch (error: any) {
    localStorage.removeItem('user');
    const message =
      (error.response &&
        error.response.data &&
        error.response.data.message) ||
      error.message ||
      error.toString();

    return rejectWithValue(message)
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
    },
    updateUserInfo: (state: AuthState, action) => {
      state.user = action.payload
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
    .addCase(registerUser.rejected, (state, action: any) => {
      state.isLoading = false
      state.isError = true
      state.message = action.payload
      state.user = null
    })
    .addCase(loginUser.pending, (state) => {
      state.isLoading = true
    })
    .addCase(loginUser.fulfilled, (state, actions: any) => {
      state.isLoading = false
      state.isSuccess = true
      state.user = actions.payload
    })
    .addCase(loginUser.rejected, (state, action: any) => {
      state.isLoading = false
      state.isError = true
      state.message = action.payload
      state.user = null
    })
    .addCase(logout.fulfilled, (state, actions: any) => {
      state.user = null
    })
  }
});

export const { reset, updateUserInfo } = authSlice.actions;
export default authSlice.reducer