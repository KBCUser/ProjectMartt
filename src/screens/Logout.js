import {View,Text,StyleSheet,TextInput,TouchableOpacity,Alert,Image} from "react-native";
import React,{useState} from "react";


const Logout = ({navigation })=>{
    navigation.navigate("Login");
    return(
        <Text>Logout</Text>
        );
}

export default Logout;