/// <reference types="react-scripts" />


interface LoginInputs {
  email: string;
  password: string;
};

interface SignupInputs extends LoginInputs {
  firstName: string;
  lastName: string;
  confirmPassword: string | undefined;
};

interface userRegistration {
  firstName: sting;
  lastName: sting;
  email: sting;
  password: sting;
}

interface User {
  _id: string;
  firstName: string;
  lastName: string
  email: string;
  role: string;
  paymentStatus: string;
};

interface UserData {
  __id: string;
  name: string;
  email: string;
  token: string;
};
