/**
 * Interfaz para acciones del reducer del store
 * @method interface IAction
 * @param type: {string};
 * @param payload?: {unknown};
 * @param error?: {unknown};
 */
export type IAction = {
  type: string;
  payload?: unknown;
  error?: unknown;
};
