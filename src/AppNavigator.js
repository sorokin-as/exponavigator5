import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { FirstScreen, SecondScreen } from './sreens';



const Stack = createStackNavigator();

const StackNavigator = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="FScreen">
                <Stack.Screen name="FScreen" component={FirstScreen} />
                <Stack.Screen name="SScreen" component={SecondScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}


export { StackNavigator }
