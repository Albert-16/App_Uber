import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack'
import Login from './../Vistas/login';
import RegistroUsuario from './../Vistas/RegistrarUsuarios';
import Bienvenida from './../Vistas/Menu';
import RecuperarCuenta from './../Vistas/RecuperarCuenta';
import RestablecerContraseña from './../Vistas/RestablecerContraseña';
import MenuPrincipal from './../Vistas/MenuPrincipal';
import MapViewViajes from './../Vistas/MapView';
import MiPerfil from './../Vistas/MiPerfil';
import { Colors } from './../Componentes/style';
import TarjetaCredito from './../Vistas/TarjetaCredito';
import "react-native-gesture-handler";
import ConfirmarViaje from '../Vistas/ConfirmarViaje';
import EditarPerfil from '../Vistas/EditarPerfil';
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
                <Stack.Screen name="Login" component={Login}
                    options={{
                        title: ""
                    }}
                />
                <Stack.Screen name="Registro Usuario" component={RegistroUsuario}
                    options={{
                        title: ""
                    }}
                />

                <Stack.Screen name="Pago" component={TarjetaCredito}
                    options={{
                        title: ""
                    }}
                />

                <Stack.Screen name="ConfirmarViaje" component={ConfirmarViaje}
                    options={{
                        title: ""
                    }}
                />

                <Stack.Screen name="Perfil" component={MiPerfil}
                    options={{
                        title: ""
                    }}
                />



                <Stack.Screen name="MapView" component={MapViewViajes}
                    options={{
                        title: "#",
                        headerShown: false

                    }}
                />
                <Stack.Screen name="Inicio" component={Bienvenida}
                    options={{
                        title: ""
                    }}
                />

                <Stack.Screen name="EditarPerfil" component={EditarPerfil}
                    options={{
                        title: ""
                    }}
                />

                <Stack.Screen name="Recuperar Cuenta" component={RecuperarCuenta}
                    options={{
                        title: ""
                    }}
                />
                <Stack.Screen name="Restablecer Contraseña" component={RestablecerContraseña}
                    options={{
                        title: ""
                    }}
                />
                <Stack.Screen name="Menú Principal" component={MenuPrincipal}
                    options={{
                        title: ""
                    }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default MenuNavegacion;