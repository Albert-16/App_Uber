import React, { useState, ScrollView, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Octicons, Ionicons } from '@expo/vector-icons';
import { Formik } from 'formik';
import { Alert, SectionList, TextInputBase, View } from 'react-native';
import AsyncStorage from "@react-native-async-storage/async-storage";


import {
    StyledContainer,
    InnerContainer,
    PageLogo,
    PageTitulo,
    Subtitle,
    StyledFormArea,
    LeftIcon,
    StyledInputLabel,
    StyledTextInput,
    RightIcon,
    Colors,
    StyledButton,
    ButtonText,
    MsgBox,
    Line,
    ExtraView,
    ExtraText,
    TextLink,
    TextLinkContent,
    StyledScroll
} from '../Componentes/style';

const { color2, color6, color5 } = Colors;

import { IP, EditarUsuario, PORT } from '@env';

const ModifcarUsario = ({navigation}) => {
    const [hidePassword, setHidePassword] = useState(true);
    const [hidePassword2, setHidePassword2] = useState(true);
    const [hidePasswordActual, setHidePasswordActual] = useState(true);
    const [Respuesta,setRespuesta] = useState([]);
    const presInicio = async () => {
        Alert.alert("Uber", "Hola");
    }

    const [Cliente, setCliente] = useState([]);
    useEffect(async () => {
        
        const cliente = JSON.parse(await AsyncStorage.getItem('Cliente'));
        setCliente(cliente);
      }, []);

    return (
        <StyledScroll>
            <StyledContainer>


                <StatusBar style="light" />
                <InnerContainer>

                    <PageTitulo>Modificar de Usuarios</PageTitulo>
                    
                    {Cliente?.id && (
                         <Formik
                         initialValues={
                             {
                                 dni: Cliente?.DNI,
                                 nombre_Usuario: Cliente?.Usuario,
                                 contraseniaActual:'',
                                 contrasenia: Cliente?.Contra,
                                 nombre: Cliente?.Nombre,
                                 apellido: Cliente?.Apellido,
                                 correo: Cliente?.Correo,
                                 telefono: Cliente?.Tel,
                                 confirmarContrasenia: Cliente?.Contra
                             }}
                         onSubmit={async (values) => {
                             try {
                                const token = await AsyncStorage.getItem('token');
                                 const Ruta = "http://" + IP + ":" + PORT + EditarUsuario + "id=" + Cliente?.id;
                               const Res =  await fetch(Ruta ,{
                                    method: 'PUT',
                                    headers: {
                                      Accept: 'application/json',
                                      'Content-Type': 'application/json',
                                      Authorization: 'Bearer ' + token
                                    },
                                    body: JSON.stringify(values)
                                  })
                                   
                                  const resJson = await Res.json();
                                  const data = resJson.Información;
                                  Alert.alert("Uber",resJson.Mensaje);
                                  if(resJson.Titulo == "Usuario Modificado")
                                  {
                                    const dataUsuario = JSON.stringify(data.Usuario);
                                    await AsyncStorage.setItem('Cliente', dataUsuario);
                                    navigation.navigate("Menú Principal");
                                  }
                              //  console.log(resJson);
                                 //console.log(values);
                                 
                             } catch (error) {
                                 console.log(error);
                                 Alert.alert("Error", "error: " + error.message);
                             }
 
                         }} >
                         {({ handleChange, handleBlur, handleSubmit, values }) => (
                             <StyledFormArea>
 
                                 <MyTextInput
                                     label="DNI"
                                     icon="credit-card"
                                     placeholder="Ingrese su DNI"
                                                                      
                                     placeholderTextColor={color5}
                                     onChangeText={handleChange('dni')}
                                     onBlur={handleBlur('dni')}
                                     values={values.dni}
                                     defaultValue={Cliente?.DNI}
 
                                 />
 
                                 <MyTextInput
                                     label="Usuario"
                                     icon="person"
                                     placeholder="Ingrese su Usuario"
                                     placeholderTextColor={color5}
                                     onChangeText={handleChange('nombre_Usuario')}
                                     onBlur={handleBlur('nombre_Usuario')}
                                     values={values.nombre_Usuario}
                                     defaultValue={Cliente?.Usuario}
                                 />
 
                                 <MyTextInput
                                     label="Nombre"
                                     icon="person"
                                     placeholder="Ingrese su Nombre"
                                     placeholderTextColor={color5}
                                     onChangeText={handleChange('nombre')}
                                     onBlur={handleBlur('nombre')}
                                     values={values.nombre}
                                     defaultValue={Cliente?.Nombre}
 
                                 />
 
                                 <MyTextInput
                                     label="Apellido"
                                     icon="person"
                                     placeholder="Ingrese su Apellido"
                                     defaultValue={Cliente?.Apellido}
                                     placeholderTextColor={color5}
                                     onChangeText={handleChange('apellido')}
                                     onBlur={handleBlur('apellido')}
                                     values={values.apellido}
 
                                 />
 
                                 <MyTextInput
                                     label="Correo Electrónico"
                                     icon="mail"
                                     placeholder="Ingrese su correo"
                                     placeholderTextColor={color5}
                                     onChangeText={handleChange('correo')}
                                     onBlur={handleBlur('correo')}
                                     values={values.correo}
                                     defaultValue={Cliente?.Correo}
 
                                 />
 
                                 <MyTextInput
                                     label="Teléfono"
                                     icon="device-mobile"
                                     placeholder="Ingrese su teléfono"
                                     defaultValue={Cliente?.Tel}
                                     placeholderTextColor={color5}
                                     onChangeText={handleChange('telefono')}
                                     onBlur={handleBlur('telefono')}
                                     values={values.telefono}
 
                                 />
 
                                 <MyTextInput
                                     label="Contraseña"
                                     icon="lock"
                                     placeholder="Ingrese su contraseña"
                                     placeholderTextColor={color5}
                                     onChangeText={handleChange('contrasenia')}
                                     onBlur={handleBlur('contrasenia')}
                                     values={values.contrasenia}
                                     secureTextEntry={hidePassword}
                                     isPassword={true}
                                     defaultValue={Cliente?.Contra}
                                     hidePassword={hidePassword}
                                     setHidePassword={setHidePassword}
 
                                 />
 
                                 <MyTextInput
                                     label="Confirmar Contraseña"
                                     icon="lock"
                                     placeholder="Ingrese su contraseña"
                                     placeholderTextColor={color5}
                                     onChangeText={handleChange('confirmarContrasenia')}
                                     onBlur={handleBlur('confirmarContrasenia')}
                                     values={values.confirmarContrasenia}
                                     secureTextEntry={hidePassword2}
                                     isPassword={true}
                                     defaultValue={Cliente?.Contra}
                                     hidePassword={hidePassword2}
                                     setHidePassword={setHidePassword2}
 
                                 />
                                 <MyTextInput
                                     label="Contraseña Actual"
                                     icon="lock"
                                     placeholder="Ingrese su contraseña"
                                     placeholderTextColor={color5}
                                     onChangeText={handleChange('contraseniaActual')}
                                     onBlur={handleBlur('contraseniaActual')}
                                     values={values.contraseniaActual}
                                     secureTextEntry={hidePasswordActual}
                                     isPassword={true}
                                     hidePassword={hidePasswordActual}
                                     setHidePassword={setHidePasswordActual}
                                 />
 
                                 <StyledButton onPress={handleSubmit}>
                                     <ButtonText>Guardar Cambios</ButtonText>
                                 </StyledButton>
                                 <Line />
                                 <StyledButton btn2={true} onPress={() => navigation.navigate("Login")}>
                                     <ButtonText btn2={true} >Cancelar</ButtonText>
                                 </StyledButton>
                                 <Line />
                             </StyledFormArea>
                         )}
                     </Formik>
                    )}

                   
                </InnerContainer>

            </StyledContainer>
        </StyledScroll>
    );
};

const MyTextInput = ({ label, icon, isPassword, hidePassword, setHidePassword, ...props }) => {
    return (
        <View>
            <LeftIcon>
                <Octicons name={icon} size={30} color={color5} />
            </LeftIcon>
            <StyledInputLabel>{label}</StyledInputLabel>
            <StyledTextInput {...props} />
            {isPassword && (
                <RightIcon onPress={() => setHidePassword(!hidePassword)}>
                    <Ionicons name={hidePassword ? 'eye-off' : 'eye'} size={30} color={color5} />
                </RightIcon>
            )}
        </View>
    )
}

export default ModifcarUsario;