/// <reference types="react-scripts" />


interface LoginInputs {
  email: string;
  password: string;
};

interface SignupInputs extends LoginInputs {
  firstName: string;
  lastName: string;
  confirmPassword?: string | undefined;
};

interface SignupValidation extends SignupInputs {
  confirmPassword: string | undefined;
}

interface User {
  __id: string;
  firstName: string;
  lastName: string
  email: string;
  role: string;
  paymentStatus: string;
  token: string;
};

interface AddTrainingInputs {
  name: string,
  startDay: string,
  videoUrl: string,
  description: string
}

interface Training extends AddTrainingInputs {
  __id: sting,
 
}

interface TrainingsState {
  trainings: Training[];
  isError: boolean;
  isSuccess: boolean;
  isLoading: boolean;
  message: string;
};

interface GlobalState {
  auth: AuthState,
  trainings: TrainingsState
};

interface AuthState {
  user: User | null
  isError: boolean;
  isSuccess: boolean;
  isLoading: boolean;
  message: string;
};