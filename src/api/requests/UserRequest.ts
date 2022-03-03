import { USER } from './../endpoints'

import { request } from './../request'

export const UpdatePhoto = async (data: any) => {
  return request(USER.UPDATE_PHOTO, {
    authRequire: true,
    method: 'post',
    data,
  })
}

export const Me = async () => {
  return request(USER.ME, {
    authRequire: true,
    method: 'get',
  })
}
