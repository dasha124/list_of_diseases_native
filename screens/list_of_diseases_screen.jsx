import { View, Text, Button } from 'react-native';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setItems } from '../store/itemSlice';
import DiseaseCard from '../components/DiseaseCard';
import { axiosInstance } from '../API';
import { ScrollView } from 'react-native';
import { StyleSheet } from 'react-native';




const ListOfDiseasesScreen = () => {
    return (
        <View style={styles.screen}>
            <Text>
                Home screen
            </Text>
        </View>
    )
}
export default ListOfDiseasesScreen;

const styles = StyleSheet.create({
    screen: {
        padding: 20,
    }

})


// export default function DiseasesList({ navigation }) {
//     const dispatch = useDispatch();
//     const { items } = useSelector((store) => store.item);

//     // useEffect(() => {
        
//     //     async function getAllDevices() {
            
//     //         await axiosInstance.get('/item').then((response) => dispatch(setItems(response?.data)));
//     //     }
//     //     getAllDevices();
//     // }, [dispatch]);

//     // useEffect(() => {
//     //     async function getAllDevices() {
//     //         try {
//     //             const response = await axiosInstance.get('/diseases');
//     //             dispatch(setItems(response?.data));
//     //         } catch (error) {
//     //             console.log('Ошибка запроса', error);
//     //             throw error;
//     //         }
//     //     }
//     //     getAllDevices();
//     // }, [dispatch]);

//     // return <View>{!!items && items.map((item) => <DiseaseCard key={item.id} {...item} />)}</View>;
//     return (
//         <ScrollView>
//             {/* <View style={styles.page}> */}
//             <View>
//                 {!!items &&
//                     items.map((item) => <DiseaseCard key={item.id} {...item} navigation={navigation} />)}
//             </View>
//         </ScrollView>
//     );

// }

// // const styles = StyleSheet.create({
// //     page: {
// //         display: 'flex',
// //         width: '100%',
// //         justifyContent: 'center',
// //         alignItems: 'center',
// //         backgroundColor: '#2a2a2a',
// //     },
// // });

//     // return (
//     //     <View>
//     //         <Text>ShopScreen</Text>
//     //         <Button title='Go to disease_item screen' onPress={() => navigation.navigate('disease_item')} />
//     //     </View>
//     // );
