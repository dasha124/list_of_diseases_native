import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { store } from './store';
import { Provider } from 'react-redux';
import DiseaseItemScreen from './screens/disease_item_screen';
import ListOfDiseasesScreen from './screens/list_of_diseases_screen';


const Stack = createNativeStackNavigator();

export default function App() {
    return (
      <NavigationContainer>
      //       <Stack.Navigator>
      //           <Stack.Screen name='ListOfDiseases' component={DiseaseItemScreen} />
      //           <Stack.Screen name='DiseaseItem' component={ListOfDiseasesScreen} />
      //       </Stack.Navigator>
      //   </NavigationContainer>
      // <Provider store={store}>
      //   <NavigationContainer>
      //       <Stack.Navigator>
      //           <Stack.Screen name='ListOfDiseases' component={DiseaseItemScreen} />
      //           <Stack.Screen name='DiseaseItem' component={ListOfDiseasesScreen} />
      //       </Stack.Navigator>
      //   </NavigationContainer>
      // </Provider>
    );
}