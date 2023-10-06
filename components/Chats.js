import React from 'react';
import { Image, Text, TextInput, View } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'

export default function App() {
  return (
    <>
  <View style={{ flexDirection:"row", justifyContent: 'space-between',marginTop:10 }}>
  <Text style={{ fontWeight: '500', fontFamily: 'outfit', fontSize: 20, color:"#000000",marginLeft:20 }}>New Group</Text>

    <View style={{ flexDirection:"row", marginRight: 20 }}>
    <AntDesign name="adduser" size={34} color="black" style={{ marginLeft: 10, height: 30, width: 30,marginRight:10 }} />
    <MaterialIcons name="notifications-active" size={34} color="black" style={{ marginLeft: 10, height: 30, width: 30 }} />
    </View>
  </View>
  
  
  <View style={{ backgroundColor: "#DE518B", height: "95%", marginTop:10, borderBottomRightRadius:30,borderBottomLeftRadius:30 }}>
      <View style={{ flexDirection: "row", justifyContent: 'space-between', alignItems: 'center' , marginTop:10}}>
        <AntDesign name="down" size={28} color="white" style={{ marginTop: 5 }} />
        <View style={{ flexDirection: 'row', alignItems: 'center', backgroundColor: "#c4c4c4", width: "90%", borderRadius: 12 }}>
          <AntDesign name="search1" size={20} color="gray" style={{ marginLeft: 10 }} />
          <TextInput placeholder='Search' style={{ flex: 1, paddingLeft: 10 }} />
        </View>
      </View>
      <View style={{ flexDirection:"row",marginTop:15 }}>
      <Image source={{ uri: 'https://media.sproutsocial.com/uploads/2022/06/profile-picture.jpeg' }} style={{ width: 55, height: 60,borderRadius:50 }} />
      <Text style={{ color:"white", padding:15,fontSize:18, fontWeight:"500" }}>Chandhu</Text>
      </View>
      <View style={{ backgroundColor: 'white', height: 1, width: '100%',marginTop:5 }} />
      <View style={{ flexDirection:"row",marginTop:10 }}>
      <Image source={{ uri: 'https://media.sproutsocial.com/uploads/2022/06/profile-picture.jpeg' }} style={{ width: 55, height: 60,borderRadius:50 }} />
      <Text style={{ color:"white", padding:15,fontSize:18, fontWeight:"500" }}>Saankhya</Text>
      </View>
      <View style={{ backgroundColor: 'white', height: 1, width: '100%',marginTop:5 }} />
      <View style={{ flexDirection:"row",marginTop:15 }}>
      <Image source={{ uri: 'https://media.sproutsocial.com/uploads/2022/06/profile-picture.jpeg' }} style={{ width: 55, height: 60,borderRadius:50 }} />
      <Text style={{ color:"white", padding:15,fontSize:18, fontWeight:"500" }}>Sruthi</Text>
      </View>
      <View style={{ backgroundColor: 'white', height: 1, width: '100%',marginTop:5 }} />
      
      <View style={{ flexDirection:"row",marginTop:15 }}>
      <Image source={{ uri: 'https://media.sproutsocial.com/uploads/2022/06/profile-picture.jpeg' }} style={{ width: 55, height: 60,borderRadius:50 }} />
      <Text style={{ color:"white", padding:15,fontSize:18, fontWeight:"500" }}>Rani</Text>
      </View>
      <View style={{ backgroundColor: 'white', height: 1, width: '100%',marginTop:5 }} />
      
      <View style={{ flexDirection:"row",marginTop:15 }}>
      <Image source={{ uri: 'https://media.sproutsocial.com/uploads/2022/06/profile-picture.jpeg' }} style={{ width: 55, height: 60,borderRadius:50 }} />
      <Text style={{ color:"white", padding:15,fontSize:18, fontWeight:"500" }}>Praneeth</Text>
      </View>
      <View style={{ backgroundColor: 'white', height: 1, width: '100%',marginTop:5 }} />
      
      <View style={{ flexDirection:"row",marginTop:15 }}>
      <Image source={{ uri: 'https://media.sproutsocial.com/uploads/2022/06/profile-picture.jpeg' }} style={{ width: 55, height: 60,borderRadius:50 }} />
      <Text style={{ color:"white", padding:15,fontSize:18, fontWeight:"500" }}>Pooja</Text>
      </View>
      <View style={{ backgroundColor: 'white', height: 1, width: '100%',marginTop:5 }} />
      <View style={{ flexDirection:"row",marginTop:15 }}>
      <Image source={{ uri: 'https://media.sproutsocial.com/uploads/2022/06/profile-picture.jpeg' }} style={{ width: 55, height: 60,borderRadius:50 }} />
      <Text style={{ color:"white", padding:15,fontSize:18, fontWeight:"500" }}>Rani</Text>
      </View>
      <View style={{ backgroundColor: 'white', height: 1, width: '100%',marginTop:5 }} />
      
      <View style={{ flexDirection:"row",marginTop:15 }}>
      <Image source={{ uri: 'https://media.sproutsocial.com/uploads/2022/06/profile-picture.jpeg' }} style={{ width: 55, height: 60,borderRadius:50 }} />
      <Text style={{ color:"white", padding:15,fontSize:18, fontWeight:"500" }}>Hema</Text>
      </View>
      <View style={{ backgroundColor: 'white', height: 1, width: '100%',marginTop:5 }} />
      
    </View>
    </>
  )
}

