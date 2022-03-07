// @Types
import { IRoute } from "../types/IRoute";

// @Views - @Components

// @Prefix
export const PREFIX_LOGIN = "/login"; // Pantalla iniciar sesión
export const PREFIX_DASHBOARD = "/dashboard"; // Pantalla principal
export const PREFIX_PERFIL = "/perfil"; // Pantalla principal del perfil

export const navigation: IRoute[] = [
  {
    path: PREFIX_LOGIN,
    component: "Login",
    title: "Iniciar sesión",
  },
  {
    path: PREFIX_DASHBOARD,
    component: "Dashboard",
    title: "Digital Tech",
  },
  {
    path: PREFIX_DASHBOARD + PREFIX_PERFIL,
    component: "Profiles",
    title: "Perfil {{username}}",
  },
];
