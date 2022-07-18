import { View, Text, Image as Img, StyleSheet } from 'react-native'
import { Entypo } from '@expo/vector-icons'
import { TouchableOpacity } from 'react-native-gesture-handler'

import { useNavigation } from '@react-navigation/native';


const Character = ({ img, name, status, species, origin, char_id }) => {
    const navigation = useNavigation();
    return (
        <View style={{ flex: 1, alignSelf: "center", marginVertical: 20 }} on>
            <TouchableOpacity style={styles.cardContainer} onPress={() => {
                navigation.navigate('CharacterDetails', {
                    id: char_id,
                });
            }}>
                <Img source={{
                    uri: img
                }} style={{ width: 300, height: 300, maxWidth: 300, maxHeight: 300, }} />
                <View style={styles.cardBody}>
                    <View style={{ padding: 5, alignItems: "center" }}>
                        <Text style={[styles.text, { fontWeight: "bold", textAlign: "center" }]}>{name}</Text>
                        <Text style={[styles.text, { textAlign: "center" }]}>{origin}</Text>
                    </View>
                    <View style={{ padding: 5, flex: 1, flexDirection: "row", justifyContent: "center", alignItems: "center" }}>
                        <Entypo name="dot-single" size={42} color={status === 'Alive' ? "green" : status === "Dead" ? "red" : "gray"} />
                        <Text style={styles.text}>{status} - {species}</Text>
                    </View>
                </View>
            </TouchableOpacity>
        </View >
    )

}

const styles = StyleSheet.create({
    cardContainer: {
        flex: 1,
        justifyContent: "center",
        alignContent: "center",
        maxWidth: 300,
    },
    cardBody: {
        backgroundColor: "#3c3e44",
    },
    text: {
        color: "white",
        fontSize: 24
    }
})

export default Character