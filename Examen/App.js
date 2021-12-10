// In App.js in a new project


import React, { useState } from 'react';
import { SafeAreaView,ScrollView,TextInput, View,Image, FlatList, StyleSheet, Text, StatusBar, TouchableOpacity, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
const Tab = createBottomTabNavigator();


function BuscarScreen({navigation}) {
  const [number, setNumber] = useState(0);

  return (
    <ScrollView>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Aqui puedes buscar usuarios por su edad:</Text>
        <Text></Text>       
        <TextInput
        style={{borderColor:'red',borderWidth:3,width:100,}}
        onChangeText={x => setNumber(x)}
        // value={number}
        keyboardType="numeric"
      />
      <Text></Text>
      <Button
        title="Press me"
        onPress={() => navigation.navigate('Detalles',{numbero:number})}
      />
    

      </View>
    </ScrollView>
  );

}//ListadoScreen

function HistoriaScreen() {
  return (
    <ScrollView >
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Bienvenido a la historia de los dispositivos moviles</Text>
      <Image
        style={{ width: 300, height: 400, marginBottom: 50 }}
        source={require("./assets/backberry.jpeg")}
      />
      <Text>Esto es una BlackBerry</Text>
      <Text></Text>
      <Image
        style={{ width: 225, height: 250, marginBottom: 50 }}
        source={require("./assets/1eriphone.jpg")}
      />
      <Text>Este es el primer iPhone</Text>
      <Text></Text>

      <Image
        style={{ width: 225, height: 250, marginBottom: 50 }}
        source={require("./assets/iphone7.jpg")}
      />
      <Text>Este es el iPhone 7</Text>
      <Text></Text>

      <Image
        style={{ width: 225, height: 250, marginBottom: 50 }}
        source={require("./assets/iphone12.jpg")}
      />
      <Text>Este es el iPhone 12</Text>
      <Text></Text>

      </View>
    </ScrollView>
  );
}//informacionScreen
function DetallesScreen({route}) {
  
  const users = [
    { id: 1, name: 'Antonio Morlanes', age: 34, sex: 'Varón' },
    { id: 2, name: 'Margarita Fuentes', age: 29, sex: 'Mujer' },
    { id: 4, name: 'Manuel Machado', age: 51, sex: 'Varón' },
    { id: 5, name: 'Cai Lun', age: 81, sex: 'Varón' },
    { id: 6, name: 'Manuela Aparicia', age: 19, sex: 'Varón' },
    { id: 7, name: 'Manuel Lara', age: 20, sex: 'Varón' },
    { id: 9, name: 'Álvaro Andrade', age: 43, sex: 'Varón' },
    { id: 10, name: 'Ángel Andrade', age: 23, sex: 'Varón' },
    { id: 11, name: 'Araceli Castillo', age: 61, sex: 'Mujer' },
    { id: 12, name: 'Sara Sacristán', age: 49, sex: 'Mujer' },
    { id: 13, name: 'Esther Arroyo', age: 18, sex: 'Mujer' },
    { id: 14, name: 'Martina Danta', age: 45, sex: 'Mujer' },
    { id: 15, name: 'Julia Praena', age: 38, sex: 'Mujer' },
    { id: 16, name: 'Pedro Flecha', age: 59, sex: 'Varón' },
    { id: 17, name: 'Miguel Berral', age: 60, sex: 'Varón' },
    { id: 18, name: 'Lorena Aparicio', age: 53, sex: 'Mujer' },
    { id: 19, name: 'David Toral', age: 61, sex: 'Varón' },
    { id: 20, name: 'Daniel Cifuentes', age: 52, sex: 'Varón' }
  ]
  function pintar ({item})  { 
      if(item.age==route.params.numbero){
        return <View style={styles.item}>
        <Text>{item.name}</Text>
        <Text>{item.age}</Text>
        
      
      </View>
      } 
  
  }


  return (
  <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <Text>Los usuarios con la edad introducida son: {route.params.numbero}</Text>
    <Text></Text>
    <FlatList
      data={users}
      renderItem={pintar}
      keyExtractor={item => item.id}
    />
  </View>
  
  );

  
  
  
}//DetallesScreen
const Stack=createNativeStackNavigator();
function BuscarStack(){
  return(

      <Stack.Navigator initialRouteName="buscar">
        <Stack.Screen name="buscar" component={BuscarScreen} options={{ headerStyle: { backgroundColor: '#830583' } }}/>
        <Stack.Screen name="Detalles" component={DetallesScreen}options={{ headerStyle: { backgroundColor: '#830583' } }}/>
      </Stack.Navigator>
  );
}//LISTADO STACK
const Stack2=createNativeStackNavigator();
function HistoriaStack(){
  return(

      <Stack2.Navigator >
        <Stack2.Screen name="historia" component={HistoriaScreen} options={{ headerStyle: { backgroundColor: '#830583' } }}/>
      </Stack2.Navigator>
  );
}
export default function App() {
  return (
    <NavigationContainer >
      <Tab.Navigator initialRouteName="Historia" tabBarOptions={{
        activeTintColor: "#000",
        activeBackgroundColor: "#830583",
        inactiveTintColor: "#FFF",
        inactiveBackgroundColor: "#D50BD5"
      }} >
        <Tab.Screen name="Historia" component={HistoriaStack} options={{ headerStyle: { backgroundColor: '#D50BD5' } }}/>
        <Tab.Screen name="Buscar" component={BuscarStack} options={{ headerStyle: { backgroundColor: '#D50BD5' } }}/>
      </Tab.Navigator>
    </NavigationContainer>
    
  );
  
}//app

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
});