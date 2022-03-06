import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Alert, ImageBackground  } from 'react-native';
import img from '/App-Uber/App_Uber/assets/carro.png';

export default function Vehiculo (){
  return(
  <View style={styles.container}>
    <View>
      < Text style={styles.Texto}>Registrar Vehiculo</ Text>
    </View>

    <View style={styles.containerContenido}>

      < Text style={styles.TextoSecundario}> Marca</ Text>

      <View style={styles.containerContenido2}>
        < TextInput style={styles.input} placeholder="Marca del Vehículo" />
      </View>

      < Text style={styles.TextoSecundario}> Modelo</ Text>

      <View style={styles.containerContenido2}>
        < TextInput style={styles.input} placeholder="Modelo del Vehículo" />
      </View>

      < Text style={styles.TextoSecundario}> Placa</ Text>
      <View style={styles.containerContenido2}>
        < TextInput style={styles.input} placeholder="Placa del Vehículo" />
      </View>

      < Text style={styles.TextoSecundario}> Año</ Text>
      <View style={styles.containerContenido2}>
        < TextInput style={styles.input} placeholder="Año del Vehículo" />
      </View>

      < Text style={styles.TextoSecundario}> Color</ Text>
      <View style={styles.containerContenido2}>
        < TextInput style={styles.input} placeholder="Color del Vehículo" />
      </View>

      <View style={styles.botones}>
      <TouchableOpacity style={styles.button} onPress={() => Alert.alert("Registro Éxitoso","Registro Guardado Correctamente")}>
          <Text style={styles.buttonText}>Registrar</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => Alert.alert("Registro Cancelado","Se ha cancelado tu registro")}>
          <Text style={styles.buttonText}>Cancelar</Text>
        </TouchableOpacity>
      </View>
    </View>

  </View>
    //Finalizacion de Container
  )};
//Titulo Principal
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#12191D',
    alignItems: 'center',
    justifyContent: 'center',
    width: "100%",
    height: "100%",
    padding: 5,
  },
  containerContenido: {
    backgroundColor: '#12191D',
    width: "80%",
    height: "80%",
    padding: 0,
    margin: 25,
  },
  containerContenido2: {
    alignItems: 'center',
    marginTop: 10,
  },
  botones: {
   display:'flex',
   flexDirection:'row',
   alignSelf:'center'
  },
  Texto: {
    color: "#FFF",
    fontWeight: "bold",
    fontSize: 30,
  },
  TextoSecundario: {
    color: "#FFF",
    fontSize: 16,
  },

  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    width: "100%",
    backgroundColor: "#FFF",
    borderRadius: 10,
  },
  image: {
    flex: 1,
    justifyContent: 'center',
  },
  ModalDropdown:{
    width: "100%",
    height:40,
    backgroundColor:"#FFF",
    fontSize:25,
    borderRadius:10,
    padding:10,
    marginBottom: 15,
    marginTop:20
  },
  button:{
    width:"40%",
    backgroundColor:"#2196F3",
    padding:15,
    borderRadius:10,
    margin:20,
    alignItems:'center',
  }
});
