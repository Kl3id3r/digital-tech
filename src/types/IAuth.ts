// @Types
import { IUser } from "./IUser";
import { IRequestState } from "./IRequestState";

/**
 * @method interface IAuth
 * @param isAuthenticated: {boolean} Verificar si el usuario esta autenticado
 * @param user: {IUser} usuario logueado
 * @param isAuthenticated: {boolean} Verificar si el usuario esta autenticado
 * @param isAuthenticated: {boolean} Verificar si el usuario esta autenticado
 * @param isAuthenticated: {boolean} Verificar si el usuario esta autenticado
 */

export interface IAuth {
  isAuthenticated: boolean;
  user: IUser;
  login: IRequestState;
}
