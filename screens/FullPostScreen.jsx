import React, {useEffect, useState} from 'react'
import styled from 'styled-components/native'
import {ScrollView, View} from "react-native";
import {Loading} from "../components/Loader";
import {axiosInstance} from "../API";


const PostImage = styled.Image`
  border-radius: 10px;
  width: 100%;
  height: 350px;
  margin-bottom: 20px;
`

const PostDetails = styled.View`
  flex-direction: column;
`

const PostText = styled.Text`
  flex-direction: column;
  font-size: 18px;
  line-height: 24px;
`



const FullPostScreen = ({ route, navigation }) => {

    const [isLoading, setIsLoading] = useState(true)
    const [data, setData] = useState()

    const { id, name } = route.params

    const fetchGroup = () => {
        navigation.setOptions({
            name
        })

        axiosInstance
            .get("/api/diseases/" + id)
            .then(({data}) => {
                setData(data)
                console.log(data)
            })
            .catch((err) => {
                console.log(err)
                alert("Ошибка, не удалось получить аудиторию :(")
            })
            .finally(() => {
                setIsLoading(false)
            })
    }

    useEffect(fetchGroup, [])

    if (isLoading) {
        return (
            <View style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center'
            }}>
                <Loading />
            </View>
        )
    }


    return (
        <ScrollView style={{ padding: 20 }}>
            {/* <PostImage source={{uri: image}} /> */}
            <PostDetails>
                <PostText>
                    Название: {data.name}
                </PostText>
                {/* <PostText>
                    Описание: {data.info}
                </PostText> */}
            </PostDetails>
        </ScrollView>
    )
}

export default FullPostScreen;