import React, {useEffect,useState} from 'react';
import {Text,View,Image,StyleSheet,TouchableOpacity} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import InvestorHome from './InvestorHome';


const InvestorDashboard = ({route,navigation})=>{

  const [myUserData,setmyUserData] = useState();
  const [myusername,setmyusername] = useState();
  const [myuseremail,setmyuseremail] = useState();
  const [myshopname,setmyshopname] = useState();  
  const [myprofilepic,setmyprofilepic] = useState();  
  const myEmail=route.params.myEmail; 
 const getUserDate = async () =>{

    try {
        const response = await fetch("https://lrtextile.com.pk/projectmart/investor/getinvestordetail.php?uemail="+myEmail);
        const MyData=await response.json();
        setmyUserData(MyData);
        setmyusername(MyData[0].username);
        setmyshopname(MyData[0].phone_no);
        setmyuseremail(MyData[0].useremail);
        setmyprofilepic(MyData[0].user_pic);
        // console.log(MyData);

    } catch (error) {
        console.log(error);
    }
};

useEffect( () => {
  getUserDate();
}),[];


   return (
    <View style={styles.container}>
        

    <View style={styles.item1}>
      <Image style={styles.imagestyle}  source={{uri:'https://lrtextile.com.pk/projectmart/investor/'+myprofilepic}} />
      
    </View>

    <View style={styles.item2}>
      <Text>Name  : {myusername}</Text>
      <Text>Email  : {myuseremail}</Text>
      <Text>Phone  : {myshopname}</Text>
   
      <View
        style={{
          borderBottomColor: '#800080',
          borderBottomWidth: 2,
        }}
      />
    </View>
     
  
       

    <View style={styles.item}>
    <TouchableOpacity style={styles.column1} onPress={() => navigation.navigate("InvestorMainScreen",{myEmail : `${myEmail}`})}>
    <Image style={styles.lineimage}  source={require("../../assets/search.png")} />
    <Text style={styles.linetext}>Browse Investment</Text>

    </TouchableOpacity>

    </View>
    
    <View style={styles.item}>
    <TouchableOpacity style={styles.column1} onPress={() => navigation.navigate("MyChat",{myEmail : `${myEmail}`})}>
    <Image style={styles.lineimage}  source={require("../../assets/chat.png")} />
    <Text style={styles.linetext}>Chats</Text>

    </TouchableOpacity>

    </View>
    <View style={styles.item}>
    <TouchableOpacity style={styles.column1} onPress={() => navigation.navigate("GenerateLink",{myEmail : `${myEmail}`,usertype:'Pitcher'})}>
    <Image style={styles.lineimage}  source={require("../../assets/zoom.png")} />
    <Text style={styles.linetext}>Online Meet</Text>

    </TouchableOpacity>

    </View>
    <View style={styles.item}>
    <TouchableOpacity style={styles.column1} onPress={() => navigation.navigate("MyInvestmentProject",{myEmail : `${myEmail}`})}>
    <Image style={styles.lineimage}  source={require("../../assets/earning.png")} />
    <Text style={styles.linetext}>Investment</Text>

    </TouchableOpacity>

    </View>
    <View style={styles.item}>
    <TouchableOpacity style={styles.column1} onPress={() => navigation.navigate("UpdateProfileRequest",{myEmail : `${myEmail}`,type:'investor'})}>
    <Image style={styles.lineimage}  source={require("../../assets/resume.png")} />
    <Text style={styles.linetext}>Profile Update</Text>

    </TouchableOpacity>

    </View>
    <View style={styles.item}>
    <TouchableOpacity style={styles.column1} onPress={() => navigation.navigate("Logout")}>
    <Image style={styles.lineimage}  source={require("../../assets/logout.png")} />
    <Text style={styles.linetext}>Logout</Text>

    </TouchableOpacity>

    </View>

     
    
  </View>

   );
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'row',
      flexWrap: 'wrap',
      alignItems: 'flex-start',
      marginTop:40,
      backgroundColor:'white' // if you want to fill rows left to right
    },
    item: {
      width: '50%' // is 50% of container width
    },
    item1: {
        width: '23%' // is 50% of container width
      },
    item2: {
        width: '70%', // is 50% of container width
        marginTop:12
      },

      imagestyle:{
          marginTop:10,
          marginStart:10,
          height:60,
          width:60
      }  ,
      column1:{
         alignContent:"center",
         padding:20,
         justifyContent: 'center',
         alignItems: 'center',
      },
      linetext:{
         textAlign:"center",
         fontSize:16,
         marginTop:5,
         marginRight:1

      },
      lineimage:{
        justifyContent: 'center',
        alignItems: 'center',

      },
  });

export default InvestorDashboard;