import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import authServices from '../services/authServices';

const storedUser = localStorage.getItem('user');
const user: User | null = storedUser ? JSON.parse(storedUser) : null;

// Register user
export const registerUser = createAsyncThunk<User, SignupInputs, { rejectValue: any }>('auth/register', async (user, { rejectWithValue }) => {
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
export const loginUser = createAsyncThunk<User, LoginInputs, {rejectValue: any}>('auth/login', async (user, { rejectWithValue }) => {
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

export const getMe = createAsyncThunk<User, string, { rejectValue: any }>('auth/getMe', async (token: string, { rejectWithValue }) => {
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

const initialState: AuthState = {
  user: user,
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: ''
};

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
    .addCase(registerUser.fulfilled, (state, actions) => {
      state.isLoading = false
      state.isSuccess = true
      state.user = actions.payload
    })
    .addCase(registerUser.rejected, (state, action) => {
      state.isLoading = false
      state.isError = true
      state.message = action.payload
      state.user = null
    })
    .addCase(loginUser.pending, (state) => {
      state.isLoading = true
    })
    .addCase(loginUser.fulfilled, (state, actions) => {
      state.isLoading = false
      state.isSuccess = true
      state.user = actions.payload
    })
    .addCase(loginUser.rejected, (state, action) => {
      state.isLoading = false
      state.isError = true
      state.message = action.payload
      state.user = null
    })
    .addCase(logout.fulfilled, (state) => {
      state.user = null
    })
  }
});

export const { reset, updateUserInfo } = authSlice.actions;
export default authSlice.reducer