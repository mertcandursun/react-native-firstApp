import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import {
  NavigationContainer,
  createStaticNavigation,
  useNavigation,
} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './src/pages/home';
import Languages from './src/pages/languages';
import Csharp from './src/pages/c-sharp';

const Stack = createNativeStackNavigator();

export default function App() {  
  return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName='Home'>
          <Stack.Screen name='Home' component={Home}/>
          <Stack.Screen name='Languages' component={Languages}/>
          <Stack.Screen name='C#' component={Csharp}/>
        </Stack.Navigator>
      </NavigationContainer>
  );
}

const styles = StyleSheet.create({

});
