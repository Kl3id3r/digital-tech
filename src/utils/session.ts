/**
 * Obtener item del localStorage (Almacenamiento local)
 * @function searchItemLocal
 * @param key: string
 * @returns Item: any | null
 */
export const searchItemLocal = (key: string): unknown => {
  const item = localStorage.getItem(key);
  return !item ? null : JSON.parse(item);
};

/**
 * Agregar Item al localStorage (Almacenamiento local)
 * @function setItemLocal
 * @param key: string
 * @param item: any
 * @returns Item: any | false
 */
export const setItemLocal = (key: string, item: any): unknown | boolean => {
  localStorage.setItem(key, JSON.stringify(item));
  const newIitem = searchItemLocal(key);
  return newIitem ?? false;
};

/**
 * Quitar item del localStorage (Almacenamiento local)
 * @function removeItemLocal
 * @param key: string
 * @returns Item: any | null
 */
export const removeItemLocal = (key: string): unknown | boolean => {
  const searchItem = searchItemLocal(key);
  if (searchItem) {
    localStorage.removeItem(key);
    return searchItem;
  }
  return false;
};
