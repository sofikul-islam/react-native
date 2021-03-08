import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Appbar } from 'react-native-paper';
import { Button, View ,Text} from 'react-native';
import HomeScreen from "./src/Pages/HomeScreen";
import SecondScreen from "./src/Pages/SecondScreen";
import DeteilScreen from "./src/Pages/DeteilScreen";


const Drawer = createDrawerNavigator();
const sst
function App() {
  return (
    <NavigationContainer>
    <Drawer.Navigator initialRouteName="Deteil">
      <Drawer.Screen name="Home" component={HomeScreen} />
      <Drawer.Screen name="Second" component={SecondScreen} />
      <Drawer.Screen name="Deteil" component={DeteilScreen} />
    </Drawer.Navigator>
    </NavigationContainer>
  );
}


export default App;