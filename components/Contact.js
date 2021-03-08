import React,{Component} from "react";
import {Text,View,Image ,Button}  from "react-native";
class Contact extends React.Component{
         render(){
           return (
              <View>
                   <Text>THIS IS CONTACT COMPONENT</Text>
                   <Text>{this.props.name}</Text>
              </View>
           )
         }
}


class Services extends React.Component{
       render(){
          return (
             <>

               <Text> THIS IS OUR SERVICES COMPONENT </Text>

             </>
          );
       }
}


export default Contact;
