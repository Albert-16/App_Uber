import React, { useState, ScrollView } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Octicons, Ionicons } from '@expo/vector-icons';
import { Formik } from 'formik';
import { Alert, SectionList } from 'react-native';
import AsyncStorage from "@react-native-async-storage/async-storage";
import { InfoApi } from "../Configuracion/configuracion";
import { View, Text, StyleSheet, TextInput, Button } from "react-native";
import { CardField, useConfirmPayment } from "@stripe/stripe-react-native";

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

import { IP, TarjetaCredito, PORT } from '@env';

const RegistrarUsuario = ({ navigation }) => {
  const [titular, setTitular] = useState(null);
  const [email, setEmail] = useState(null);
  const [cardDetails, setCardDetails] = useState();
  const [cardNumber, setCardNumber] = useState();

  const Ruta = "http://" + IP + ":" + PORT + TarjetaCredito + "?d_Usuarios=";
  const presInicio = async () => {
    Alert.alert("Uber", "Hola");
  }
  return (
    <StyledScroll>
      <StyledContainer>


        <StatusBar style="light" />
        <InnerContainer>
          <PageTitulo>Método de pago</PageTitulo>
          <Formik
            initialValues={
              {

                correo: '',
                titular: ''

              }
            }
            onSubmit={async (values) => {
              try {

                const cliente = JSON.parse(await AsyncStorage.getItem('Cliente'));
                const token = await AsyncStorage.getItem('token');
                const DataTarjeta = [{
                  titular_Tarjeta: values.titular,
                  correo_Electronico: values.correo,
                  CVC: cardDetails?.last4,
                  numeroTarjeta: "XXXXXXXXXXXX" + cardDetails?.last4,
                  id_Usuarios: cliente?.id,
                  estado: true,
                  fecha_Vencimiento: cardDetails?.expiryMonth + "/" + cardDetails?.expiryYear,
                }];
                console.log(DataTarjeta);
               const respuesta = await fetch(Ruta + cliente.id, {
                 method: 'POST',
                 headers: {
                   Accept: 'application/json',
                   'Content-Type': 'application/json',
                   Authorization: 'Bearer ' + token
                 },
                 body: JSON.stringify({
                  titular_Tarjeta: values.titular,
                  correo_Electronico: values.correo,
                  CVC: cardDetails?.last4,
                  numeroTarjeta: "XXXXXXXXXXXX" + cardDetails?.last4,
                  id_Usuarios: cliente?.id,
                  estado: true,
                  fecha_Vencimiento: cardDetails?.expiryMonth + "/" + cardDetails?.expiryYear,
                })
               });
               
               const json = await respuesta.json();
                console.log(json);
                Alert.alert("Aviso", json.Mensaje);
                // console.log(cardNumber);

              } catch (error) {
                console.log(error);
                Alert.alert("Error", "error: " + error.message);
              }

            }} >
            {({ handleChange, handleBlur, handleSubmit, values }) => (
              <StyledFormArea>

                <MyTextInput
                  label="Correo Electrónico"
                  icon="mail"
                  placeholder="Ingrese su correo"
                  placeholderTextColor={color5}
                  onChangeText={handleChange('correo')}
                  onBlur={handleBlur('correo')}
                  values={values.correo}

                />

                <MyTextInput
                  label="Titular"
                  icon="person"
                  placeholder="Ingrese el Titular"
                  placeholderTextColor={color5}
                  onChangeText={handleChange('titular')}
                  onBlur={handleBlur('titular')}
                  values={values.titular}

                />

                <CardField
                  postalCodeEnabled={false}
                  placeholder={{
                    number: "4242 4242 4242 4242",
                  }}
                  cardStyle={styles.card}
                  style={styles.cardContainer}

                  onCardChange={(cardDetails) => {

                    setCardDetails(cardDetails);
                  }}



                />

                <Line />
                <StyledButton btn2={true} onPress={handleSubmit}>
                  <ButtonText btn2={true} >Asociar</ButtonText>
                </StyledButton>
                <Line />




              </StyledFormArea>
            )}
          </Formik>
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    margin: 0,
  },
  input: {
    backgroundColor: "#efefefef",

    borderRadius: 8,
    fontSize: 15,
    height: 50,
    width: 120,
    padding: 10,
  },
  card: {
    backgroundColor: "#efefefef",

  },
  cardContainer: {
    height: 60,

    marginVertical: 10,
  },
});

export default RegistrarUsuario;