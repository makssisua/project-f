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
  token: string;
};

interface GlobalState {
  auth: AuthState
};

interface AuthState {
  user: User | null
  isError: boolean;
  isSuccess: boolean;
  isLoading: boolean;
  message: string;
};