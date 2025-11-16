import { AxiosError, AxiosResponse } from "axios";

function transformInterceptorSuccessResponse(res: AxiosResponse) {
  res.data = {
    success: true,
    data: res.data,
    error: null,
  };

  return res;
}

function transformInterceptorErrorResponse(err: AxiosError) {
  const error = err.response?.data || { message: err.message };

  return Promise.reject(error);
}

// axios.interceptors.response.use(
//   res => res,
//   async (error) => {
//     if (error.response?.status === 401) {
//       // Try refreshing
//       try {
//         await axios.post("/api/auth/revalidate");
//         // Retry original request
//         return axios(error.config);
//       } catch (refreshError) {
//         // Refresh failed → logout
//         await axios.post("/api/auth/logout");
//         window.location.href = "/login";
//       }
//     }
//     return Promise.reject(error);
//   }
// );

export const axiosUtils = {
  transformInterceptorSuccessResponse,
  transformInterceptorErrorResponse,
}