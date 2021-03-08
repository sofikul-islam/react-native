import React, { Component } from 'react';
import {Button,View,Text} from "react-native";
import { createStackNavigator } from '@react-navigation/stack';


const SecondStack = createStackNavigator();

class SecondScreen extends Component {
    render() {
        const {navigation} = this.props;
        return (
             <View>
                 <Text>THIS IS SECOND SCREEN </Text>
                 <Button
                    title="go to home"
                    onPress={() => navigation.goBack()}
                  />
             </View>
        )
    }
}
export default SecondScreen;