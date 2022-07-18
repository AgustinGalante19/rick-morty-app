import { View, StyleSheet, ActivityIndicator, StatusBar } from 'react-native'

const Loader = () => {
    return (
        <View style={styles.root}>
            <ActivityIndicator color="#ff9800" size="large" />
            <StatusBar hidden />
        </View>
    )
}


const styles = StyleSheet.create({
    root: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
});


export default Loader