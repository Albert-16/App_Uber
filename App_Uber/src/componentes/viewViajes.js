import React from 'react';
import { Text, View, StyleSheet, ImageBackground,  Alert,  TouchableOpacity } from 'react-native';
import img from '/APP_UBER/App_Uber/assets/background.jpg';

const Viajes = () => {
  return <View style={styles.container}>
    <ImageBackground source={img} resizeMode="cover" style={styles.image}>
      <Text style={styles.title}>REGISTRO VIAJES</Text>

      <View style={styles.backgroundContet}>
        <Text style={styles.parametros}>Vehiculo</Text>

        <Text style={styles.parametros}>Conductor</Text>

        <Text style={styles.parametros}>Pasajero</Text>

        <Text style={styles.parametros}>Latitud Inicial</Text>

        <Text style={styles.parametros}>Longitud Inicial</Text>

        <Text style={styles.parametros}>Latitud Final</Text>

        <Text style={styles.parametros}>Longitud Final</Text>

        <Text style={styles.parametros}>Fecha Inicial</Text>

        <Text style={styles.parametros}>Fecha Final</Text>

        <Text style={styles.parametros}>Dirección Inicial</Text>

        <Text style={styles.parametros}>Dirección Final</Text>

        <Text style={styles.parametros}>Estado</Text>

        <TouchableOpacity style={styles.button} onPress={() => Alert.alert("Registro Guardado Correctamente")}>
          <Text style={styles.buttonText}>REGISTRAR</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  </View>
};


const styles = StyleSheet.create({
  container: { flex: 1 , fontFamily:'Inter_900Black'},
  image: {
    flex: 1,
    padding: 10,
  },
  backgroundContet: {
    backgroundColor: "#fff2", justifyContent: "center", padding: 10,
  },
  title: {
    color: "white",
    fontSize: 20,
    lineHeight: 84,
    fontWeight: "bold",
    textAlign: "center"
  },
  parametros: {
    color: '#fff',
    fontSize: 15,
    fontWeight: "bold",
  },
  buttonText: {
    fontSize: 20,
    color: '#fff',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  button:{
    backgroundColor: '#0072E9',padding:10, borderRadius:10,margin:5
  }
});
export default Viajes;