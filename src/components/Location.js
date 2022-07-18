import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const Location = ({ name, type, dimension }) => {
    return (
        <View style={styles.location}>
            <Text>Location</Text>
        </View>
    )
}


const styles = StyleSheet.create({
    root: {
        flex: 1,
        backgroundColor: "#202329"
    },
    location: {
        padding: 10,
        backgroundColor: "white",
    }
});

export default Location