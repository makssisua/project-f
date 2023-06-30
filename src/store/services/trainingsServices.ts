import axios, { AxiosResponse } from "axios";

const API_URL = '/api/trainings';

const add = async (trainingData: AddTrainingInputs) => {
  const response: AxiosResponse<Training> = await axios.post(API_URL, trainingData);

  console.log('res--->', response)

  return response.data
};

const trainingsServices = {
  add,
};

export default trainingsServices;