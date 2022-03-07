/**
 * @method interface IAppState
 */
export type IAppState = {
  modalOpen: boolean;
  modalContent: string | React.ComponentElement<any, any> | null;
};
