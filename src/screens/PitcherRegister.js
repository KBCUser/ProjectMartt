import {View,Text,StyleSheet,TextInput,TouchableOpacity,Alert,Image,ScrollView} from "react-native";
import React,{useState} from "react";
import Checkbox from "expo-checkbox";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Picker } from "@react-native-picker/picker";



const PitcherRegister = ({navigation}) => {
    const [agree,setagree]=useState(false);
    const [userName,setuserName] = useState("");
    const [userEmail,setuserEmail] = useState("");
    const [password,setpassword] = useState("");
    const [phoneNo,setphoneNo] = useState("");
    const [userAddress,setuserAddress] = useState("");
    const [bankname,setbankname] = useState("");
    const [accountnumber,setaccountnumber] = useState("");
   
    const submit= () =>{
        if(userName !="" || userEmail !="" || password !="" || phoneNo !="" || userAddress !="" || bankname !=""  || accountnumber !="")
        {
            
         if(password.length >= 6)
         {   
            if(phoneNo.length >= 10)
            {
              if(accountnumber.length == 14)
            {
        var fetchInsertApi="https://lrtextile.com.pk/projectmart/pitcher/pitcher_register.php";
        var headers={
            'Accept':'application/json',
            'Content-Type':'application.json'
        };

        var Data={
            s_name:userName,
            s_email:userEmail,
            s_password:password,
            phone_no:phoneNo,
            user_address:userAddress,
            bank_name:bankname,
            account_no:accountnumber
        };
        fetch(fetchInsertApi,
            {
               method:'POST',
               headers:headers,
               body:JSON.stringify(Data), 
            }).then((response) => response.json())
            .then((response) =>
             {
                 if(response[0].Message == "Pitcher has been Register")
                 {

                   
                    navigation.navigate("EmailVerifcation",{myEmail : `${userEmail}`,type:'pitcher'});
                 }
                else if(response[0].Message == "Email Already Exist")
                 {
                    alert('Email Already Exist Please Try Again');
                 }
                 
                 else if(response[0].Message == "Pitcher Not been Register Please Try Again"){
                  alert('Pitcher Has Not Been Register Please Try Again');
                 }
             }
            ).catch((error) =>
            {
                console.log(error);
                alert("Error"+error);
            });
          }else{alert("Invalid Account No");} }  
          else{alert("Invalid Phone No");} }
          else{alert("Minimum 6 Character in Password Field Required");}

        }else{
            alert("Please Fill All The Field");
        }


    };
   
      return(
        <ScrollView
      
        >
        <View style={styles.mainscreen}>
            <View>
             <Image style={styles.imagestyle}
              source={require("../../assets/projectmart.png")}
             />
             </View>
            <View>
            <Text style={styles.mainhaider}>Pitcher Register</Text>
            </View>

      
            <View>
             <Text style={styles.labels}>Enter Your Name</Text>
             <TextInput 
              style={styles.textinput}
              autoCapitalize="none"
              autoCorrect={false}
              selectionColor="#f9b347"
              value={userName}
              onChangeText={(actualdata) => setuserName(actualdata)}
             />
         </View>
        

         <View>
             <Text style={styles.labels}>Enter Your Email</Text>
             <TextInput 
              style={styles.textinput}
              autoCapitalize="none"
              selectionColor="#f9b347"
              autoCorrect={false}
              value={userEmail}
              onChangeText={(actualdata) => setuserEmail(actualdata)}
             />
         </View>
   
         <View>
             <Text style={styles.labels}>Enter Your Password</Text>
             <TextInput 
              style={styles.textinput}
              autoCapitalize="none"
              selectionColor="#f9b347"
              autoCorrect={false}
              secureTextEntry={true}
              value={password}
              onChangeText={(actualdata) => setpassword(actualdata)}
             />
         </View>
         <View>
             <Text style={styles.labels}>Enter Phone No</Text>
             <TextInput 
              style={styles.textinput}
              autoCapitalize="none"
              selectionColor="#f9b347"
              keyboardType="numeric"
              autoCorrect={false}
              value={phoneNo}
              onChangeText={(actualdata) => setphoneNo(actualdata)}
             />
         </View>
         <View>
             <Text style={styles.labels}>Enter Address</Text>
             <TextInput 
              style={styles.textinput}
              selectionColor="#f9b347"
              autoCapitalize="none"
              autoCorrect={false}
              value={userAddress}
              onChangeText={(actualdata) => setuserAddress(actualdata)}
             />
         </View>
         <View>
             <Text style={styles.labels}>Bank Name</Text>
             <TextInput 
              style={styles.textinput}
              selectionColor="#f9b347"
              autoCapitalize="none"
              autoCorrect={false}
              value={bankname}
              onChangeText={(actualdata) => setbankname(actualdata)}
             />
         </View>
         <View>
             <Text style={styles.labels}>Account/IBAN Number</Text>
             <TextInput 
              style={styles.textinput}
              selectionColor="#f9b347"
              autoCapitalize="none"
              autoCorrect={false}
              keyboardType="numeric"
              value={accountnumber}
              onChangeText={(actualdata) => setaccountnumber(actualdata)}
             />
         </View>

        

         <View>
             <Text style={styles.registerbutton2}>Register as a Investor ?
             <TouchableOpacity style={styles.touchreg}
             onPress={() => navigation.navigate("InvestorRegister")}
             ><Text style={styles.registerbutton}> Register Now</Text>
             </TouchableOpacity> 
             </Text>
         </View>
         <View>
             <Text style={styles.registerbutton2}>Already Have An Account ?
             <TouchableOpacity style={styles.touchreg}
             onPress={() => navigation.navigate("Login")}
             ><Text style={styles.registerbutton}> Login Now</Text>
             </TouchableOpacity> 
             </Text>
         </View>

       
       
         <View  style={styles.checkboxstyle}>
             <Checkbox 
            
              value={agree}
              onValueChange={() => setagree(!agree)}
              color={agree ? "#f9b347" : undefined}
             />
             <Text  style={styles.checkboxtext}>I have Read and agreed all Policy</Text>
         </View>
   
         <TouchableOpacity style={[styles.touchopacity,
          {
             backgroundColor:agree ? "#f9b347" : "grey",
          },
       ]}
        disabled={! agree}
        onPress={() => submit()}
       >
           <Text style={styles.buttonstyle}>Register</Text>
   
         </TouchableOpacity>
             
   
        </View>

        </ScrollView>
   
   
      );
   
   };
   const styles = StyleSheet.create({
       
      
    mainscreen:{
   
          padding:20,
          marginTop:15,

   
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
         fontWeight:'bold'
       
       },
       registerbutton2:{
        marginTop:8,
      },
      touchreg:{
         marginTop:25
      },
     });
   
   
   export default PitcherRegister;