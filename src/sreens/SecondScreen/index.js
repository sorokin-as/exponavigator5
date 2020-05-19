import * as React from 'react';
import { Button, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';



const SecondScreen = ({ navigation }) => {
        return (
            <View style={{
                flex: 2,
                justifyContent: 'center',
                alignItems: 'center'}}>
                <Text>sssss Screen</Text>
                <Button
                    title="Go to Details... again"
                    onPress={() => navigation.push('SScreen')}
                />
            </View>
        );
    }



export { SecondScreen }