import React from "react";
import { Provider } from 'react-redux';
import { KeyboardAvoidingView } from 'react-native';
import { store } from './src/Store/store';

import MenuNavegacion from "./src/Navegacion/MenuNavegacion";

export default function App() {
  return (

    <Provider store={store}>
      <KeyboardAvoidingView style={{flex: 1}}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        keyboardVerticalOffset={Platform.OS === "ios" ? -64 : -70}
      >
      <MenuNavegacion />
      </KeyboardAvoidingView>
      
    </Provider>

  );
}


