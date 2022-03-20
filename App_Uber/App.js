import React from "react";
import { Provider } from 'react-redux';
import { KeyboardAvoidingView } from 'react-native';
import Login from './src/Vistas/login';
import RegistrarUsuario from "./src/Vistas/RegistrarUsuarios";
import { store } from './src/Store/store';

import MenuNavegacion from "./src/Navegacion/MenuNavegacion";

export default function App() {
  return (

    <Provider store={store}>
      <KeyboardAvoidingView style={{flex: 1}}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        keyboardVerticalOffset={Platform.OS === "ios" ? -64 : -67}
      >
      <MenuNavegacion />
      </KeyboardAvoidingView>
      
    </Provider>

  );
}


