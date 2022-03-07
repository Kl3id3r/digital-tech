import { AxiosRequestConfig } from 'axios'

export interface RequestOptionsType extends AxiosRequestConfig {
  authRequire?: boolean
}

export interface paramsPagination {
  readonly offset?: number | string
  readonly limit?: number | string
}
