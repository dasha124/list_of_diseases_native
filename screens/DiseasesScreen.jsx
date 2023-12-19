import { View, FlatList, RefreshControl, TouchableOpacity} from 'react-native';
import DiseaseCard from "../components/DiseaseCard";
import React, {useEffect, useState} from "react";
import {Load} from "../components/Load";
import {axiosInstance} from "../API";
import axios from 'axios';
import { mockData } from '/home/student/native/list_of_diseases/Consts.jsx'

const DiseasesScreen =({ navigation }) => {



    const [isLoading, setIsLoading] = useState(true)
    const [items, setItems] = useState([])
    const [isNetworkError, setIsNetworkError] = useState(false);

    const fetchD = () => {
        setIsLoading(true)
        setIsNetworkError(false);
        axiosInstance
        .get("diseases")
            .then((data) => {
                console.log(data)
                // setItems(data)
            })
            .catch((err) => {
                if (err.message === "Network Error") {
                    setIsNetworkError(true); 
                } else {
                    alert(err.message);
                }
            })
            .finally(() => {
                setIsLoading(false);
            });
    }

    useEffect(fetchD, [])


    if (isLoading) {
        return (
            <Load />
        )
    }

    return (
        <View>
            {isNetworkError ? ( // Проверяем состояние ошибки сети
                <FlatList
                    data={mockData} // Отображаем mockData при ошибке сети
                    renderItem={({ item }) => (
                        <TouchableOpacity onPress={() => navigation.navigate("Заболевание", { id: item.id, name: item.name, image: item.image })}>
                            <DiseaseCard navigation={navigation} id={item.id} name={item.name} image={item.image} />
                        </TouchableOpacity>
                    )}
                />
            ) : (
                <FlatList
                    refreshControl={<RefreshControl refreshing={isLoading} onRefresh={fetchD} />}
                    data={items}
                    renderItem={({ item }) => (
                        <TouchableOpacity onPress={() => navigation.navigate("Заболевание", { id: item.id, name: item.name, image: item.image })}>
                            <DiseaseCard navigation={navigation} id={item.id} name={item.name} image={item.image} />
                        </TouchableOpacity>
                    )}
                />
            )}
        </View>
        
    );
    
}

export default DiseasesScreen;