import {View,Text,StyleSheet,TextInput,Button,TouchableOpacity,Alert,Image,FlatList,ScrollView} from "react-native";
import React,{useState,useEffect} from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as ImagePicker from 'expo-image-picker';
import { Constants } from "expo-constants";
import { Picker } from "@react-native-picker/picker";




const AddIdea = ({route,navigation}) => {
    const myEmail=route.params.myEmail; 
    const [ideacategory,setideacategory] = useState("Ecommerce");
    const [ideaname,setideaname] = useState("");
    const [ideasummary,setideasummary] = useState("");
    const [amountrequired,setamountrequired] = useState("");
    const [shareequity,setshareequity] = useState("");
    const [accountno,setaccountno] = useState("");
    const [bankname,setbankname] = useState("");
    const [accounttitle,setaccounttitle] = useState("");
    const [image,setimage] = useState("");
    let sources="";

    
   
    const submit= () =>{
        if(ideaname !="" || ideasummary !="" || amountrequired !="" || shareequity !="" || accountno !="" || accounttitle !=""  || image !="")
        {
        var fetchInsertApi="https://lrtextile.com.pk/projectmart/pitcher/add_idea.php";
        var headers={
            'Accept':'application/json',
            'Content-Type':'application.json'
        };

        var Data={
            s_email:myEmail,
            idea_name:ideaname,
            idea_cat:ideacategory,
            idea_summ:ideasummary,
            amount_req:amountrequired,
            share_equ:shareequity,
            account_no:accountno,
            bank_detail:bankname,
            account_title:accounttitle,

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
                    
             
                    navigation.navigate("IdeaMilestone",{myEmail : myEmail});
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
    useEffect(async () => {

        if(Platform.OS !=='web')
        {
            const {status} = await ImagePicker.requestMediaLibraryPermissionsAsync();
            if(status !== 'granted')
            {
                alert('Permission Denied');
            }
        }
   },[]);
 
   const PickImage = async () =>{
       let result=await ImagePicker.launchImageLibraryAsync({

           mediaTypes:ImagePicker.MediaTypeOptions.All,
           allowsEditing:true,
           aspect:[4,3],
           quality:1
       });
       console.log(result);
       if(!result.cancelled)
       {
           setimage(result.uri);
           uploadImage(result.uri);
           
       }
   }

  const uploadImage=async(image_uri) =>{
     
      let base_url="https://lrtextile.com.pk/projectmart/pitcher/uploadideapic.php";
      let uploadData=new FormData();
      uploadData.append('submit','ok');
      uploadData.append('file',{type:'image/jpg',uri:image_uri,name:'uploadimage.jpg'});
      
  
      fetch(base_url,{
        method:'POST',
        body:uploadData
      }).then((response) => response.json())
      .then((response) =>
       {
           if(response.status)
           {
            //   navigation.navigate("ProductList",{myEmail : myEmail});
           }
           else{
            alert(response.message);
           }
       }
      ).catch((error) =>
      {
          alert("Error"+error);
      });

   }


 


  
 
     return (
        <ScrollView
      
        >
        <View style={styles.mainscreen}>
           
            <View>
            <Text style={styles.mainhaider}>Add Idea</Text>
            </View>

      
            <View>
             <Text style={styles.labels}>Idea Name</Text>
             <TextInput 
              style={styles.textinput}
              autoCapitalize="none"
              selectionColor="#f9b347"
              autoCorrect={false}
              value={ideaname}
              onChangeText={(actualdata) => setideaname(actualdata)}
             />
         </View>
         <View>
             <Text style={styles.labels}>Category</Text>
             <Picker
        selectedValue={ideacategory}
        style={styles.textinput}
        onValueChange={(itemValue, itemIndex) => setideacategory(itemValue)}
      >
     
          <Picker.Item label="Ecommerce" value="Ecommerce" />
        <Picker.Item label="Service Provider" value="Service Provider" />
        <Picker.Item label="Branding" value="Branding" />
        <Picker.Item label="Information Technology" value="Information Technology" />
        <Picker.Item label="Education" value="Education" />
        
        
      </Picker>
         </View>
         <View>
             <Text style={styles.labels}>Summary</Text>
             <TextInput 
              style={styles.textinput}
              autoCapitalize="none"
              selectionColor="#f9b347"
              autoCorrect={false}
              value={ideasummary}
              onChangeText={(actualdata) => setideasummary(actualdata)}
             />
         </View>
        

       
   
        
         <View>
             <Text style={styles.labels}>Amount Required</Text>
             <TextInput 
              style={styles.textinput}
              autoCapitalize="none"
              selectionColor="#f9b347"
              autoCorrect={false}
              keyboardType="numeric"
              value={amountrequired}
              onChangeText={(actualdata) => setamountrequired(actualdata)}
             />
         </View>
         <View>
             <Text style={styles.labels}>Share Equity %</Text>
             <TextInput 
              style={styles.textinput}
              autoCapitalize="none"
              selectionColor="#f9b347"
              autoCorrect={false}
              keyboardType="numeric"
              value={shareequity}
              onChangeText={(actualdata) => setshareequity(actualdata)}
             />
         </View>
         <View>
             <Text style={styles.labels}>Account Number</Text>
             <TextInput 
              style={styles.textinput}
              autoCapitalize="none"
              selectionColor="#f9b347"
              autoCorrect={false}
              value={accountno}
              onChangeText={(actualdata) => setaccountno(actualdata)}
             />
         </View>
         <View>
             <Text style={styles.labels}>Bank Detail</Text>
             <TextInput 
              style={styles.textinput}
              autoCapitalize="none"
              selectionColor="#f9b347"
              autoCorrect={false}
              value={bankname}
              onChangeText={(actualdata) => setbankname(actualdata)}
             />
         </View>
         <View>
             <Text style={styles.labels}>Account Title</Text>
             <TextInput 
              style={styles.textinput}
              autoCapitalize="none"
              selectionColor="#f9b347"
              autoCorrect={false}
              value={accounttitle}
              onChangeText={(actualdata) => setaccounttitle(actualdata)}
             />
         </View>

         <View>
         <Image source={{uri:image}} style={{width:100,height:100,justifyContent:'center',alignItems:'center',marginTop:8}}/>
         <TouchableOpacity style={[styles.touchopacity,
          {
             backgroundColor:"#f9b347",
          },
       ]}
        onPress={() => PickImage()}
       >
           <Text style={styles.buttonstyle2}>Choose Image</Text>
   
         </TouchableOpacity>
        
       
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
 
 
 export default AddIdea;