import {View,Text,StyleSheet,TextInput,TouchableOpacity,Alert,Image,Picker} from "react-native";
import React,{useState,useEffect} from "react";
import Checkbox from "expo-checkbox";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import InvestorHome from "./InvestorHome";


const DeleteIdea = ({route,navigation}) => {

    const myEmail=route.params.myEmail; 
    const idea_id=route.params.idea_id; 
    var fetchInsertApi="https://lrtextile.com.pk/projectmart/pitcher/delete_idea.php";
        var headers={
            'Accept':'application/json',
            'Content-Type':'application.json'
        };

        var Data={
            idea_id:idea_id,
            

        };
        fetch(fetchInsertApi,
            {
               method:'POST',
               headers:headers,
               body:JSON.stringify(Data), 
            }).then((response) => response.json())
            .then((response) =>
             {
                 if(response[0].Message == "Idea has been Deleted")
                 {
                    
             
                    navigation.navigate("MyIdeas",{myEmail : myEmail});
                 }
                 else{
                  alert('Idea Not been Deleted Please Try Again');
                  navigation.navigate("MyIdeas",{myEmail : myEmail});
                 }
             }
            ).catch((error) =>
            {
                alert("Error"+error);
            });
   
   
  
   
      return(
       
       <View style={{marginTop:30}}>
        <Text>Deleting Idea Please Wait...!</Text>
       </View>
   
      );
   
   };

   export default DeleteIdea;