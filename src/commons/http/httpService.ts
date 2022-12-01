import axios from "axios";
import { ConfigEnv } from "../env";

const axiosInstance = axios.create({
    baseURL: ConfigEnv.libraryApiUrlBase
});

export const get = async <T>(url: string): Promise<T> => {
    const response = await axiosInstance.get<T>(url)
    return response.data
}

export const post =async <T>(url: string, body: T): Promise<void> => {
    await axiosInstance.post<T>(url, body)
}