import { View, Text, ImageBackground, TouchableOpacity, StyleSheet } from 'react-native'
import { Entypo } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native';


const Header = () => {
    const navigation = useNavigation();
    return (
        <View style={{ flex: 1, flexDirection: "row" }}>
            <TouchableOpacity style={{ flex: 1, zIndex: 3, position: "absolute", maxHeight: 30, maxWidth: 30, marginLeft: 10, marginTop: 10, justifyContent: "center", alignItems: "center" }} onPress={() => navigation.openDrawer()}>
                <Entypo name="menu" size={24} color="black" />
            </TouchableOpacity>
            <ImageBackground
                source={require('../img/rickymorty.png')}
                resizeMode='contain'
                style={{ flex: 1, zIndex: 1 }}
            >
                <Text style={styles.title}>Rick{"\n"}&{"\n"}Morty</Text>
            </ImageBackground>
        </View>
    )
}

const styles = StyleSheet.create({
    title: {
        fontSize: 42,
        fontWeight: "900",
        textAlign: "center",
        color: "#202329"
    }
});


export default Header