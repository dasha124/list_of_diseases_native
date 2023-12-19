
// import styled from "styled-components/native";
import {Button} from "react-native";


const DiseaseCard = ({navigation, id, name, image}) => {

    // const facultyImage = `http://192.168.1.121:8000/diseases/${faculty.id}/icon/`

    const handlePress = () => {
        navigation.navigate("DiseaseScreen", {id: id, name: name });
    };

    return (
        // <PostView>
        //     <PostDetails>
        //         {/* <PostImage source={{uri: facultyImage}} /> */}
        //         <PostTitleContainer>
        //             <PostTitle>{name}</PostTitle>
        //         </PostTitleContainer>
        //     </PostDetails>
        //     <PostButton>
        //         <Button title='Открыть' onPress={handlePress} />
        //     </PostButton>
        // </PostView>
        <View>

            <Title>{name}</Title>


            <Button title='Открыть' onPress={handlePress} />

        </View>
    )
}
export default DiseaseCard;


// const PostView = styled.View`
//     flex-direction: column;
//     gap: 15px;
//     padding: 15px;
//     margin: 15px;
//     border-width: 1px;
//     border-color: rgba(0, 0, 0, 0.1);
//     border-style: solid;
//     border-radius: 5px;
// `

// const PostImage = styled.Image`
//     width: 60px;
//     height: 60px;
//     border-radius: 12px;
//     margin-right: 12px;
// `

// const PostTitleContainer = styled.Text`
//     flex: 1;
//     align-items: center;
//     justify-content: center;
// `

// const PostTitle = styled.Text`
//     font-size: 18px;
//     font-weight: 700;
// `

// const PostDetails = styled.View`
//     flex-direction: row;
// `

// const PostButton = styled.View`
//     flex: 1;
//     justify-content: center;
//     align-content: center;
// `

