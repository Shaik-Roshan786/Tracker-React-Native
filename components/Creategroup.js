import React from "react";
import { View, Text, ImageBackground, TouchableOpacity, TextInput } from 'react-native'
import AntDesign from "react-native-vector-icons/AntDesign";
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'

export default function App() {
    return (
        <>
        <View style={{ flexDirection:"row", justifyContent:'space-between',marginTop:5 }}>
        <View style={{ flexDirection:"row" }}>
        <MaterialIcons name="arrow-back" size={30} color="black" style={{ marginLeft: 10 }} />
        <Text style={{color:"#000000", fontFamily:"outfit", fontWeight:"600", fontSize:20,padding:2  }}>New Group</Text>
        </View>
        <View style={{ flexDirection:"row" }}>
        <TouchableOpacity  style={{ backgroundColor:"#c4c4c4", height: 37,width:37, borderRadius:50 }}>
        <AntDesign name="adduser" size={30} color="white" style={{ marginLeft: 5, height: 30, width: 30,marginRight:10 }} />
        </TouchableOpacity>
        <MaterialIcons name="notifications-active" size={30} color="black" style={{ marginLeft: 10, height: 30, width: 30,marginRight:10 }} />
        </View>
        </View>
        <ImageBackground source={require('../assets/image1.png')} style={{flex: 1,marginTop:10    }} >
      <View>
       <Text style={{color:"white",fontSize:16, fontWeight:"500",fontFamily:"outfit",padding:20 }}>Group Members: 2</Text>
       
       <View style={{ alignItems:"center" }}>
        <TouchableOpacity  style={{ backgroundColor:"#c4c4c4", height: 55,width:55, borderRadius:50 }}>
       <AntDesign name="camerao" size={34} color="white" style={{ marginLeft:12, marginTop:5 }} />
       </TouchableOpacity>
        <Text style={{ color:"white", fontWeight:"500", fontSize:16 }}>Add Profile</Text>
        <TextInput placeholder="Enter Group Name"  style={{ backgroundColor:"white",height:44,width:310,borderRadius:12,marginTop:10 }}></TextInput>
        </View>
      </View>
      <TouchableOpacity  style={{ backgroundColor:"white", height: 37,width:37, borderRadius:50 ,marginTop:"80%",marginLeft:"80%"}}>
      <AntDesign name="arrowright" size={30} color="#DE518B" style={{  }} />
      </TouchableOpacity>
    </ImageBackground>
        </>
    )
}














