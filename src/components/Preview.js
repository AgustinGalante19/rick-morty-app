import { ScrollView, View, Text, StyleSheet } from 'react-native'
import { useState, useEffect } from 'react'

import getCharacters from '../services/fetchApi'

import Character from '../components/Character'
import Loader from '../components/Loader'
import Header from './Header'

const Preview = () => {

    const [characters, setCharacters] = useState([]);
    const [isLoading, setIsLoading] = useState([undefined]);

    const setPreview = async () => {
        setIsLoading(true);
        let nums = [];
        for (let i = 0; i <= 7; i++) {
            nums.push(Math.floor(Math.random() * 827));
        }
        const options = `/character/${nums[0]},${nums[1]},${nums[2]},${nums[3]},${nums[4]},${nums[5]},${nums[6]}`;
        const charactersPreview = await getCharacters(options);
        setCharacters(charactersPreview);
        setIsLoading(false);
    }

    useEffect(() => {
        setPreview();
    }, [])

    return (
        <>
            {
                !isLoading ? (
                    <ScrollView style={styles.root} centerContent={true}>
                        <Header />
                        <View style={styles.preview}>
                            {characters.map((item) => (
                                <Character
                                    key={item.id}
                                    img={item.image}
                                    name={item.name}
                                    status={item.status}
                                    species={item.species}
                                    origin={item.origin.name}
                                    char_id={item.id}
                                />
                            ))}
                        </View>
                    </ScrollView>
                ) : isLoading ? (
                    <View style={{ flex: 1 }}>
                        <Loader />
                    </View>
                ) : (
                    <Text style={{ color: "red" }}>Something went wrong...</Text>
                )
            }
        </>
    )

}



const styles = StyleSheet.create({
    root: {
        flex: 1,
    },
    title: {
        fontSize: 42,
        fontWeight: "900",
        textAlign: "center",
        color: "#202329"
    },
    preview: {
        flex: 1,
        backgroundColor: "#202329",
        alignItems: "center",
        padding: 20,
    }
});

export default Preview