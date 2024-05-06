import { UserApi, axiosInstance } from "../apis";

export const userApi = new UserApi(axiosInstance);
