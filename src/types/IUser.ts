/**
 * Interfaz para datos del usuario
 * @method interface IUser
 * @param name: {string} Nombre del usuario
 * @param username: {string} Nombre del usuario, para su fácil identificación
 * @param surname: {string}
 * @param avatar: {string} Url de la imagen que representa al usuario (opcional)
 */
export interface IUser {
  name: string;
  username: string;
  surname: string;
  avatar?: string;
}
