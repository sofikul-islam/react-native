import React from "react";
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import HomeScreen from "./HomeScreen";
import SecondScreen from "./SecondScreen";
import Icon from 'react-native-vector-icons/FontAwesome';
const Tab = createMaterialBottomTabNavigator();

function DeteilScreen() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      activeColor="white"
      shifting="true"
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarColor:'skyblue',  
          tabBarLabel: 'Home',
          tabBarIcon: ({ color }) => (
            <Icon name="home" color={color} size={26} />
          ),
        }}
      />
       <Tab.Screen
        name="Second"
        component={SecondScreen}
        options={{
          tabBarLabel: 'Second',
          tabBarColor:'#694fad',  
          tabBarIcon: ({ color }) => (
            <Icon name="bell" color={color} size={26} />
          ),
        }}
      />
      
    </Tab.Navigator>
  );
}
export default DeteilScreen;