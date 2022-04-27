import { axiosInstance } from "../../network/axios";

export const login = async (user) => await axiosInstance.post("/user/login", user);