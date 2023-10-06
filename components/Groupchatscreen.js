import React, { useState } from "react";
import { Image, Text, TextInput, View, Modal, TouchableOpacity } from "react-native";
import Entypo from "react-native-vector-icons/Entypo";
import Fontisto from "react-native-vector-icons/Fontisto";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";

export default function App() {
  const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  return (
    <>
      <View style={{ backgroundColor: "#DE518B", height: "12%", width: "100%", flexDirection: "row", alignItems: "center", paddingRight: 10 }}>
        <Image source={{ uri: 'https://www.mensjournal.com/.image/t_share/MTk2MTM2NTcwNDMxMjg0NzQx/man-taking-selfie.jpg' }}
          style={{ height: 40, width: 40, marginTop: "5%", borderRadius: 30 }} />
        <View style={{ flex: 1, marginLeft: "2%" }}>
          <View style={{ justifyContent: 'space-between', flexDirection: 'row', alignItems: 'center', marginTop: "2%" }}>
            <View>
              <Text style={{ color: "white", fontFamily: "outfit", fontWeight: "600" }}>Family ( 4 Members )</Text>
              <Text style={{ color: "white", fontFamily: "outfit", fontWeight: "300" }}>Sai@roone,shriya,vyshu,uma</Text>
            </View>
            <TouchableOpacity onPress={toggleModal}>
              <Entypo name="dots-three-vertical" size={20} color="white" style={{ marginLeft: 10 }} />
            </TouchableOpacity>
          </View>
        </View>
      </View>

      <View style={{ flexDirection: "row", justifyContent: 'space-between', backgroundColor: "#FFDBEA", borderRadius: 10, marginTop: "130%", width: "98%", marginLeft: 5, }}>
        <TextInput placeholder='Type your message here' />
        <View style={{ flexDirection: "row", marginTop: 10, marginRight: 10 }}>
          <Fontisto name="smiley" size={24} color="black" style={{ marginLeft: 10, }} />
          <Fontisto name="camera" size={24} color="black" style={{ marginLeft: 10, }} />
          <MaterialIcons name="keyboard-voice" size={24} color="black" style={{ marginLeft: 10, }} />
        </View>
      </View>

      <Modal animationType="slide" transparent={true} visible={isModalVisible} onRequestClose={toggleModal}
      >
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center",marginLeft:"50%",marginBottom:"100%" }}>
          <View style={{ backgroundColor: "white", borderRadius: 10, padding: 20 }}>
            <TouchableOpacity style={{ backgroundColor:"#d9d9d9", borderRadius:5, height:35,width:150  }} onPress={() => { 
              toggleModal();
            }}>
              <Text style={{ fontSize: 18, marginBottom: 10, textAlign:"center", color:"white", fontWeight:"600", fontFamily:"outfit"}}>Delete Chat</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{ backgroundColor:"#de518b", borderRadius:5, height:35,width:150 }} onPress={() => {
              
              toggleModal();
            }}>
              <Text style={{ fontSize: 18,  textAlign:"center",color:"white", fontWeight:"600", fontFamily:"outfit" }}>Add Members</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </>
  )
}



