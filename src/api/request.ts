// Vendors
import jwt from "jsonwebtoken";

import API from "./api";
import { RequestOptionsType } from "../types/IApi";

// Utils
import { removeItemLocal, searchItemLocal } from "../utils";

// State
// import { expiredAuth } from "reducers/authSlice";
import { store } from "../store";

const localKey = "pandora_access_token";

/**
 * Obtener headers
 * @param authRequired boolean
 * @returns headers
 */
const getHeaders = (authRequired: boolean) => {
  if (authRequired) {
    const token: { access_token: string } = searchItemLocal(localKey) as {
      access_token: string;
    };
    const access_token: any = jwt.decode(token.access_token);

    if (access_token?.exp * 1000 < Date.now()) {
      // store.dispatch(expiredAuth());
      return removeItemLocal(localKey) as {};
    }
    return token ? { Authorization: `Bearer ${token.access_token}` } : {};
  }
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

    return { data: response.data, error: false };
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
