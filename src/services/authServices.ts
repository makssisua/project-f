import axios, { AxiosResponse } from "axios";

const API_URL = '/api/users';

// Register user
const register = async (userDate: userRegistration): Promise<UserData | undefined> => {
  const response: AxiosResponse<UserData> = await axios.post(API_URL, userDate);

  if (response.data) {
    localStorage.setItem('user', JSON.stringify(response.data));
  };

  return response.data
};

const authServices = {
  register
}

export default authServices