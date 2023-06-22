import axios, { AxiosResponse } from "axios";

const API_URL = '/api/users';

// Register user
const register = async (userDate: SignupInputs): Promise<User | undefined> => {
  const response: AxiosResponse<User> = await axios.post(API_URL, userDate);

  if (response.data) {
    localStorage.setItem('user', JSON.stringify(response.data));
  };

  return response.data
};

const logout = async () => {
  localStorage.removeItem('user');
}

const authServices = {
  register,
  logout
}

export default authServices