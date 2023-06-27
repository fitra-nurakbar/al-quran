import axios from "axios";

const axiosInstance = axios.create({
  baseURL: process.env.BASE_URL as string || 'https://api.quran.gading.dev',
});

export { axiosInstance };
