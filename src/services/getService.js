import { api } from "./axiosConfig";

export const getService = async (endpoint) => {
  return new Promise((resolve) => {
    api
      .get(endpoint)
      .then((response) => resolve(response.data))
      .catch((error) => console.log('error: ', error));
  });
};
