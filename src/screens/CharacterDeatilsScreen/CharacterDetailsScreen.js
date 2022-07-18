import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import { useState, useEffect, } from 'react'
import { Entypo, FontAwesome, FontAwesome5, AntDesign } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'
import Loader from '../../components/Loader'
import fetchApi from '../../services/fetchApi'

const CharacterDetailsScreen = ({ route }) => {
    const navigation = useNavigation();
    const { id } = route.params;

    const [character, setCharacter] = useState([])
    const [isLoading, setIsLoading] = useState(false)

    const getCharacter = async () => {
        setIsLoading(true)
        const res = await fetchApi(`/character/${id}`)
        setCharacter(res)
        setIsLoading(false)
        console.log(res)
    }

    useEffect(() => {
        getCharacter()
    }, [])



    return (
        isLoading ? (
            <Loader />
        ) : (
            <View style={styles.root}>
                <TouchableOpacity style={{ padding: 10, backgroundColor: '#FFAB2E', width: 50, marginVertical: 15, justifyContent: 'center', alignItems: 'center', borderRadius: 3 }} onPress={() => navigation.goBack()}>
                    <AntDesign name="arrowleft" size={16} color="black" />
                </TouchableOpacity>
                <View style={styles.cardCtn}>
                    <Image source={{
                        uri: character.image
                    }} style={{ height: 300, minWidth: 300 }} />
                    <View style={styles.cardBody}>
                        <Text style={styles.title}>{character.name}</Text>
                        <View style={styles.row}>
                            <Entypo name="dot-single" size={42} color={character.status === 'Alive' ? "green" : character.status === "Dead" ? "red" : "gray"} />
                            <Text style={styles.text}>{character.status}</Text>
                        </View>
                        <View style={styles.row}>
                            <FontAwesome5 name="dna" size={16} color="#FFAB2E" style={{ marginHorizontal: 10 }} />
                            <Text style={styles.text}>{character.species}</Text>
                        </View>
                        {
                            character.location ? (
                                <View style={styles.row}>
                                    <FontAwesome name="map-marker" size={16} color="#FFAB2E" style={{ marginHorizontal: 10 }} />
                                    <Text style={styles.text}>{character.location.name}</Text>
                                </View>
                            ) : null
                        }
                    </View>
                </View>
            </View >
        )
    )
}

const styles = StyleSheet.create({
    root: {
        flex: 1,
        padding: 50,
        alignContent: 'center',
        justifyContent: 'center',
        backgroundColor: '#dfe6e9'
    },
    cardCtn: {
        backgroundColor: 'red',
        width: 305
    },
    cardBody: {
        padding: 5,
        backgroundColor: 'white',
    },
    title: {
        fontSize: 42,
        fontWeight: "900"
    },
    text: {
        fontSize: 18,
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
    }
})


export default CharacterDetailsScreen