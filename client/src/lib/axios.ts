import axios from 'axios';
import { BASE_URL } from '@/lib/const';

export const axiosInstance = axios.create({
  baseURL: BASE_URL
});