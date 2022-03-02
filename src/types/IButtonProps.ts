/**
 * Interfaz para listado de posts
 * @method interface IButtonProps
 * @param type: {"button" | "submit" | "reset" | undefined}
 * @param children: {JSX.Element}
 */
export interface IButtonProps {
  type?: "button" | "submit" | "reset" | undefined;
  children?: JSX.Element | string;
}
