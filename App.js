import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import Images from './src/components/images/Images';
import Image from './src/components/images/ImagePage';
import { Navbar } from './src/components/navbar/Navbar';
import { Provider } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

// import store from './src/store';
import store from './src/store.js';

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>

        <Navbar></Navbar>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={Images}
          />
          <Stack.Screen
            name="Image"
            component={Image}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {

  },
});
