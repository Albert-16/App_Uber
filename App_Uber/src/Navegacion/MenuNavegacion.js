import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack'
import Login from './../Vistas/login';
import RegistroUsuario from './../Vistas/RegistrarUsuarios';
import Bienvenida from './../Vistas/Menu';
import { Colors } from './../Componentes/style';
import "react-native-gesture-handler";
const { color5, color6, color1, color2 } = Colors;

const Stack = createStackNavigator();

const MenuNavegacion = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{
                headerStyled: {
                    backgroundColor: 'transparent'
                },
                headerTintColor: color1,
                headerTransparent: true,
                headerBackTitle: '',
                headerLeftContainerStyle: {
                    paddingLeft: 20
                },
            }} initialRouteName="Login" >
                <Stack.Screen name="Login" component={Login} />
                <Stack.Screen name="RegistroUsuario" component={RegistroUsuario} />
                <Stack.Screen name="Bienvenida" component={Bienvenida} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default MenuNavegacion;