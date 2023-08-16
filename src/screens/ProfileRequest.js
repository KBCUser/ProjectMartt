import {View,Text,StyleSheet,TextInput,TouchableOpacity,Alert,Image,Picker} from "react-native";
import React,{useState,useEffect} from "react";
import Checkbox from "expo-checkbox";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';



const ProfileRequest = ({route,navigation}) => {

    const myEmail=route.params.myEmail; 
    const type=route.params.type; 
   
   
   
    const submit= () =>{

        var fetchInsertApi="https://lrtextile.com.pk/projectmart/profile_request_send.php";
        var headers={
            'Accept':'application/json',
            'Content-Type':'application.json'
        };

        var Data={
            s_email:myEmail,
            type:type
        };
        fetch(fetchInsertApi,
            {
               method:'POST',
               headers:headers,
               body:JSON.stringify(Data), 
            }).then((response) => response.json())
            .then((response) =>
             {
                 if(response[0].Message == "Request Successfully")
                 {
                    if(type == "investor")
              {
                navigation.navigate("InvestorDashboard",{myEmail : myEmail});
              } 
              else{
                navigation.navigate("PitcherHome",{myEmail : myEmail});
              }
                  
                 }
                 else{
                  alert(response[0].Message);
                 }
             }
            ).catch((error) =>
            {
                alert("Error"+error);
            });

    };
   
      return(
        <View style={styles.mainscreen}>
            <View>
             <Image style={styles.imagestyle}
              source={require("../../assets/projectmart.png")}
             />
             </View>
            <View>
            <Text style={styles.mainhaider}>Update Profile Request</Text>
            <Text style={styles.description}>Please send the profile update request , after approval the update request you will be able to update profile!</Text>
            </View>

      
         
   
         
       
       
       
       
   
         <TouchableOpacity style={styles.touchopacity}

        onPress={() => submit()}
       >
           <Text style={styles.buttonstyle}>Request Now</Text>
   
         </TouchableOpacity>
             
   
        </View>
   
   
      );
   
   };
   const styles = StyleSheet.create({
       
      
    mainscreen:{
   
          padding:20,
          marginTop:25,

   
       },
       imagestyle:{
        flexDirection: 'row', justifyContent: 'space-between'
       },
       container: {
         flex: 1,
         backgroundColor: '#fff',
         alignItems: 'center',
         justifyContent: 'center',
       },
       verifys:{
         marginTop:15,
       },
       mainhaider:{
           fontSize:20,
           marginTop:10,
           fontWeight:"bold",
           color:"#f9b347",
   
       },
       description:{
           color:"grey",
           marginTop:4,
       },
       labels:{
           color:"grey",
           marginTop:15,
           fontWeight:"bold",
           
       },
       textinput:{
           borderWidth:1,
           borderColor:"grey",
           paddingHorizontal:15,
           paddingVertical:7,
           borderRadius:1,
           fontSize:18,
       },
       checkboxstyle:{
           marginTop:15,
   
       },
       checkboxtext:{
           marginLeft:30,
           marginTop:-20,
       },
       buttonstyle:{
           textAlign:"center",
           padding:8,
           color:"white",
       },
       touchopacity:{
           marginTop:15,
           backgroundColor:"#f9b347",
       },
       registerbutton:{
         color:"#f9b347",
       
       },
       registerbutton2:{
        marginTop:8,
      },
      touchreg:{
         marginTop:25
      },
     });
   export default ProfileRequest;