import React from "react";
import { Provider } from 'react-redux';
import { StyleSheet, Text, View } from 'react-native';
import Login from './src/Vistas/login';
import RegistrarUsuario from "./src/Vistas/RegistrarUsuarios";
import { store } from './src/Store/store';

import MenuNavegacion from "./src/Navegacion/MenuNavegacion";

export default function App() {
  return (

    <Provider store={store}>
      <MenuNavegacion />
    </Provider>

  );
}


