import {View,Text,StyleSheet,TextInput,Button,TouchableOpacity,Alert,Image,FlatList,ScrollView} from "react-native";
import React,{useState,useEffect} from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Constants } from "expo-constants";




const IdeaMilestone = ({route,navigation}) => {
    const myEmail=route.params.myEmail; 
    const [workingone,setworkingone] = useState("");
    const [amountrelone,setamountrelone] = useState("");
    const [workingtwo,setworkingtwo] = useState("");
    const [amountreltwo,setamountreltwo] = useState("");
    const [workingthree,setworkingthree] = useState("");
    const [amountrelthree,setamountrelthree] = useState("");
    const [workingfour,setworkingfour] = useState("");
    const [amountrelfour,setamountrelfour] = useState("");
    const [workingfive,setworkingfive] = useState("");
    const [amountrelfive,setamountrelfive] = useState("");
    const [workingsix,setworkingsix] = useState("");
    const [amountrelsix,setamountrelsix] = useState("");
    const [workingseven,setworkingseven] = useState("");
    const [amountrelseven,setamountrelseven] = useState("");
    const [workingeight,setworkingeight] = useState("");
    const [amountreleight,setamountreleight] = useState("");

    let sources="";

    
   
    const submit= () =>{
        if(workingone !="" || amountrelone !="" )
        {
        var fetchInsertApi="https://lrtextile.com.pk/projectmart/pitcher/add_milestone.php";
        var headers={
            'Accept':'application/json',
            'Content-Type':'application.json'
        };

        var Data={
            s_email:myEmail,
            workingone:workingone,
            amountrelone:amountrelone,
            workingtwo:workingtwo,
            amountreltwo:amountreltwo,
            workingthree:workingthree,
            amountrelthree:amountrelthree,
            workingfour:workingfour,
            amountrelfour:amountrelfour,
            workingfive:workingfive,
            amountrelfive:amountrelfive,
            workingsix:workingsix,
            amountrelsix:amountrelsix,
            workingseven:workingseven,
            amountrelseven:amountrelseven,
            workingeight:workingeight,
            amountreleight:amountreleight,

        };
        fetch(fetchInsertApi,
            {
               method:'POST',
               headers:headers,
               body:JSON.stringify(Data), 
            }).then((response) => response.json())
            .then((response) =>
             {
                 if(response[0].Message == "Idea has been Register")
                 {
                    
             
                    navigation.navigate("MyIdeas",{myEmail : myEmail});
                 }
                 else{
                  alert('Idea Not been Register Please Try Again');
                 }
             }
            ).catch((error) =>
            {
                alert("Error"+error);
            });

        }
        else{
            alert('please fill all the field');
        }

    };
    

     return (
        <ScrollView
      
        >
        <View style={styles.mainscreen}>
           
            <View>
            <Text style={styles.mainhaider}>Add Millestone</Text>
            </View>

            <TouchableOpacity style={[styles.touchopacity,
          {
             backgroundColor:"#f9b347",
          },
       ]}
        onPress={() => submit()}
       >
           <Text style={styles.buttonstyle}>Add Idea</Text>
   
         </TouchableOpacity>
             
      
            <View>
             <Text style={styles.labels}>Working Detail 1</Text>
             <TextInput 
              style={styles.textinput}
              autoCapitalize="none"
              selectionColor="#f9b347"
              autoCorrect={false}
              value={workingone}
              onChangeText={(actualdata) => setworkingone(actualdata)}
             />
         </View>
         <View>
             <Text style={styles.labels}>No of Day Deliver</Text>
             <TextInput 
              style={styles.textinput}
              autoCapitalize="none"
              selectionColor="#f9b347"
              autoCorrect={false}
              value={amountrelone}
              keyboardType='numeric'
              onChangeText={(actualdata) => setamountrelone(actualdata)}
             />
         </View>

         <View>
             <Text style={styles.labels}>Working Detail 2</Text>
             <TextInput 
              style={styles.textinput}
              autoCapitalize="none"
              selectionColor="#f9b347"
              autoCorrect={false}
              value={workingtwo}
              onChangeText={(actualdata) => setworkingtwo(actualdata)}
             />
         </View>
         <View>
             <Text style={styles.labels}>No of Day Deliver</Text>
             <TextInput 
              style={styles.textinput}
              autoCapitalize="none"
              selectionColor="#f9b347"
              autoCorrect={false}
              keyboardType='numeric'
              value={amountreltwo}
              onChangeText={(actualdata) => setamountreltwo(actualdata)}
             />
         </View> 

         <View>
             <Text style={styles.labels}>Working Detail 3</Text>
             <TextInput 
              style={styles.textinput}
              autoCapitalize="none"
              selectionColor="#f9b347"
              autoCorrect={false}
              value={workingthree}
              onChangeText={(actualdata) => setworkingthree(actualdata)}
             />
         </View>
         <View>
             <Text style={styles.labels}>No of Day Deliver</Text>
             <TextInput 
              style={styles.textinput}
              autoCapitalize="none"
              selectionColor="#f9b347"
              autoCorrect={false}
              keyboardType='numeric'
              value={amountrelthree}
              onChangeText={(actualdata) => setamountrelthree(actualdata)}
             />
         </View> 

         <View>
             <Text style={styles.labels}>Working Detail 4</Text>
             <TextInput 
              style={styles.textinput}
              autoCapitalize="none"
              selectionColor="#f9b347"
              autoCorrect={false}
              value={workingfour}
              onChangeText={(actualdata) => setworkingfour(actualdata)}
             />
         </View>
         <View>
             <Text style={styles.labels}>No of Day Deliver</Text>
             <TextInput 
              style={styles.textinput}
              autoCapitalize="none"
              selectionColor="#f9b347"
              autoCorrect={false}
              keyboardType='numeric'
              value={amountrelfour}
              onChangeText={(actualdata) => setamountrelfour(actualdata)}
             />
         </View> 

         <View>
             <Text style={styles.labels}>Working Detail 5</Text>
             <TextInput 
              style={styles.textinput}
              autoCapitalize="none"
              selectionColor="#f9b347"
              autoCorrect={false}
              value={workingfive}
              onChangeText={(actualdata) => setworkingfive(actualdata)}
             />
         </View>
         <View>
             <Text style={styles.labels}>No of Day Deliver</Text>
             <TextInput 
              style={styles.textinput}
              autoCapitalize="none"
              selectionColor="#f9b347"
              autoCorrect={false}
              keyboardType='numeric'
              value={amountrelfive}
              onChangeText={(actualdata) => setamountrelfive(actualdata)}
             />
         </View> 

         <View>
             <Text style={styles.labels}>Working Detail 6</Text>
             <TextInput 
              style={styles.textinput}
              autoCapitalize="none"
              selectionColor="#f9b347"
              autoCorrect={false}
              value={workingsix}
              onChangeText={(actualdata) => setworkingsix(actualdata)}
             />
         </View>
         <View>
             <Text style={styles.labels}>No of Day Deliver</Text>
             <TextInput 
              style={styles.textinput}
              autoCapitalize="none"
              selectionColor="#f9b347"
              autoCorrect={false}
              keyboardType='numeric'
              value={amountrelsix}
              onChangeText={(actualdata) => setamountrelsix(actualdata)}
             />
         </View> 

         <View>
             <Text style={styles.labels}>Working Detail 7</Text>
             <TextInput 
              style={styles.textinput}
              autoCapitalize="none"
              selectionColor="#f9b347"
              autoCorrect={false}
              value={workingseven}
              onChangeText={(actualdata) => setworkingseven(actualdata)}
             />
         </View>
         <View>
             <Text style={styles.labels}>No of Day Deliver</Text>
             <TextInput 
              style={styles.textinput}
              autoCapitalize="none"
              selectionColor="#f9b347"
              autoCorrect={false}
              keyboardType='numeric'
              value={amountrelseven}
              onChangeText={(actualdata) => setamountrelseven(actualdata)}
             />
         </View> 

         <View>
             <Text style={styles.labels}>Working Detail 8</Text>
             <TextInput 
              style={styles.textinput}
              autoCapitalize="none"
              selectionColor="#f9b347"
              autoCorrect={false}
              value={workingeight}
              onChangeText={(actualdata) => setworkingeight(actualdata)}
             />
         </View>
         <View>
             <Text style={styles.labels}>No of Day Deliver</Text>
             <TextInput 
              style={styles.textinput}
              autoCapitalize="none"
              selectionColor="#f9b347"
              autoCorrect={false}
              keyboardType='numeric'
              value={amountreleight}
              onChangeText={(actualdata) => setamountreleight(actualdata)}
             />
         </View> 
         
       
       
   
         
   
        </View>

        </ScrollView>
   
   
      );    
 };
 
 
 
 const styles = StyleSheet.create({
         
    mainscreen:{
   
        padding:20,
        marginTop:5,

 
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
     mainhaider:{
         fontSize:20,
         marginTop:10,
         fontWeight:"bold",
         color:"#f9b347",
         textAlign:"center"
 
     },
     description:{
         color:"grey",
         marginTop:4,
     },
     labels:{
         color:"grey",
         marginTop:15,
         fontWeight:"bold"
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
     buttonstyle2:{
        textAlign:"center",
        padding:8,
        color:"white",
        marginTop:8
    },
     touchopacity:{
         marginTop:15,
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
 
 
 export default IdeaMilestone;