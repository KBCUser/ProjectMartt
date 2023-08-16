import {View,Text,StyleSheet,TextInput,TouchableOpacity,Alert,Image,FlatList} from "react-native";
import React,{useState} from "react";
import Checkbox from "expo-checkbox";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Picker } from "@react-native-picker/picker";


const ChatMessengers = ({route,navigation}) => {
    const sendemail=route.params.sendemail; 
    const recemail=route.params.recemail;
    
    
    const [messagetext,setmessagetext] = useState("");

    const [productdata,setproductdata] = useState("");

  var fetchInsertApi2="https://lrtextile.com.pk/projectmart/chats/fetchmessage.php?recemail="+recemail+"&sendemail="+sendemail;
      var headers={
          'Accept':'application/json',
          'Content-Type':'application.json'
      };

   
      fetch(fetchInsertApi2,
          {
             method:'GET',
             headers:headers, 
          }).then((response) => response.json())
          .then((response) =>
           {
               console.log(response);
               setproductdata(response);
           
           }
          ).catch((error) =>
          {
              alert("Error"+error);
          });
   
    const submit= () =>{
     
            if(messagetext !="")
            {
            var fetchInsertApi="https://lrtextile.com.pk/projectmart/chats/messagesend.php";
            var headers={
                'Accept':'application/json',
                'Content-Type':'application.json'
            };
    
            var Data={
                senderemail:sendemail,
                recemail:recemail,
                msgtext:messagetext,
                
                
            };
            fetch(fetchInsertApi,
                {
                   method:'POST',
                   headers:headers,
                   body:JSON.stringify(Data), 
                }).then((response) => response.json())
                .then((response) =>
                 {
                    setmessagetext("");
                    //  if(response[0].Message == "Payment has been Transfer")
                    //  {
                        
                 
                    //     navigation.navigate("InvestorMainScreen",{myEmail : myEmail});
                    //  }
                    //  else{
                    //   alert('Payment Not been Transfer Please Try Again');
                    //  }
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
        
    
   
      return(
        <View style={styles.mainscreen}>
            
            <View>
            <Text style={styles.mainhaider}>Email : {recemail}</Text>
            </View>
    <View  style={{height:500}}>
            <FlatList 
              keyExtractor={(key) =>{
         return key.product_id;
             }}
             showsHorizontalScrollIndicator={false}
       
     data={productdata}
     styles={styles.flatstyle}
     renderItem={(element)=>{
         return (
          <View style={styles.container}> 
        
    
          
          
          
          <View style={styles.item2}>
          {(() => {
            if (element.item.sender_email == sendemail) {
              return (
                <Text style={{textAlign:'right',flex:1,backgroundColor:'#D70026',padding:10,marginLeft:90,color:'white'}}> {element.item.msg_text}</Text>
              )
            }
        })()}
        {(() => {
        if (element.item.sender_email != sendemail) {
              return (
                <Text style={{textAlign:'left',flex:1,backgroundColor:'#F9FAFC',padding:10,width:'70%'}}>  {element.item.msg_text}</Text>
              )
            }
        })()}
         
          </View>
          
          
          </View>


         );
     }}
     />
         </View>

         <View style={styles.fotstyle}>
         <View>
             <Text style={styles.labels}>Message</Text>
             <TextInput 
              style={styles.textinput}
              autoCapitalize="none"
              autoCorrect={false}
              selectionColor="#f9b347"
              value={messagetext}
              onChangeText={(actualdata) => setmessagetext(actualdata)}
             />
         </View>
       
         <TouchableOpacity style={[styles.touchopacity,
          {
             backgroundColor:"#f9b347",
          },
       ]}
        onPress={() => submit()}
       >
           <Text style={styles.buttonstyle}>Send Message</Text>
   
         </TouchableOpacity>
         </View> 
   
        </View>
   
   
      );
   
   };
   const styles = StyleSheet.create({
       
      
    mainscreen:{
   
          padding:10,
          marginTop:5,

   
       },
       imagestyle:{
        flexDirection: 'row', justifyContent: 'space-between',
        
       },
       container: {
         flex:1,
         backgroundColor: '#fff',
        padding:12,
       },
       mainhaider:{
           fontSize:20,
           fontWeight:"bold",
           color:"#f9b347",
           marginBottom:10
   
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
      chatfield:{
  marginTop:200
      },
      flatstyle:{
        flex:1,
    
       flexGrow: 0
      },
      touchreg:{
         marginTop:25
      },
     
     });
   
   export default ChatMessengers;