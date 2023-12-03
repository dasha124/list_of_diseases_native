import { View, Text } from 'react-native';
import React from 'react';



const DiseaseItemScreen = () => {
    return (
        <View style={styles.screen}>
            <Text>
                Item screen
            </Text>
        </View>
    )
}

export default DiseaseItemScreen;

const styles = StyleSheet.create({
    screen: {
        padding: 20,
    }

})

// export default function DiseaseItemScreen({route}) {
//     const {id} = route.params;
//     return (
//         <View>
//             <Text>{id}</Text>
//         </View>
//     );
// }

