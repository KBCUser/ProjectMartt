import {View,Text,StyleSheet,TextInput,TouchableOpacity,Alert,Image} from "react-native";
import React,{useState} from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


const NewPassword = ({route,navigation}) => {
    
    const [verifyCode,setverifyCode] = useState("");
    const myEmail=route.params.myEmail;
    const type=route.params.type;


   
    const submit= () =>{
        if(verifyCode.length >= 6)
        {
        var fetchInsertApi="https://lrtextile.com.pk/projectmart/change_password.php";
        var headers={
            'Accept':'application/json',
            'Content-Type':'application.json'
        };

        var Data={
            s_email:myEmail,
            verify_code:verifyCode,
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
                 if(response[0].Message == "Change Successfully")
                 {
                    navigation.navigate("Login");
                 }
                 else{
                  alert(response[0].Message);
                 }
             }
            ).catch((error) =>
            {
                alert("Error"+error);
            });
        }
        else{
            alert("Password Length is 6 Required");
        }

    };
   
      return(
        <View style={styles.mainscreen}>
            <View>
             <Image style={styles.imagestyle}
              source={require("../../assets/projectmart.png")}
             />
             </View>
            <View>
            <Text style={styles.mainhaider}>New Password</Text>
            <Text style={styles.description}>Enter the new password & then login again.</Text>
            </View>

      
         <View style={styles.verifys}>
             <Text style={styles.labels}>Enter Your New Password</Text>
             <TextInput 
              style={styles.textinput}
              autoCapitalize="none"
              selectionColor="#f9b347"
              autoCorrect={false}
              value={verifyCode}
              onChangeText={(actualdata) => setverifyCode(actualdata)}
             />
         </View>
   
         
       
       
       
       
   
         <TouchableOpacity style={styles.touchopacity}

        onPress={() => submit()}
       >
           <Text style={styles.buttonstyle}>Change Now</Text>
   
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

export default NewPassword;