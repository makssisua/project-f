import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import trainingsServices from '../services/trainingsServices';

export const addTraining = createAsyncThunk<Training, AddTrainingInputs, { rejectValue: any }>('trainings/add', async (training, { rejectWithValue }) => {
  try {
    return await trainingsServices.add(training)
  } catch (error: any) {
    const message =
      (error.response &&
        error.response.data &&
        error.response.data.message) ||
      error.message ||
      error.toString();
    return rejectWithValue(message);
  }
})

const initialState: TrainingsState = {
  trainings: [],
  isError: false,
  isLoading: false,
  isSuccess: false,
  message: ''
};

const trainingsSlice = createSlice({
  name: 'trainings',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
    .addCase(addTraining.pending, (state) => {
      state.isLoading = true
    })
    .addCase(addTraining.fulfilled, (state, actions) => {
      state.isLoading = false
      state.isSuccess = true
      state.trainings = [...state.trainings, actions.payload]
    })
    .addCase(addTraining.rejected, (state, action) => {
      state.isLoading = false
      state.isError = true
      state.message = action.payload
    })
  }
});

export default trainingsSlice.reducer;