import {View,Text,StyleSheet,TextInput,TouchableOpacity,Alert,Image} from "react-native";
import React,{useState} from "react";
import Checkbox from "expo-checkbox";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Picker } from "@react-native-picker/picker";


const Login = ({navigation}) => {
    const [agree,setagree]=useState(false);
    const [userName,setuserName] = useState("");
    const [password,setpassword] = useState("");
    const [usertype,setusertype] = useState("Pitcher");
   
    const submit= () =>{
       if(userName !="" || password !="")
       {

        var fetchInsertApi="https://lrtextile.com.pk/projectmart/user_login.php";
        var headers={
            'Accept':'application/json',
            'Content-Type':'application.json'
        };

        var Data={
            s_email:userName,
            s_password:password,
            user_type:usertype

        };
        fetch(fetchInsertApi,
            {
               method:'POST',
               headers:headers,
               body:JSON.stringify(Data), 
            }).then((response) => response.json())
            .then((response) =>
             {
                 if(response[0].Message == "Login Successfully")
                 {
                    if(usertype == "Invester")
                    {
                        navigation.navigate("InvestorDashboard",{myEmail : `${userName}`});
                    }
                    else{
                        navigation.navigate("PitcherHome",{myEmail : `${userName}`});
                    }
                    
                 }
                 else if(response[0].Message == "Email Not Verify"){
                  alert('Email Not Verify');
                 }
                 else if(response[0].Message == "Your Account has been Blocked"){
                    alert('Your Account has been Blocked');
                   }
                   else {
                    alert(response[0].Message);
                   }
             }
            ).catch((error) =>
            {
                alert("Error"+error);
            });

        }
        else{
            alert('Please Fill All The Field');
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
            <Text style={styles.mainhaider}>Investor/Pitcher Login</Text>
            <Text style={styles.description}>You Can Login And Enjoy Unlimited Feature</Text>
            </View>

      
         <View>
             <Text style={styles.labels}>Enter Your Email</Text>
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
             <Text style={styles.labels}>Select User Type</Text>
             <Picker
        selectedValue={usertype}
        style={styles.textinput}
        onValueChange={(itemValue, itemIndex) => setusertype(itemValue)}
      >
     
          <Picker.Item label="Pitcher" value="Pitcher" />
        <Picker.Item label="Invester" value="Invester" />
        
        
      </Picker>
            
         </View>
         <View>
             <Text style={styles.registerbutton2}>Don't Have An Account ?
             <TouchableOpacity style={styles.touchreg}
             onPress={() => navigation.navigate("PitcherRegister")}
             ><Text style={styles.registerbutton}> Register Now</Text>
             </TouchableOpacity> 
             </Text>
         </View>
         <View>
             <Text style={styles.registerbutton2}>Don't Remember  ?
             <TouchableOpacity style={styles.touchreg}
             onPress={() => navigation.navigate("ForgetNow")}
             ><Text style={styles.registerbutton}> Forget Now</Text>
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
           <Text style={styles.buttonstyle}>Login</Text>
   
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
   
   export default Login;