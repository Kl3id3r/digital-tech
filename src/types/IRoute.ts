// @Vendors
import React from "react";

/**
 * @method interface IRoute
 * @param path: {string} Url de la ruta
 * @param component: {string | React.Component} Nombre de componente o Componente a renderizar
 * @param title: {string} Titulo de la ruta, puede ser un alias
 */
export interface IRoute {
  path: string;
  component: string | React.Component;
  title: string;
}
