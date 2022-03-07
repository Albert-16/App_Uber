import React from 'react';
import { Text, View, StyleSheet, ImageBackground, Alert, TouchableOpacity, Platform, TextInput } from 'react-native';
import img from '../../assets/background.jpg';
const Viajes = () => {
  return <View style={styles.container}>
    <ImageBackground source={img} resizeMode="cover" style={styles.image}>
      <Text style={styles.title}>REGISTRO VIAJES</Text>

      <View style={styles.backgroundContet}>
        <Text style={styles.parametros}>Vehiculo</Text>
        <TextInput style={styles.textInput} placeholder="Introduzca el Vehiculo"/>

        <Text style={styles.parametros}>Conductor</Text>
        <TextInput style={styles.textInput} placeholder="Introduzca el Conductor"/>

        <Text style={styles.parametros}>Pasajero </Text>
        <TextInput style={styles.textInput} placeholder="Introduzca el Pasajero" />

        <Text style={styles.parametros}>Fecha Inicial</Text>
        <TextInput style={styles.textInput} placeholder="Introduzca la fecha de inicio"/>

        <Text style={styles.parametros}>Fecha Final</Text>
        <TextInput style={styles.textInput} placeholder="Introduzca la fecha final"/>


        <TouchableOpacity style={styles.button} onPress={() => Alert.alert("Registro Guardado Correctamente")}>
          <Text style={styles.buttonText}>REGISTRAR</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonCancelar} onPress={() => Alert.alert("Proceso Cancelado Correctamente")}>
          <Text style={styles.buttonText}>CANCELAR</Text>
        </TouchableOpacity>
      </View>

    </ImageBackground>
  </View>
};


const styles = StyleSheet.create({
  container: { flex: 1, fontFamily:'Times New Roman',},
  image: {
    flex: 1,
    padding: 10,
  },
  backgroundContet: {
    backgroundColor: "#fff2", justifyContent: "center", padding: 10,borderRadius:15,
  },
  title: {
    color: "white",
    fontSize: 20,
    lineHeight: 84,
    fontWeight: "bold",
    padding: 35,
    textAlign: "center"
  },
  parametros: {
    color: '#0D64C1',
    fontSize: 15,
    fontWeight: "bold",
  },
  buttonText: {
    fontSize: 20,
    color: '#fff',
    textAlign: 'center',
    fontWeight: 'bold', 
  },
  buttonCancelar:{
    backgroundColor: '#B51F00', padding: 10, borderRadius: 15, marginTop: 15,
    
  },
  button: {
    backgroundColor: '#0072E9', padding: 10, borderRadius: 15, marginTop: 15,
  },

  textInput: {
    color: '#fff', backgroundColor: '#454545', padding: 10, borderRadius: 5 , borderColor: '#FFFF',borderWidth:1, marginBottom:5,marginTop:5,
  },
});
export default Viajes;