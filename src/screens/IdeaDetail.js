import {View,Text,StyleSheet,TextInput,TouchableOpacity,Alert,Image,FlatList} from "react-native";
import React,{useState,useEffect} from "react";


const IdeaDetail = ({route,navigation})=>{
    const ProductId=route.params.ideaid; 
    const myEmail=route.params.myEmail;
    const [cartqty,setcartqty] = useState("0");
    const [shoptype,setshoptype] = useState("");
    const [productprice,setproductprice] = useState("");

    const [productdata,setproductdata] = useState("");
  var fetchInsertApi="https://lrtextile.com.pk/projectmart/investor/idea_detail.php?ideaid="+ProductId;
      var headers={
          'Accept':'application/json',
          'Content-Type':'application.json'
      };

      if(productdata == "")
      {
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
        }

   

  
    return(

       <View style={{flex:1,backgroundColor:'white'}}>
           
      


           <FlatList 
              keyExtractor={(key) =>{
         return key.product_id;
             }}
       
     data={productdata}
     showsHorizontalScrollIndicator={false}
     renderItem={(element)=>{
         return (
        

           

          
        
          
          <View style={{justifyContent: 'center',borderBottomColor:'black'}}>
           <Image style={styles.imagestyle}  source={{uri:"https://lrtextile.com.pk/projectmart/pitcher/"+element.item.idea_img}} />
           <Text style={{marginTop:10,fontSize:25}}> {element.item.product_name}</Text>
           <Text style={{fontSize:20,fontWeight:'bold'}}> Idea : {element.item.idea_name}</Text>
           <Text style={{color:'black',marginStart:5,fontWeight:'bold'}}>Category : {element.item.idea_category}</Text>
           <Text style={{color:'black',marginStart:5,fontWeight:'bold'}}>Amount Required : Rs {element.item.amount_required}</Text>
           <Text style={{color:'black',marginStart:5,fontWeight:'bold'}}>Share Equity : {element.item.share_equity}</Text>
           <Text style={{color:'black',marginStart:5,fontWeight:'bold'}}>Already Invested : Rs {element.item.invested_amount}</Text>
           <Text style={{color:'black',marginStart:5,fontWeight:'bold'}}>Remaing Required : Rs {element.item.remain_amount}</Text>
          
           <Text style={{color:'black',marginStart:5,fontWeight:'bold'}}>Summary :  <Text style={{fontWeight:'normal'}}>{element.item.idea_summary} </Text></Text>
           <View
             style={{
               borderBottomColor: '#800080',
               borderBottomWidth: 1,
               marginTop:4
             }}
           />
           <Text style={{marginTop:10,fontSize:25}}> Millestone</Text>
           <Text style={{color:'black',marginStart:5,fontWeight:'bold'}}>Working 1 :  <Text style={{fontWeight:'normal'}}>{element.item.working_1} </Text></Text>
           <Text style={{color:'black',marginStart:5,fontWeight:'bold'}}>Working 2 :  <Text style={{fontWeight:'normal'}}>{element.item.working_2} </Text></Text>
   
          {(() => {
            if (element.item.working_3 !="") {
              return (
                <Text style={{color:'black',marginStart:5,fontWeight:'bold'}}>Working 3 :  <Text style={{fontWeight:'normal'}}>{element.item.working_3} </Text></Text>
         
              )
            }
        })()}

         {(() => {
            if (element.item.working_4 !="") {
              return (
                <Text style={{color:'black',marginStart:5,fontWeight:'bold'}}>Working 4 :  <Text style={{fontWeight:'normal'}}>{element.item.working_4} </Text></Text>
         
              )
            }
        })()}
        {(() => {
            if (element.item.working_5 !="") {
              return (
                <Text style={{color:'black',marginStart:5,fontWeight:'bold'}}>Working 5 :  <Text style={{fontWeight:'normal'}}>{element.item.working_5} </Text></Text>
         
              )
            }
        })()}
        {(() => {
            if (element.item.working_6 !="") {
              return (
                <Text style={{color:'black',marginStart:5,fontWeight:'bold'}}>Working 6  :  <Text style={{fontWeight:'normal'}}>{element.item.working_6} </Text></Text>
         
              )
            }
        })()}
         {(() => {
            if (element.item.working_7 !="") {
              return (
                <Text style={{color:'black',marginStart:5,fontWeight:'bold'}}>Working 7  :  <Text style={{fontWeight:'normal'}}>{element.item.working_7} </Text></Text>
         
              )
            }
        })()}
         {(() => {
            if (element.item.working_8 !="") {
              return (
                <Text style={{color:'black',marginStart:5,fontWeight:'bold'}}>Working 8  :  <Text style={{fontWeight:'normal'}}>{element.item.working_8} </Text></Text>
         
              )
            }
        })()}


           


<View style={styles.container}>
<View style={styles.item2}>
<TouchableOpacity style={[styles.touchopacity,
          {
             backgroundColor:"#f9b347",
          },
       ]}
       onPress={() => navigation.navigate("InvestNow",{myEmail : `${myEmail}`,ideaid : `${element.item.idea_id}`,AmountReq : `${element.item.amount_required}`,PitcherEmail : `${element.item.pitcher_email}`,ShareEq : `${element.item.share_equity}`,alreadyinvest : `${element.item.invested_amount}`,remaininvest : `${element.item.remain_amount}`})}
       
       >
           <Text style={styles.buttonstyle}>Invest Now</Text>
   
         </TouchableOpacity>
           
          </View>
          <View style={styles.item4}></View>
          <View style={styles.item2}>
          <TouchableOpacity style={[styles.touchopacity,
          {
             backgroundColor:"#f9b347",
          },
       ]}
       onPress={() => navigation.navigate("ChatMessenger",{sendemail : `${myEmail}`,recemail:element.item.pitcher_email})}
       
       >
           <Text style={styles.buttonstyle}>Chat Now</Text>
   
         </TouchableOpacity> 
          </View>
        
        
        
          </View>
         
          </View>


  
          
          
          
   


         );
     }}
     />

     



         

       </View>


    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'row',
      flexWrap: 'wrap',
      alignItems: 'flex-start',
      marginTop:20 ,
      justifyContent: 'center',alignItems: 'center'// if you want to fill rows left to right
    },
    item: {
      width: '50%',
      backgroundColor:"black",
      

       // is 50% of container width
    },
    item1: {
        width: '25%' // is 50% of container width
      },
    item2: {
        width: '45%', // is 50% of container width
        marginTop:22
      },
      item3: {
        width: '10%', // is 50% of container width
        
      },
      item4: {
        width: '5%', // is 50% of container width
        
      },

      imagestyle:{
          marginTop:10,
          height:300,
          width:350,
          alignSelf: 'center',
      },
      buttonstyle:{
        textAlign:"center",
        padding:8,
        color:"white",
    },
    textinput:{
      borderWidth:1,
      borderColor:"grey",
      paddingHorizontal:15,
      paddingVertical:7,
      borderRadius:1,
      fontSize:18,
  },
  });
export default IdeaDetail;