import { View, Text, FlatList, TouchableOpacity } from 'react-native'
import { useEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import Character from './Character'
import fetchApi from '../services/fetchApi'
import Loader from './Loader'
import { Entypo } from '@expo/vector-icons'

const CharactersList = () => {
    const navigation = useNavigation();

    const [characters, setCharacters] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [page, setPage] = useState(1);

    const setCharactersState = async () => {
        setIsLoading(true);
        /* fetch(`https://rickandmortyapi.com/api/character?page=${page}`)
            .then((response) => response.json())
            .then((json) => {
                setCharacters([...characters, ...json?.results]);
                setIsLoading(false);
            })
            .catch((err) => {
                setIsLoading(false);
                console.log(err);
            }); */
        const res = await fetchApi(`/character?page=${page}`);
        setCharacters([...characters, ...res?.results]);
        setIsLoading(false);
    }


    useEffect(() => {
        setCharactersState();
    }, [page])


    const Header = () => {
        return (
            <View style={{ backgroundColor: 'white' }}>
                <TouchableOpacity style={{ flex: 1, zIndex: 3, position: "absolute", maxHeight: 30, maxWidth: 30, marginLeft: 10, marginTop: 10, justifyContent: "center", alignItems: "center" }} onPress={() => navigation.openDrawer()}>
                    <Entypo name="menu" size={24} color="black" />
                </TouchableOpacity>
                <Text style={{ fontSize: 42, textAlign: "center", fontWeight: "900" }}>Characters</Text>
            </View>
        )
    }
    return (
        <>
            {
                isLoading ? (
                    <View style={{ flex: 1 }}>
                        <Loader />
                    </View>
                ) : (
                    <>
                        <View style={{ backgroundColor: "#202329", flex: 1 }}>

                            <FlatList
                                data={characters} onEndReachedThreshold={0.5}
                                onEndReached={() => setPage(page + 1)}
                                ListHeaderComponent={Header}
                                renderItem={({ item }) => (
                                    <Character
                                        key={item.id}
                                        img={item.image}
                                        name={item.name}
                                        status={item.status}
                                        species={item.species}
                                        origin={item.origin.name}
                                        char_id={item.id}
                                        nestedScrollEnabled
                                    />
                                )}
                                keyExtractor={(item) => item.id}
                            />

                        </View>
                    </>
                )
            }
        </>
    )
}
export default CharactersList 