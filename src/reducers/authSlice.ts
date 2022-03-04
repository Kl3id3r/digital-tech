// @Vendors
// import jwt from "jsonwebtoken";

import {
  createAsyncThunk,
  createEntityAdapter,
  createSlice,
} from "@reduxjs/toolkit";

// @Types
import { IAuth } from "../types/IAuth";
import { IUser } from "../types/IUser";
import { IAction } from "../types/IAction";

import { LOCAL_KEY } from "../config/contants";
// import { Login } from "api/requests/AuthRequest";
import { removeItemLocal, searchItemLocal, setItemLocal } from "../utils";

// Estado inicial del reducer
const PREFIX = "auth";
const authAdapter = createEntityAdapter<IAuth>({});

const initialState: IAuth = {
  isAuthenticated: true,
  user: {
    _id: "",
    name: "",
    username: "",
    surname: "",
    avatar: "",
  },
  login: {
    loading: false,
    errorMessage: null,
    serverErrors: false,
    success: false,
  },
};

/**
 * Consultar usuario para login
 * @function middleware fetchAuthLogin
 */
export const fetchAuthLogin = createAsyncThunk(
  `${PREFIX}/login`,
  async (user: IUser) => {
    const { error, data } = /*await Login(user) CAMBIAR A LA PETICION*/ {
      data: "some",
      error: undefined,
    };
    if (error) {
      throw Error("Email o contraseña incorrectos.");
    }
    setItemLocal(LOCAL_KEY, data);
    return data;
  }
);

/**
 * Cerrar sesión y eliminar localStorage
 * @function middleware fetchAuthLogout
 */
export const fetchAuthLogout = createAsyncThunk(`${PREFIX}/logout`, () =>
  removeItemLocal(LOCAL_KEY)
);

/**
 * Recuperar datos de usaurio al recargar navegador
 * @function middleware browserReload
 */
export const browserReload = createAsyncThunk(`${PREFIX}/browserReload`, () => {
  const access_app = searchItemLocal(LOCAL_KEY);

  // console.log(jwt);
  if (access_app) {
    
    // const token: any = jwt.decode(
    //   (access_app as { access_token: string })?.access_token
    // );
    // Verificar tiempo de expiración en milisegundos para finalizar la sesión
    // if (token?.exp * 1000 < Date.now()) {
    //   removeItemLocal(LOCAL_KEY);
    //   throw Error(`Sesión expirada`);
    // }
    return access_app;
  }
  throw Error(`Sesión expirada`);
});

/**
 * @title Slice inicial para el store de "Auth"
 */
export const authSlice = createSlice({
  name: PREFIX,
  initialState: authAdapter.getInitialState(initialState),
  reducers: {
    authTrue(state) {
      state.isAuthenticated = true;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAuthLogin.pending, (state) => {
        state.login.serverErrors = false;
        state.login.loading = true;
      })
      .addCase(fetchAuthLogin.fulfilled, (state) => {
        state.login.loading = false;
        state.isAuthenticated = true;
        state.login.serverErrors = false;
      })
      .addCase(fetchAuthLogin.rejected, (state, action: IAction) => {
        state.login.loading = false;
        state.login.errorMessage = (action as any)?.error?.message;
        state.login.serverErrors = true;
      })
      .addCase(fetchAuthLogout.fulfilled, (state) => {
        state.login.loading = false;
        state.isAuthenticated = false;
        state.user = initialState.user;
      });

    // .addCase(browserReload.rejected, (state) => {
    //   state.login.loading = false;
    //   state.isAuthenticated = false;
    // })
    // .addCase(browserReload.fulfilled, (state, action: IAction) => {
    //   state.login.loading = false;
    //   state.isAuthenticated = action.payload ? true : false;
    // });
  },
});

// Actions
export const { authTrue } = authSlice.actions;

// Reducer
export default authSlice.reducer;
