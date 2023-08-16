import {View,Text,StyleSheet,TextInput,TouchableOpacity,Alert,Image,Picker,ScrollView} from "react-native";
import React,{useState,useEffect} from "react";
import Checkbox from "expo-checkbox";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';



const UpdateProfileRequest = ({route,navigation}) => {

    const myEmail=route.params.myEmail; 
    const type=route.params.type; 
    const [agree,setagree]=useState(false);
    const [userName,setuserName] = useState("");

  
    const [phoneNo,setphoneNo] = useState("");
    const [userAddress,setuserAddress] = useState("");
    const [bankname,setbankname] = useState("");
    const [accountno,setaccountno] = useState("");

    const getUserDate = async () =>{
        if(bankname == "")
        {
        try {
            const response = await fetch("https://lrtextile.com.pk/projectmart/getuser_detail.php?semail="+myEmail+"&type="+type);
            const MyData=await response.json();
            // setmyUserData(MyData);
            if(bankname
                 == "")
            {
                setbankname(MyData[0].bank_name);

                setaccountno(MyData[0].account_no);

                setuserName(MyData[0].p_name);
                setphoneNo(MyData[0].p_phone);
                setuserAddress(MyData[0].p_address);
            
                if(MyData[0].profile_request == "NotAllow")
                {
                    navigation.navigate("ProfileRequest",{myEmail : myEmail,type:type});
                }
            
        }
            //  alert(MyData);
    
        } catch (error) {
            console.log(error);
        }
       }
    };
    
    useEffect( () => {
      getUserDate();
    }),[];
   
    const submit= () =>{
        var fetchInsertApi="https://lrtextile.com.pk/projectmart/update_profile.php";
        var headers={
            'Accept':'application/json',
            'Content-Type':'application.json'
        };

        var Data={
            s_email:myEmail,
            bank_name:bankname,
            account_no:accountno,
            p_name:userName,
            p_phone:phoneNo,
            p_address:userAddress,
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
                 if(response[0].Message == "profile update")
                 {
                    alert('Profile Updated Successfully');
                    
                 }
                 
                   else {
                    alert(response[0].Message);
                   }
             }
            ).catch((error) =>
            {
                alert("Error"+error);
            });
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
            <Text style={styles.mainhaider}>Update Profile</Text>
            <Text style={styles.description}>Update your bank account detail!</Text>
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
             <Text style={styles.labels}>Enter Your Bank Name</Text>
             <TextInput 
              style={styles.textinput}
              autoCapitalize="none"
              autoCorrect={false}
              selectionColor="#f9b347"
              value={bankname}
              onChangeText={(actualdata) => setbankname(actualdata)}
             />
         </View>
   
         <View>
             <Text style={styles.labels}>Enter Your Account No</Text>
             <TextInput 
              style={styles.textinput}
              autoCapitalize="none"
              selectionColor="#f9b347"
              autoCorrect={false}
              
              value={accountno}
              onChangeText={(actualdata) => setaccountno(actualdata)}
             />
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
           <Text style={styles.buttonstyle}>Update Now</Text>
   
         </TouchableOpacity>
             
   
        </View>
        </ScrollView>
   
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
   export default UpdateProfileRequest;