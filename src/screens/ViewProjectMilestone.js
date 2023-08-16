import {View,Text,StyleSheet,TextInput,TouchableOpacity,Alert,Image,FlatList} from "react-native";
import React,{useState,useEffect} from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Linking} from 'react-native'


const ViewProjectMilestone = ({route,navigation}) => {
  const myEmail=route.params.myEmail; 
  const idea_id=route.params.idea_id; 
  const [productdata,setproductdata] = useState("");
  
  var fetchInsertApi="https://lrtextile.com.pk/projectmart/investor/milestonework_request.php?idea_id="+idea_id+"&uemail="+myEmail;
  var headers={
          'Accept':'application/json',
          'Content-Type':'application.json'
      };

   
      fetch(fetchInsertApi,
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
        




    return (
      <View> 
        <View >
      <Text style={{marginTop:10,marginBottom:15,fontSize:20,color:"#f9b347",alignContent:'center',justifyContent:'center',textAlign:'center'}}>Milestone Work Request</Text>
       
      </View>
      <View >
      
      
       
      </View>
      
             <FlatList 
              keyExtractor={(key) =>{
         return key.milestone_id;
             }}
             showsHorizontalScrollIndicator={false}
       
     data={productdata}
     renderItem={(element)=>{
         return (
          <View style={styles.container}> 
        
    
          
          
          <View style={styles.item2}>
          <TouchableOpacity
          >
          
           <Text> Milestone Detail  : {element.item.detail}</Text>
           <Text> Upload Date  : {element.item.upload_date}</Text>
           <Text> Milestone No  : {element.item.type}</Text>
           <Text onPress={() => Linking.openURL('https://lrtextile.com.pk/projectmart/pitcher/'+element.item.filename)} > Working File  : <Text style={{color:'#f9b347'}}>{element.item.filename}</Text> </Text>
           <Text onPress={() => navigation.navigate("ApprovedMilestoneWork",{milestone_id : element.item.milestone_id,myEmail:myEmail,idea_id:element.item.idea_id})} style={{color:'#f9b347',textAlign:'center',marginTop:7,fontWeight:'bold'}}>+Click Here To Approved Milestone</Text>
    
           
          </TouchableOpacity>
           <View
             style={{
               borderBottomColor: '#f9b347',
               borderBottomWidth: 2,
             }}
           />
           
          </View>

        
          

          
          </View>


         );
     }}
     />
       

       
</View>


        
     );    
};



const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'row',
      flexWrap: 'wrap',
      alignItems: 'flex-start',
      backgroundColor:'#ffffff' // if you want to fill rows left to right
    },
    item: {
      width: '50%' // is 50% of container width
    },
    item1: {
        width: '23%' // is 50% of container width
      },
    item2: {
        width: '100%', // is 50% of container width
        marginTop:22
      },
      item3: {
        width: '65%', // is 50% of container width
        
      },
      item4: {
        width: '35%', // is 50% of container width
        
      },

      imagestyle:{
          marginTop:10,
          marginStart:10,
          height:70,
          width:70
      },
    
  });


export default ViewProjectMilestone;