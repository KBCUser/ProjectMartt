import {View,Text,StyleSheet,TextInput,TouchableOpacity,Alert,Image} from "react-native";
import React,{useState} from "react";
import Checkbox from "expo-checkbox";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Picker } from "@react-native-picker/picker";


const PayNow = ({route,navigation}) => {
    const ideaid=route.params.ideaid; 
    const myEmail=route.params.myEmail;
    const investamount=route.params.investamount;
    const PitcherEmail=route.params.PitcherEmail;

    
    const [cardnumber,setcardnumber] = useState("");
    const [cvccode,setcvccode] = useState("");
    const [expmonth,setexpmonth] = useState("");
    const [expyear,setexpyear] = useState("");

    const submit= () =>{
     
            if(cardnumber !="" || cvccode !="" || expmonth !="" || expyear !="")
            {
                if(cardnumber.length == 16)
                {
            var fetchInsertApi="https://lrtextile.com.pk/projectmart/investor/pay_now.php";
            var headers={
                'Accept':'application/json',
                'Content-Type':'application.json'
            };
    
            var Data={
                investor_email:myEmail,
                pitcher_email:PitcherEmail,
                idea_id:ideaid,
                investamount:investamount,
                paymenttype:"Investor To Pitcher",
                
            };
            fetch(fetchInsertApi,
                {
                   method:'POST',
                   headers:headers,
                   body:JSON.stringify(Data), 
                }).then((response) => response.json())
                .then((response) =>
                 {
                     if(response[0].Message == "Payment has been Transfer")
                     {
                        
                 
                        navigation.navigate("InvestorMainScreen",{myEmail : myEmail});
                     }
                     else{
                      alert('Payment Not been Transfer Please Try Again');
                     }
                 }
                ).catch((error) =>
                {
                    alert("Error"+error);
                });
    
            }else{alert("Minimum Card Length is 16")}}
            else{
                alert('please fill all the field');
            }
    
        };
        
    
   
      return(
        <View style={styles.mainscreen}>
            
            <View>
            <Text style={styles.mainhaider}>Pay Now</Text>
            <Text style={styles.description}>If you want to invest pleae fill this process.</Text>
            </View>

      
         <View>
             <Text style={styles.labels}>Card Number</Text>
             <TextInput 
              style={styles.textinput}
              autoCapitalize="none"
              autoCorrect={false}
              keyboardType="numeric"
              selectionColor="#f9b347"
              value={cardnumber}
              onChangeText={(actualdata) => setcardnumber(actualdata)}
             />
         </View>
         <View>
             <Text style={styles.labels}>CVC Code</Text>
             <TextInput 
              style={styles.textinput}
              autoCapitalize="none"
              autoCorrect={false}
              maxLength={3}
              keyboardType="numeric"
              selectionColor="#f9b347"
              value={cvccode}
              onChangeText={(actualdata) => setcvccode(actualdata)}
             />
         </View>
         <View>
             <Text style={styles.labels}>Valid Month</Text>
             <TextInput 
              style={styles.textinput}
              autoCapitalize="none"
              autoCorrect={false}
              maxLength={2}
              keyboardType="numeric"
              selectionColor="#f9b347"
              value={expmonth}
              onChangeText={(actualdata) => setexpmonth(actualdata)}
             />
         </View>
         <View>
             <Text style={styles.labels}>Valid Year</Text>
             <TextInput 
              style={styles.textinput}
              autoCapitalize="none"
              autoCorrect={false}
              maxLength={2} 
              keyboardType="numeric"
              selectionColor="#f9b347"
              value={expyear}
              onChangeText={(actualdata) => setexpyear(actualdata)}
             />
         </View>
   
        
       
         <TouchableOpacity style={[styles.touchopacity,
          {
             backgroundColor:"#f9b347",
          },
       ]}
        onPress={() => submit()}
       >
           <Text style={styles.buttonstyle}>Pay Now</Text>
   
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
   
   export default PayNow;