// @Vendors
import axios, { AxiosInstance } from "axios";

// @Config
import { API_URL } from "../config";

const baseURL = API_URL;

/**
 * @title Definición de la conexión con la API
 */
const API: AxiosInstance = axios.create({
  baseURL,
});

export default API;
