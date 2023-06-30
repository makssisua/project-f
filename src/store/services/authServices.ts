/* eslint-disable react-hooks/rules-of-hooks */
import axios, { AxiosResponse } from "axios";
import { useAppDispatch } from "../hooks";
import { updateUserInfo } from "../slices/authSlice";

const API_URL = '/api/users';

// Register user
const register = async (userDate: SignupInputs): Promise<User> => {
  const response: AxiosResponse<User> = await axios.post(API_URL, userDate);

  if (response.data) {
    localStorage.setItem('user', JSON.stringify(response.data));
  };

  return response.data
};

// Login user
const login = async (userDate: LoginInputs): Promise<User> => {
  const response: AxiosResponse<User> = await axios.post(API_URL + '/login', userDate);

  if (response.data) {
    localStorage.setItem('user', JSON.stringify(response.data));
  };

  return response.data
};

const logout = async () => {
  localStorage.removeItem('user');
};

const getMe = async (token: string) => {
  const dispatch = useAppDispatch();
  const localUserInfo = JSON.parse(localStorage.getItem('user') || '');
  const response: AxiosResponse<User> = await axios.get(API_URL + '/me' , {
    headers: {
      'Authorization': 'Bearer ' + token
    }
  });

  const localUserRole = localUserInfo.role;
  const serverUserRole = response.data.role;

  const validUser = {
    ...localUserInfo,
    role: serverUserRole
  }

  if (localUserRole !== serverUserRole) {
    localStorage.setItem('user', JSON.stringify(validUser));
    dispatch(updateUserInfo(validUser))
  };

  return response.data
};

const authServices = {
  register,
  logout,
  login,
  getMe
}

export default authServices