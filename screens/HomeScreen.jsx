import { View, FlatList, RefreshControl, TouchableOpacity} from 'react-native';
import Post from "../components/Post";
import React, {useEffect, useState} from "react";
import {axiosInstance} from "../API";
import SearchBar from "../components/SearchBar";

const HomeScreen =({ navigation }) => {

    const [isLoading, setIsLoading] = useState(true)
    const [items, setItems] = useState([])
    const [query, setQuery] = useState("")
    const [clicked, setClicked] = useState(false)

    // .get(`/audiences/search?query=${query}`)
    const fetchPosts = () => {
        setIsLoading(true)

        let endpoint = "/api/diseases/";

        if (query.trim() !== "") {
            endpoint += `?disease_name=${encodeURIComponent(query)}`;
        }

        axiosInstance
            .get(endpoint)
            .then(({data}) => {
                setItems(data)
                // console.log(data)
            })
            .catch((err) => {
                alert(err)
            })
            .finally(() => {
                setIsLoading(false)
            })
    }

    useEffect(fetchPosts, [query])

    const renderItem = ({ item }) => (
        <TouchableOpacity onPress={() => navigation.navigate("FullPost", {id: item.id, name: item.disease_name })}>
            <Post navigation={navigation} id={item.id} name={item.disease_name} />
        </TouchableOpacity>
    )

    return (
        
        <View style={{ paddingBottom: 75 }}>
            {/* <TextInput
                style={styles.searchInput}
                placeholder="Введите запрос..."
                value={query}
                onChangeText={(text) => setQuery(text)}
            /> */}

            <SearchBar searchPhrase={query} setSearchPhrase={setQuery} clicked={clicked} setClicked={setClicked} />

            <FlatList
                refreshControl={<RefreshControl refreshing={isLoading} onRefresh={fetchPosts} />}
                data={items}
                renderItem={renderItem}
            />

        </View>
    );
}

export default HomeScreen;