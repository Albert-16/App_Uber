import React from "react";
import Vehiculos from "./src/Vistas/Vehiculos";
import { StyleSheet, Text, View } from 'react-native';
import Login from './src/Vistas/login';
import RegistrarUsuario from "./src/Vistas/RegistrarUsuarios";
import Viajes from './src/Componentes/viewViajes';
import Marcas from './src/Componentes/viewMarcas';
import Modelos from './src/Componentes/viewModelos';
import Menu from "./src/Vistas/Menu";
import Ciudades from './src/Componentes/viewCiudades.js'

import MenuNavegacion from "./src/Navegacion/MenuNavegacion";

export default function App() {
  return (<MenuNavegacion />);
}


