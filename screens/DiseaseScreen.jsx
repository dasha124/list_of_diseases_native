import React, {useEffect, useState} from 'react'
// import styled from 'styled-components/native'
import {View} from "react-native";
// import {Load} from "../components/Load";
import {axiosInstance} from "../API";
// import {COURSES, EDUCATION_TYPES} from "../consts";
import { StyleSheet } from 'react-native';





const DiseaseScreen = ({ route, navigation }) => {

    const [isLoading, setIsLoading] = useState(true)
    const [data, setData] = useState()

    const { id, name } = route.params

    const fetch = () => {
        navigation.setOptions({
            name,
        })

        axiosInstance
            .get("/disease/" + id)
            .then(({data}) => {
                setData(data)
            })
            .catch((err) => {
                console.log(err)
                alert("Ошибка, не удалось получить данные о заболевании")
            })
            .finally(() => {
                setIsLoading(false)
            })
    }

    useEffect(fetch, [])

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

    // const facultyImage = `http://192.168.2.124:8000/api/diseases/${data.disease.id}/icon/`

    return (
        <View style={{ padding: 20 }}>
            {/* <PostImage source={{uri: facultyImage}} /> */}
            {/* <PostDetails>
                <PostText>
                    Название: {data.name}
                </PostText>

                <PostText>
                    Курс: {COURSES.find(course => course.id === data.course).name}
                </PostText> 

                <PostText>
                    Вариант обучения: {EDUCATION_TYPES.find(course => course.id === data.education_type).name}
                </PostText>

            </PostDetails> */}

            <Text style={styles.text}>{data.name}  </Text>

        </View>
    )
}

export default DiseaseScreen;

const styles = StyleSheet.create({
    image: {
        borderRadius: 10,
        // width
        height: 250,
        width: 250,
        // margin-bottom: 20,
        // margin
    },
    view:{
        // flex-direction: column;
        // flexDiracto
        flexDirection: 'column'
    },
    text:{
        fontSize: 18,


    }

  });
  



