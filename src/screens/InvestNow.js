import {View,Text,StyleSheet,TextInput,TouchableOpacity,Alert,Image} from "react-native";
import React,{useState} from "react";
import Checkbox from "expo-checkbox";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Picker } from "@react-native-picker/picker";


const InvestNow = ({route,navigation}) => {
    const ideaid=route.params.ideaid; 
    const myEmail=route.params.myEmail;
    const AmountReq=route.params.AmountReq;
    const ShareEq=route.params.ShareEq;
    const PitcherEmail=route.params.PitcherEmail;
    const alreadyinvest=route.params.alreadyinvest;
    const remaininvest=route.params.remaininvest;
    
    
    const [investamount,setinvestamount] = useState("");
    const submit= () =>{
        if(parseInt(remaininvest) >= parseInt(investamount))
        {
            navigation.navigate("PayNow",{myEmail : `${myEmail}`,ideaid:ideaid,investamount:investamount,PitcherEmail:PitcherEmail});
        
        }
        else{
            alert('Please Enter Less than Remaining Required Amount');
        }
        
    };
   
      return(
        <View style={styles.mainscreen}>
            
            <View>
            <Text style={styles.mainhaider}>Invest Now</Text>
            <Text style={styles.description}>If you want to invest pleae fill this process.</Text>
            <Text style={styles.description}>Amount Required : Rs {`${AmountReq}`}</Text>
            <Text style={styles.description}>Share Equity % :  {`${ShareEq}`} %</Text>
            <Text style={styles.description}>Already Invested : Rs {`${alreadyinvest}`}</Text>
            <Text style={styles.description}>Remaining Required : Rs {`${remaininvest}`}</Text>
            </View>

      
         <View>
             <Text style={styles.labels}>Enter Your Invest Amount</Text>
             <TextInput 
              style={styles.textinput}
              autoCapitalize="none"
              autoCorrect={false}
              selectionColor="#f9b347"
              value={investamount}
              onChangeText={(actualdata) => setinvestamount(actualdata)}
             />
         </View>
   
        
       
         <TouchableOpacity style={[styles.touchopacity,
          {
             backgroundColor:"#f9b347",
          },
       ]}
        onPress={() => submit()}
       >
           <Text style={styles.buttonstyle}>Invest Now</Text>
   
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
       touchopacity:{
           marginTop:15,
       },
       registerbutton:{
         color:"#f9b347",
         fontWeight:"bold",
         paddingTop:10,
       
       },
       registerbutton2:{
        marginTop:5,
      },
      touchreg:{
         marginTop:25
      },
     });
   
   export default InvestNow;