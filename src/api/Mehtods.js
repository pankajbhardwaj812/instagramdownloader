import { axiosInterceptor } from "./Interceptor";

export const getApi = async (props) => {
  try {
    const response = await axiosInterceptor.get(props);
    return response.data;
  } catch (e) {
    if (e?.response?.status === 400) return e?.response?.data;
    return { ...e, status: 500 };
  }
};
