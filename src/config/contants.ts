/**
 * @title llave para token en localStorage
 */
export const LOCAL_KEY = "s0m3_l0c4lK3yDigyt3l";
/**
 * @title Puerto del servidor
 */
export const API_PORT = process.env.API_PORT || 8000;

/**
 * @title Url del servidor
 */
export const API_URL =
  process.env.NODE_ENV === "production"
    ? `${process.env.API_URL}:${API_PORT}`
    : `http://localhost:${API_PORT}`;
