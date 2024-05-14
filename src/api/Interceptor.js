import axios from "axios";

const baseurl="https://integral-blessing-0e798f821f.strapiapp.com/"

 export const axiosInterceptor = axios.create({
    timeout: 25000,
    baseURL: baseurl,
  });

axiosInterceptor.interceptors.request.use(
  function (config) {
    // Do something before request is sent
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

axiosInterceptor.interceptors.response.use(
  function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response;
  },
  function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
  }
);
