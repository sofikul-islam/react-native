import React,{Component} from 'react';
import { View , Text ,Button} from 'react-native';
import { Appbar } from 'react-native-paper';
import SecondScreen from "./SecondScreen";
import Icon from 'react-native-vector-icons/FontAwesome';
import { createStackNavigator } from '@react-navigation/stack';
import DeteilScreen from "./DeteilScreen";

const HomeStack = createStackNavigator();

class HomeScreen extends Component {
  render() {
    const {navigation} = this.props;
    return (

        <View>
             <Appbar.Header style={{backgroundColor:'#046EE5'}}>
              <Icon name="bars" size={26} color="white" style={{marginLeft:8}}
                 onPress={()=>navigation.openDrawer()}
               />
              <Appbar.Content title="Home"/>
              <Appbar.Action icon="magnify" />
              <Appbar.Action icon="dots-vertical"/>
            </Appbar.Header>
           <Button 
              
              title="go to second page"
              onPress={()=>navigation.navigate('Second')}
              
      />
      <HomeStack.Navigator>
               <HomeStack.Screen name="Second" component={SecondScreen} />
      </HomeStack.Navigator>
      </View>

      
    );
  }
}
export default HomeScreen;
