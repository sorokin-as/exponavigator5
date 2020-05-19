import 'react-native-gesture-handler'
import * as React from 'react';
import { StyleSheet, View } from 'react-native';
import { StackNavigator } from './src/AppNavigator'


const App = () => {
 
  return (
    <>
      <View style={styles.container}>
        < StackNavigator />
      </View>

    </>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
   // justifyContent: 'center',
   // alignItems: 'center'

  }
})

export default App;