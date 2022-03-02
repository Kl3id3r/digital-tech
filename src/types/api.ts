import { AxiosRequestConfig } from 'axios'

export interface RequestOptionsType extends AxiosRequestConfig {
  authRequire?: boolean
}

export interface paramsPagination {
  readonly offset?: number | string
  readonly limit?: number | string
}

export interface paramsOrdsRequest extends paramsPagination {
  readonly fromDate?: Date | string
  readonly toDate?: Date | string
  readonly year?: Date | string
  readonly status?: string
}
