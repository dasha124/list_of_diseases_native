import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import DiseaseScreen from './screens/DiseaseScreen';
import DiseasesScreen from './screens/DiseasesScreen';
import { store } from './store';
import { Provider } from 'react-redux';

const Stack = createNativeStackNavigator()

export default function App() {
  return (
    //   <Provider store={store}>
    //     <NavigationContainer>
    //     <Stack.Navigator>
    //       <Stack.Screen name="Заболевания" component={DiseasesScreen} />    
    //       <Stack.Screen name="Заболевание" component={DiseaseScreen} />    
    //     </Stack.Navigator>
    //   </NavigationContainer>
    // </Provider>
    <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Заболевания" component={DiseasesScreen} />    
          <Stack.Screen name="Заболевание" component={DiseaseScreen} />    
        </Stack.Navigator>
      </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});