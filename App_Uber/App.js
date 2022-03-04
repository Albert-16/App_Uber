import { StyleSheet, Text, View, TextInput, ImageBackground } from 'react-native';

export default function App() {
  return (

    <View style={styles.container}>
      <View>
        < Text style={styles.Texto}>Registrar Vehiculo</ Text>
      </View>

      <View style={styles.containerContenido}>

        <View style={styles.containerContenido2}>
          < Text style={styles.TextoSecundario}> Marca</ Text>
          < TextInput style={styles.input} placeholder="Marca del Vehículo" />
        </View>

        <View style={styles.containerContenido2}>
          < Text style={styles.TextoSecundario}> Modelo</ Text>
          < TextInput style={styles.input} placeholder="Modelo del Vehículo" />
        </View>

        <View style={styles.containerContenido2}>
          < Text style={styles.TextoSecundario}> Placa</ Text>
          < TextInput style={styles.input} placeholder="Placa del Vehículo" />
        </View>

        <View style={styles.containerContenido2}>
          < Text style={styles.TextoSecundario}> Año</ Text>
          < TextInput style={styles.input} placeholder="Año del Vehículo" />
        </View>

        <View style={styles.containerContenido2}>
          < Text style={styles.TextoSecundario}>  color</ Text>
          < TextInput style={styles.input} placeholder="Color del Vehículo" />
        </View>

      </View>

    </View>//Finalizacion de Container
  );
}
//Titulo Principal
const styles = StyleSheet.create({
  container: {
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
    padding: 10,
    margin: 0,
  },
  containerContenido2: {
    marginTop: 15,
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
  }
});