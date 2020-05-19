import * as React from 'react';
import { StyleSheet, Button, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';



const FirstScreen = ({ navigation }) => {
    return (
        <View style={styles.fcontainer}>
            <Text>Home Screen</Text>
            <Button
                title="Go to Details"
                onPress={() => navigation.navigate('SScreen')}
            />
        </View>
    );
}


const styles = StyleSheet.create({
    fcontainer: {
        flex: 2,
        justifyContent: 'center',
        alignItems: 'center'

    }
})



export { FirstScreen }

