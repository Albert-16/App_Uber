import React, { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar'
import { View, SafeAreaView, StyleSheet, Alert } from 'react-native';
import {
  Avatar,
  Title,
  Caption,
  Text,
  TouchableRipple,
} from 'react-native-paper';

import { Colors } from '../Componentes/style';
import AsyncStorage from "@react-native-async-storage/async-storage";
const { color2, color3, color5, color6 } = Colors;
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import { IP, PORT, IMAGEN_AVATAR, ObtenerTodos, viajesGuardar } from '@env';
import { useNavigation } from '@react-navigation/native';
const Ruta = "http://" + IP + ":" + PORT + viajesGuardar;
const ConfirmarViaje = () => {
  const navigation = useNavigation();
  const RutaImagen = "http://" + IP + ":" + PORT + IMAGEN_AVATAR + "user03.png";
  const [Cliente, setCliente] = useState([]);
  const [TotalViaje, setTotalViaje] = useState();
  const [Tipo, setTipo] = useState([]);
  const [Viaje, setViaje] = useState([]);
  const RutaTotal = "http://" + IP + ":" + PORT + ObtenerTodos + "id=";
  const fechaInicial = new Date();
  useEffect(async () => {
    const token = await AsyncStorage.getItem('token');
    const cliente = JSON.parse(await AsyncStorage.getItem('Cliente'));
    const tipo = JSON.parse(await AsyncStorage.getItem('Tipo'));
    const dataViaje = JSON.parse(await AsyncStorage.getItem('DataViajes'));
    setCliente(cliente);
    setViaje(dataViaje);
    setTipo(tipo);
    await fetch(RutaTotal + cliente.id, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + token
      }
    })
      .then((res) => res.json()).then((resJson) => {
        setTotalViaje(resJson)
      })
      .catch(console.error)
  }, []);



  const CerrarSesion = async () => {
    await AsyncStorage.removeItem('token');
    Alert.alert("Uber", "Sesión Finalizada");
    console.log("Sesión finalizada");
    navigation.navigate("Menú Principal");
  }

  const Guardar = async () => {
    try {
      var hoy = new Date();
      var fecha = hoy.getFullYear() + "/" + (hoy.getMonth() + 1) + "/" + hoy.getDate();
      var hora = hoy.getHours() + ":" + hoy.getMinutes() + ":" + hoy.getSeconds();
      var fechaYHora = fecha + ' ' + hora;

      const token = await AsyncStorage.getItem('token');
      const respuesta = await fetch(Ruta, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          Authorization: 'Bearer ' + token
        },
        body: JSON.stringify({
          "id_Vehiculo": Viaje[0]?.Vehiculo?.Id,
          "id_Pasajero": Viaje[0]?.Cliente?.id,
          "latitud_Inicial": Viaje[0]?.origen?.location?.lat,
          "longitud_Inicial": Viaje[0]?.origen?.location?.lng,
          "latitud_Final": Viaje[0]?.destino?.location?.lat,
          "longitud_Final": Viaje[0]?.destino?.location?.lng,
          "fecha_Inicial": fechaYHora,
          "direccion_Inicial": Viaje[0]?.origen?.description,
          "direccion_Final": Viaje[0]?.destino?.description,
          "total": Viaje[0]?.total,
          "id_Tipo_Pago": Tipo?.id,
          "id_Conductor": Viaje[0]?.Vehiculo?.IdConductor,
          "distancia_Km": (Viaje[0]?.viaje?.distance?.value / 1000)
        })
      });

      const json = await respuesta.json();

      if (json.Titulo == "Éxito") {
        Alert.alert("Aviso", json.Mensaje);
      }
      else {
        Alert.alert("Aviso", "Ocurrió un Error...");
      }


      navigation.navigate("Menú Principal");
    } catch (error) {
      console.log(error);
    }

  }



  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="light" />
      <View style={styles.userInfoSection}>
        <View style={{ flexDirection: 'row', marginTop: 50 }}>
          <Avatar.Image
            source={{
              uri: RutaImagen,
            }}
            size={80}
          />
          <View style={{ marginLeft: 20 }}>
            <Title style={[styles.title, {
              marginTop: 15,
              marginBottom: 5,
            }]}>{Viaje[0]?.Vehiculo?.Conductor}</Title>
            <Caption style={styles.caption}>@Conductor</Caption>
          </View>
        </View>
      </View>

      <View style={styles.userInfoSection}>
        <View style={styles.row}>
          <Icon name="badge-account" color={color6} size={20} />
          <Text style={{ color: color5, marginLeft: 20 }}>Pasajero: {Viaje[0]?.Cliente?.Nombre + " " + Viaje[0]?.Cliente?.Apellido}</Text>
        </View>
        <View style={styles.row}>
          <Icon name="map-marker-radius" color={color6} size={20} />
          <Text style={{ color: color5, marginLeft: 20 }}>Punto de partida: {Viaje[0]?.origen?.description}</Text>
        </View>
        <View style={styles.row}>
          <Icon name="map-marker-radius" color={color6} size={20} />
          <Text style={{ color: color5, marginLeft: 20 }}>Destino: {Viaje[0]?.destino?.description}</Text>
        </View>
        <View style={styles.row}>
          <Icon name="watch-export" color={color6} size={20} />
          <Text style={{ color: color5, marginLeft: 20 }}>Duración del viaje: {Viaje[0]?.viaje?.duration?.text}</Text>
        </View>
        <View style={styles.row}>
          <Icon name="smart-card" color={color6} size={20} />
          <Text style={{ color: color5, marginLeft: 20 }}>Método de Pago: {Tipo?.descripcion}</Text>
        </View>
      </View>

      <View style={styles.infoBoxWrapper}>
        <View style={[styles.infoBox, {
          borderRightColor: color5,
          borderRightWidth: 1,
          color: color5
        }]}>
          <Title style={{ color: color5 }}>L. {Viaje[0]?.total}</Title>
          <Caption style={{ color: color6 }}>Total  a pagar</Caption>
        </View>
        <View style={styles.infoBox}>
          <Title style={{ color: color5 }}>{Viaje[0]?.viaje?.distance?.text}</Title>
          <Caption style={{ color: color6 }}>Distancia</Caption>
        </View>
      </View>

      <View style={styles.menuWrapper}>
        <TouchableRipple onPress={Guardar}>
          <View style={styles.menuItem}>
            <Icon name="near-me" color={color6} size={25} />
            <Text style={styles.menuItemText}>Confirmar Viaje</Text>
          </View>
        </TouchableRipple>



        <TouchableRipple onPress={CerrarSesion}>
          <View style={styles.menuItem}>
            <Icon name="progress-close" color={color6} size={25} />
            <Text style={styles.menuItemText}>Cancelar</Text>
          </View>
        </TouchableRipple>
      </View>
    </SafeAreaView>
  );
};

export default ConfirmarViaje;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color2
  },
  userInfoSection: {
    paddingHorizontal: 30,
    marginBottom: 30,
    color: color5
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: color5
  },
  caption: {
    fontSize: 14,
    lineHeight: 14,
    fontWeight: '500',
    color: color6
  },
  row: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  infoBoxWrapper: {
    borderBottomColor: color5,
    borderBottomWidth: 1,
    borderTopColor: color5,
    borderTopWidth: 1,
    flexDirection: 'row',
    height: 100,
  },
  infoBox: {
    width: '50%',
    alignItems: 'center',
    color: color5,
    justifyContent: 'center',
  },
  menuWrapper: {
    marginTop: 10,
    color: color5,
  },
  menuItem: {
    flexDirection: 'row',
    paddingVertical: 15,
    paddingHorizontal: 30,
    color: color5,
  },
  menuItemText: {
    color: color5,
    marginLeft: 20,
    fontWeight: '600',
    fontSize: 16,
    lineHeight: 26,
  },
});