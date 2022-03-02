/**
 * Convertir primera letra a mayúsculuas
 * @function upperFirst
 * @param text
 * @returns string
 */
export const upperFirst = (text: string): string =>
  text.charAt(0).toLocaleUpperCase() + text.slice(1);
