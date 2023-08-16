import {View,Text,StyleSheet,TextInput,TouchableOpacity,Alert,Image} from "react-native";
import React,{useState} from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';



const MeetingLink = ({route,navigation}) => {
    
    const myEmail=route.params.myEmail;
    const meetinglink=route.params.meetinglink;
    const [copiedText, setCopiedText] = useState(meetinglink);

    
      return(
        <View style={styles.mainscreen}>
            <View>
             <Image style={styles.imagestyle}
              source={require("../../assets/zoom_logo.png")}
             />
             </View>
            <View>
            <Text style={styles.mainhaider}>Zoom Meeting Link</Text>
            <Text style={styles.description}>Meeting Link Successfully Created Your Meeting Link Is: </Text>
            <TextInput 
              style={styles.textinput}
              autoCapitalize="none"
              autoCorrect={false}
              
              selectionColor="#f9b347"
              value={copiedText}
              onChangeText={(actualdata) => setCopiedText(actualdata)}
             />
            </View>

      
       
   
         <TouchableOpacity style={styles.touchopacity}

       >
           <Text style={styles.buttonstyle}>Long Press To Copy Text in Above TextField !</Text>
   
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
        flexDirection: 'row', justifyContent: 'space-between',
        width:330,height:120
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

export default MeetingLink;