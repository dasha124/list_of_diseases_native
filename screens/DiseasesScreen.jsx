import { View, FlatList, RefreshControl, TouchableOpacity} from 'react-native';
import DiseaseCard from "../components/DiseaseCard";
import React, {useEffect, useState} from "react";
import {Load} from "../components/Load";
import {axiosInstance} from "../API";


const DiseasesScreen =({ navigation }) => {

    const [isLoading, setIsLoading] = useState(true)
    const [items, setItems] = useState([])

    const fetchD = () => {
        setIsLoading(true)
        axiosInstance
            .get("/diseases/")
            .then(({data}) => {
                setItems(data)
            })
            .catch((err) => {
                alert(err)
            })
            .finally(() => {
                setIsLoading(false)
            })
    }

    useEffect(fetchD, [])


    if (isLoading) {
        return (
            <Load />
        )
    }

    return (
        <View>

            <FlatList
                refreshControl={<RefreshControl refreshing={isLoading} onRefresh={fetchD} />}
                data={items}
                renderItem={({item}) => (
                    <TouchableOpacity onPress={() => navigation.navigate("Заболевание", {id: item.id, name: item.name, image:item.image })}>
                        <DiseaseCard navigation={navigation} id={item.id} name={item.name} image={item.image}/>
                    </TouchableOpacity>
                )}
            />
        </View>
    );
}

export default DiseasesScreen;