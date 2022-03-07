// @Api
import API from "./api";
import { RequestOptionsType } from "../types/IApi";

/**
 * Obtener headers
 * @function getHeaders
 * @param authRequired boolean
 * @returns headers
 */
const getHeaders = (authRequired: boolean) => {
  return {};
};

type AxiosResult<T> = {
  data?: T;
  error?: any;
  code?: string;
  status?: number | string;
};

/**
 * Función genérica para comunicarse con la API
 * @param url: string
 * @param options: RequestOptionsType
 * @returns Promise: <AxiosResult<T>>
 */
export const request = async <T = any>(
  url: string,
  options: RequestOptionsType = {}
): Promise<AxiosResult<T>> => {
  const {
    method = "get",
    data = {},
    authRequire = false,
    params,
    headers = {},
  } = options;
  try {
    const response = await API.request<T>({
      url,
      params,
      method,
      data,
      headers: { ...getHeaders(authRequire), ...headers },
    });

    return { data: (response as any).data, error: false };
  } catch (error: any) {
    if (error.response) {
      return {
        code: "HTTP_ERROR",
        status: error.response.status,
        data: error.response.data,
        error,
      };
    }
    return {
      error: {
        code: "CONNECTION",
        error,
      },
    };
  }
};
