import React , {useState,useEffect} from 'react';
import {StatusBar} from 'expo-status-bar'
import {View, SafeAreaView, StyleSheet} from 'react-native';
import {
  Avatar,
  Title,
  Caption,
  Text,
  TouchableRipple,
} from 'react-native-paper';

import {Colors} from '../Componentes/style';
import AsyncStorage from "@react-native-async-storage/async-storage";
const {color2,color3,color5,color6} = Colors;
import tw from 'tailwind-react-native-classnames';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import {IP,PORT,IMAGEN_AVATAR} from '@env';
const ProfileScreen = () => {

  const RutaImagen = "http://" + IP + ":" + PORT + IMAGEN_AVATAR + "user03.png";
  const [Cliente, setCliente] = useState([]);

  useEffect(async () => {
    const cliente = JSON.parse(await AsyncStorage.getItem('Cliente'));
    setCliente(cliente);
  }, []);


  return (
    <SafeAreaView style={styles.container}>
<StatusBar style="light" />
      <View style={styles.userInfoSection}>
        <View style={{flexDirection: 'row', marginTop: 50}}>
          <Avatar.Image 
            source={{
              uri: RutaImagen,
            }}
            size={80}
          />
          <View style={{marginLeft: 20}}>
            <Title style={[styles.title, {
              marginTop:15,
              marginBottom: 5,
            }]}>{Cliente.Nombre + " " +Cliente.Apellido}</Title>
            <Caption style={styles.caption}>@{Cliente.Usuario}</Caption>
          </View>
        </View>
      </View>

      <View style={styles.userInfoSection}>
        <View style={styles.row}>
          <Icon name="smart-card" color={color6} size={20}/>
          <Text style={{color:color5, marginLeft: 20}}>{Cliente.DNI}</Text>
        </View>
        <View style={styles.row}>
          <Icon name="phone" color={color6} size={20}/>
          <Text style={{color:color5, marginLeft: 20}}>{Cliente.Tel}</Text>
        </View>
        <View style={styles.row}>
          <Icon name="email" color={color6} size={20}/>
          <Text style={{color:color5, marginLeft: 20}}>{Cliente.Correo}</Text>
        </View>
      </View>

      <View style={styles.infoBoxWrapper}>
          <View style={[styles.infoBox, {
            borderRightColor: color5,
            borderRightWidth: 1,
            color: color5
          }]}>
            <Title style={{color: color5}}>L. 140.50</Title>
            <Caption style={{color: color6}}>Saldo</Caption>
          </View>
          <View style={styles.infoBox}>
            <Title style={{color: color5}}>12</Title>
            <Caption style={{color: color6}}>Viajes</Caption>
          </View>
      </View>

      <View style={styles.menuWrapper}>
        <TouchableRipple onPress={() => {}}>
          <View style={styles.menuItem}>
            <Icon name="rotate-left" color={color6} size={25}/>
            <Text style={styles.menuItemText}>Editar Perfil</Text>
          </View>
        </TouchableRipple>
        <TouchableRipple onPress={() => {}}>
          <View style={styles.menuItem}>
            <Icon name="credit-card" color={color6} size={25}/>
            <Text style={styles.menuItemText}>Pagos</Text>
          </View>
        </TouchableRipple>
       
       
        <TouchableRipple onPress={() => {}}>
          <View style={styles.menuItem}>
            <Icon name="power-settings" color={color6} size={25}/>
            <Text style={styles.menuItemText}>Cerrar Sesión</Text>
          </View>
        </TouchableRipple>
      </View>
    </SafeAreaView>
  );
};

export default ProfileScreen;

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