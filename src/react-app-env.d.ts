/// <reference types="react-scripts" />
interface LoginInputs {
  email: string,
  password: string,
};

interface SignupInputs extends LoginInputs {
  firstName: string;
  lastName: string;
  confirmPassword: string | undefined;
};
