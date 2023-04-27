import axios from "axios";
  // baseURL: "https://cookingrecipes-serveer.herokuapp.com",

export const axiosInstance = axios.create({
  baseURL: "http://localhost:5000"
});

// Add a request interceptor
axiosInstance.interceptors.request.use(
  function (config) {
    return config;
  },
  function (error) {
    console.log(error,"......>")
    return Promise.reject(error);
  }
);

// Add a response interceptor
axiosInstance.interceptors.response.use(
  function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    // console.log(response)
    return response;
  },
  function (error) {
    console.log(error,".......2>")
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    // Show ERROR Handler Message
    return Promise.reject(error);
  }
);
