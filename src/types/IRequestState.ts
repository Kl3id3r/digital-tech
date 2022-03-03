/**
 * @method interface IRequestState
 * @param loading: {boolean} Estado de carga de la peticion
 * @param success: {boolean} Estado de respuesta de la peticion
 * @param serverErrors: {boolean} Estado de respuesta de errores de la petición
 * @param errorMessage: {string | null} Mensaje errores posibles
 */

export interface IRequestState {
  loading: boolean;
  success: boolean;
  serverErrors: boolean;
  errorMessage: string | null;
}
