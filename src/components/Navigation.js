import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from '../screens/HomeScreen/HomeScreen';
import CharacterDetails from '../screens/CharacterDeatilsScreen'
import Testing from './Testing'

const Stack = createNativeStackNavigator();

const navigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name='Inicio'
                    component={HomeScreen}
                    options={{
                        headerShown: false
                    }}
                />
                <Stack.Screen
                    name='CharacterDetails'
                    component={CharacterDetails}
                    options={{
                        headerShown: false
                    }}
                />
                <Stack.Screen
                    name='Probando'
                    component={Testing}
                    options={{
                        headerShown: false
                    }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default navigation