import React from 'react';
import { View, Text, TextInput} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import Fontisto from 'react-native-vector-icons/Fontisto'
import Entypo from 'react-native-vector-icons/Entypo'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'

export default function App() {


  return (
    <>
   <View style={{ backgroundColor: "#DE518B", height: 84, width: 394, borderTopLeftRadius: 24, borderTopRightRadius: 24 }}>
      <View style={{ marginTop: 20, flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <FontAwesome name="user" size={34} color="black" style={{ marginLeft: 10 }} />
          <View style={{ marginLeft: 10 }}>
            <Text style={{ color: "white", fontSize: 18, fontWeight: "400" }}>Sabaressh</Text>
            <Text style={{ color: "white", fontSize: 9, fontWeight: "600" }}>Online - Last seen, 2.02pm</Text>
          </View>
        </View>
        <Entypo name="dots-three-vertical" size={24} color="white" style={{ marginRight: 10 }} />
      </View>
    </View>
    <View style={{flexDirection:"row",justifyContent:'space-between',  backgroundColor:"#FFDBEA", borderRadius: 10, marginTop:"160%", width: "98%", marginLeft: 5,  }}>
      <TextInput placeholder='Type your message here'></TextInput>
      <View style={{flexDirection:"row",marginTop:10,marginRight:10 }}>
      <Fontisto name="smiley" size={24} color="black" style={{ marginLeft: 10, }} />
      <Fontisto name="camera" size={24} color="black" style={{ marginLeft: 10, }} />
      <MaterialIcons name="keyboard-voice" size={24} color="black" style={{ marginLeft: 10, }} />
      </View>
    </View>
    
    </>
  )

 }
