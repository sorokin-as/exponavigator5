import 'react-native-gesture-handler'
import * as React from 'react';
import { Button, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StackNavigator } from './src/AppNavigator'


const App = () => {
 
  return (
    <>
      <View  >
        < StackNavigator />
      </View>

    </>
  )
}



export default App;