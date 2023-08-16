import {View,Text,StyleSheet,TextInput,TouchableOpacity,Alert,Image,FlatList} from "react-native";
import React,{useState,useEffect} from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


const ViewMilestone = ({route,navigation}) => {
  const myEmail=route.params.myEmail; 
  const idea_id=route.params.idea_id; 
  const [productdata,setproductdata] = useState("");
  
  var fetchInsertApi="https://lrtextile.com.pk/projectmart/pitcher/get_ideamilestone.php?ideaid="+idea_id;
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
      <Text style={{marginTop:10,marginBottom:15,fontSize:20,color:"#f9b347",alignContent:'center',justifyContent:'center',textAlign:'center'}}>Ideas Milestone</Text>
       
      </View>
      <View >
      
      
       
      </View>
      
             <FlatList 
              keyExtractor={(key) =>{
         return key.product_id;
             }}
             showsHorizontalScrollIndicator={false}
       
     data={productdata}
     renderItem={(element)=>{
         return (
          <View style={styles.container}> 
        
    
          
          
          <View style={styles.item2}>
          <TouchableOpacity
          onPress={() => navigation.navigate("AddMilestoneWork",{idea_id : element.item.idea_id,myEmail:myEmail,type:"1"})}>
          
           <Text> Milestone Name  : {element.item.working_1}</Text>
           <Text> No of Deliver Days  : {element.item.amountrel_1}</Text>
           <Text style={{color:'#f9b347',textAlign:'center',marginTop:7,fontWeight:'bold'}}>+Click Box To Add Milestone</Text>
    
           
          </TouchableOpacity>
           <View
             style={{
               borderBottomColor: '#f9b347',
               borderBottomWidth: 2,
             }}
           />
           
          </View>

          {(() => {
            if (element.item.working_2 !="") {
              return (
                <View style={styles.item2}>
                <TouchableOpacity
                onPress={() => navigation.navigate("AddMilestoneWork",{idea_id : element.item.idea_id,myEmail:myEmail,type:"2"})}>
                
                 <Text> Milestone Name  : {element.item.working_2}</Text>
                 <Text> No of Deliver Days  : {element.item.amountrel_2}</Text>
                 <Text style={{color:'#f9b347',textAlign:'center',marginTop:7,fontWeight:'bold'}}>+Click Box To Add Milestone</Text>
          
                 
                </TouchableOpacity>
                 <View
                   style={{
                     borderBottomColor: '#f9b347',
                     borderBottomWidth: 2,
                   }}
                 />
                 
                </View>
              )
            }
        })()}

          {(() => {
            if (element.item.working_3 !="") {
              return (
                <View style={styles.item2}>
                <TouchableOpacity
                onPress={() => navigation.navigate("AddMilestoneWork",{idea_id : element.item.idea_id,myEmail:myEmail,type:"3"})}>
                
                 <Text> Milestone Name  : {element.item.working_3}</Text>
                 <Text> No of Deliver Days  : {element.item.amountrel_3}</Text>
                 <Text style={{color:'#f9b347',textAlign:'center',marginTop:7,fontWeight:'bold'}}>+Click Box To Add Milestone</Text>
          
                 
                </TouchableOpacity>
                 <View
                   style={{
                     borderBottomColor: '#f9b347',
                     borderBottomWidth: 2,
                   }}
                 />
                 
                </View>
              )
            }
        })()}

{(() => {
            if (element.item.working_4 !="") {
              return (
                <View style={styles.item2}>
                <TouchableOpacity
                onPress={() => navigation.navigate("AddMilestoneWork",{idea_id : element.item.idea_id,myEmail:myEmail,type:"4"})}>
                
                 <Text> Milestone Name  : {element.item.working_4}</Text>
                 <Text> No of Deliver Days  : {element.item.amountrel_4}</Text>
                 <Text style={{color:'#f9b347',textAlign:'center',marginTop:7,fontWeight:'bold'}}>+Click Box To Add Milestone</Text>
          
                 
                </TouchableOpacity>
                 <View
                   style={{
                     borderBottomColor: '#f9b347',
                     borderBottomWidth: 2,
                   }}
                 />
                 
                </View>
              )
            }
        })()}

{(() => {
            if (element.item.working_5 !="") {
              return (
                <View style={styles.item2}>
                <TouchableOpacity
                onPress={() => navigation.navigate("AddMilestoneWork",{idea_id : element.item.idea_id,myEmail:myEmail,type:"5"})}>
                
                 <Text> Milestone Name  : {element.item.working_5}</Text>
                 <Text> No of Deliver Days  : {element.item.amountrel_5}</Text>
                 <Text style={{color:'#f9b347',textAlign:'center',marginTop:7,fontWeight:'bold'}}>+Click Box To Add Milestone</Text>
          
                 
                </TouchableOpacity>
                 <View
                   style={{
                     borderBottomColor: '#f9b347',
                     borderBottomWidth: 2,
                   }}
                 />
                 
                </View>
              )
            }
        })()}
         
         {(() => {
            if (element.item.working_6 !="") {
              return (
                <View style={styles.item2}>
                <TouchableOpacity
                onPress={() => navigation.navigate("AddMilestoneWork",{idea_id : element.item.idea_id,myEmail:myEmail,type:"6"})}>
                
                 <Text> Milestone Name  : {element.item.working_6}</Text>
                 <Text> No of Deliver Days  : {element.item.amountrel_6}</Text>
                 <Text style={{color:'#f9b347',textAlign:'center',marginTop:7,fontWeight:'bold'}}>+Click Box To Add Milestone</Text>
          
                 
                </TouchableOpacity>
                 <View
                   style={{
                     borderBottomColor: '#f9b347',
                     borderBottomWidth: 2,
                   }}
                 />
                 
                </View>
              )
            }
        })()}

{(() => {
            if (element.item.working_7 !="") {
              return (
                <View style={styles.item2}>
                <TouchableOpacity
                onPress={() => navigation.navigate("AddMilestoneWork",{idea_id : element.item.idea_id,myEmail:myEmail,type:"7"})}>
                
                 <Text> Milestone Name  : {element.item.working_7}</Text>
                 <Text> No of Deliver Days  : {element.item.amountrel_7}</Text>
                 <Text style={{color:'#f9b347',textAlign:'center',marginTop:7,fontWeight:'bold'}}>+Click Box To Add Milestone</Text>
          
                 
                </TouchableOpacity>
                 <View
                   style={{
                     borderBottomColor: '#f9b347',
                     borderBottomWidth: 2,
                   }}
                 />
                 
                </View>
              )
            }
        })()}
          
          {(() => {
            if (element.item.working_8 !="") {
              return (
                <View style={styles.item2}>
                <TouchableOpacity
                style={{paddingBottom:60}}
                onPress={() => navigation.navigate("AddMilestoneWork",{idea_id : element.item.idea_id,myEmail:myEmail,type:"8"})}>
                
                 <Text> Milestone Name  : {element.item.working_8}</Text>
                 <Text> No of Deliver Days  : {element.item.amountrel_8}</Text>
                 <Text style={{color:'#f9b347',textAlign:'center',marginTop:7,fontWeight:'bold'}}>+Click Box To Add Milestone</Text>
          
                 
                </TouchableOpacity>
                 <View
                   style={{
                     borderBottomColor: '#f9b347',
                     borderBottomWidth: 2,
                   }}
                 />
                 
                </View>
              )
            }
        })()}
          
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


export default ViewMilestone;