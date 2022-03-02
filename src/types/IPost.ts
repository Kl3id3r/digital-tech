// @Enums
import { statusEnum } from "../enums/statusEnum";

// @Types
import { IUser } from "./IUser";

/**
 * Interfaz para post individual
 * @method IPost
 * @param author: {IUser} Usuario creador de la publicación
 * @param create_at: {Date} Fecha de creación de la publicación
 * @param message: {string} Texto a compartir o pie de la imagen
 * @param status: {statusEnum} Representa el estado de la publicación
 * @param location: {string} Lugar del cual se creó la publicación
 * @param image: {string} Url con la imagen que se desea publicar
 * @param likes: {IUser[]}  Lista de usuarios a los que les ha gustado la publicación(opcional).
 */
export interface IPost {
  author: IUser;
  create_at: Date;
  message: string;
  status: statusEnum;
  location: string;
  image?: string;
  likes?: Array<IUser>;
}
