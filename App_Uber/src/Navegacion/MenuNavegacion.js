import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack'
import Login from './../Vistas/login';
import RegistroUsuario from './../Vistas/RegistrarUsuarios';
import Bienvenida from './../Vistas/Menu';
import Vehiculos from "./../Vistas/Vehiculos";
import Viajes from './../Vistas/viewViajes';
import Marcas from './../Vistas/viewMarcas';
import Modelos from './../Vistas/viewModelos';
import Ciudades from './../Vistas/viewCiudades.js'
import RecuperarCuenta from './../Vistas/RecuperarCuenta';
import RestablecerContraseña from './../Vistas/RestablecerContraseña';
import MenuPrincipal from './../Vistas/MenuPrincipal';
import { Colors } from './../Componentes/style';
import "react-native-gesture-handler";
const { color5, color6, color1, color2 } = Colors;

const Stack = createStackNavigator();

const MenuNavegacion = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{
                headerStyled: {
                    backgroundColor: color2
                },
                headerTintColor: color5,
                headerTransparent: true,
                headerBackTitle: '',
                headerLeftContainerStyle: {
                    paddingLeft: 20
                },
            }} initialRouteName="Login" >
                <Stack.Screen name="Login" component={Login} />
                <Stack.Screen name="Registro Usuario" component={RegistroUsuario} />
                <Stack.Screen name="Inicio" component={Bienvenida} />
                <Stack.Screen name="Viajes" component={Viajes} />
                <Stack.Screen name="Vehículos" component={Vehiculos} />
                <Stack.Screen name="Marcas" component={Marcas} />
                <Stack.Screen name="Modelos" component={Modelos} />
                <Stack.Screen name="Ciudades" component={Ciudades} />
                <Stack.Screen name="Recuperar Cuenta" component={RecuperarCuenta} />
                <Stack.Screen name="Restablecer Contraseña" component={RestablecerContraseña} />
                <Stack.Screen name="Menú Principal" component={MenuPrincipal} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default MenuNavegacion;