import axios from "axios";

const EndPoint = "http://192.168.1.70:5005";

//const EndPoint = "http://ec2-3-80-196-60.compute-1.amazonaws.com:8080";


const Api = axios.create({
  timeout: 1000000,
  baseURL: EndPoint,
});

Api.defaults.headers.post["Content-Type"] = "application/json;charset=utf-8";
Api.defaults.headers.post["Access-Control-Allow-Origin"] = "*";

Api.interceptors.request.use(
  (config) => {
    // const token = store?.getState()?.AuthLogin?.data?.token;
    // if (token !== null) {
    //   config.headers = {
    //     Authorization: `Bearer ${token}`,
    //   };
    // }
    return config;
  },
  (error) => Promise.reject(error)
);

Api.interceptors.response.use(
  (response) => response,
  (error) => Promise.reject(error)
);
export default Api;
