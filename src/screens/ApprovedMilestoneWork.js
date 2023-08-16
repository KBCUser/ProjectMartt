import {View,Text,StyleSheet,TextInput,TouchableOpacity,Alert,Image,Picker} from "react-native";
import React,{useState,useEffect} from "react";
import Checkbox from "expo-checkbox";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import InvestorHome from "./InvestorHome";


const ApprovedMilestoneWork = ({route,navigation}) => {

    const myEmail=route.params.myEmail; 
    const idea_id=route.params.idea_id; 
    const milestone_id=route.params.milestone_id; 
    var fetchInsertApi="https://lrtextile.com.pk/projectmart/investor/approved_milestone.php";
        var headers={
            'Accept':'application/json',
            'Content-Type':'application.json'
        };

        var Data={
            milestone_id:milestone_id,
            

        };
        fetch(fetchInsertApi,
            {
               method:'POST',
               headers:headers,
               body:JSON.stringify(Data), 
            }).then((response) => response.json())
            .then((response) =>
             {
                 if(response[0].Message == "Milestone has been Approved")
                 {
                    
             
                    navigation.navigate("ViewProjectMilestone",{myEmail : myEmail,idea_id:idea_id});
                 }
                 else{
                  alert('Milestone Not been Approved Please Try Again');
                  navigation.navigate("ViewProjectMilestone",{myEmail : myEmail,idea_id:idea_id});
                 }
             }
            ).catch((error) =>
            {
                alert("Error"+error);
            });
   
   
  
   
      return(
       
       <View style={{marginTop:30}}>
        <Text>Approving Milestone Please Wait...!</Text>
       </View>
   
      );
   
   };

   export default ApprovedMilestoneWork;