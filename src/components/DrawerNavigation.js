import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons'
import CharactersScreen from '../screens/CharactersScreen'
import EpisodesScreen from '../screens/EpisodesScreen'
import LocationsScreen from '../screens/LocationsScreen'
import DrawerMenu from '../components/DrawerMenu'
import Preview from '../components/Preview'
import { createDrawerNavigator } from '@react-navigation/drawer'
import CharacterDeatilsScreen from '../screens/CharacterDeatilsScreen'


const Drawer = createDrawerNavigator();
const DrawerNavigation = () => {
    return (
        <Drawer.Navigator initialRouteName="Home" drawerContent={(props) => <DrawerMenu {...props} />}>
            <Drawer.Screen
                name="Home"
                component={Preview}
                options={{
                    headerShown: false,
                    drawerActiveBackgroundColor: "#FFAB2E",
                    drawerActiveTintColor: "#202329",
                    drawerIcon: ({ focused, size }) => {
                        let name;
                        if (focused) {
                            name = "home";
                            size = 26;
                        } else {
                            name = "home-outline";
                            size = 24;
                        }
                        return <Ionicons name={name} size={size} color="black" />
                    }
                }}
            />
            <Drawer.Screen
                name="Characters"
                component={CharactersScreen}
                options={{
                    headerShown: false,
                    drawerActiveBackgroundColor: "#FFAB2E",
                    drawerActiveTintColor: "#202329",
                    drawerIcon: ({ focused, size }) => {
                        let name;
                        if (focused) {
                            size = 26;
                            name = "people"
                        } else {
                            size = 24;
                            name = "people-outline"
                        }
                        return <Ionicons name={name} size={size} color="black" />
                    }
                }}
            />
            <Drawer.Screen
                name="Episodes"
                component={EpisodesScreen}
                options={{
                    headerShown: false,
                    drawerActiveBackgroundColor: "#FFAB2E",
                    drawerActiveTintColor: "#202329",
                    drawerIcon: ({ focused, size }) => {

                        let name;
                        if (focused) {
                            size = 26;
                            name = "play-box-multiple"
                        } else {
                            size = 24;
                            name = "play-box-multiple-outline"
                        }
                        return <MaterialCommunityIcons name={name} size={size} color="black" />
                    }
                }}
            />
            <Drawer.Screen
                name="Locations"
                component={LocationsScreen}
                options={{
                    headerShown: false,
                    drawerActiveBackgroundColor: "#FFAB2E",
                    drawerActiveTintColor: "#202329",
                    drawerIcon: ({ focused, size }) => {
                        let name;
                        if (focused) {
                            size = 26;
                            name = "ios-location-sharp"
                        } else {
                            size = 24;
                            name = "location-outline"
                        }

                        return <Ionicons name={name} size={size} color="black" />
                    }
                }}
            />
        </Drawer.Navigator>
    )

}

export default DrawerNavigation