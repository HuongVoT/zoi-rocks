import { KudosApi, UserApi, axiosInstance } from "../apis";

export const userApi = new UserApi(axiosInstance);
export const kudosApi = new KudosApi(axiosInstance);
