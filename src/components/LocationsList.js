import { View, Text, FlatList } from 'react-native'
import { useState, useEffect } from 'react'
import fetchApi from '../services/fetchApi'
import Loader from './Loader'
import Location from './Location'
const LocationsList = () => {

    const [locations, setLocations] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    //https://rickandmortyapi.com/api/location
    const getLocations = async () => {
        setIsLoading(true)
        const fetch = await fetchApi(`/location`)
        setLocations(fetch.results)
        setIsLoading(false)
        console.log(fetch.results)
    }


    useEffect(() => {
        getLocations()
    }, [])


    return (
        isLoading ? (
            <View style={{ flex: 1 }}>
                <Loader />
            </View>
        ) : (
            <View style={{ flex: 1 }}>
                <Location
                    name="Earth"
                    type="Planet"
                    dimension="C-137"
                />
            </View>
        )
    )
}

export default LocationsList