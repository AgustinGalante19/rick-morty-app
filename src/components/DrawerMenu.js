import { View, Image } from 'react-native'
import { DrawerItemList } from '@react-navigation/drawer'
import React from 'react'

const DrawerMenu = (props) => {
    return (
        <View style={{ backgroundColor: 'white', flex: 1, }} >
            <View style={{ borderBottomWidth: 0.5, borderBottomColor: '#A0A0A0' }}>
                <View style={{
                    alignItems: 'center', justifyContent: 'center',
                    marginVertical: 10
                }}>
                    <Image style={{
                        width: 40,
                        height: 40,
                        borderRadius: 35
                    }} source={require('../img/logo.png')} />
                </View>
            </View>
            <DrawerItemList {...props} />
        </View >
    )
}

export default DrawerMenu