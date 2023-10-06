import React from "react";
import BottomBar from "./components/Bottombar";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TabViewExample from "./components/Mycontacts"
import screena from "./screena";
import screenb from "./screenb";
import screenc from "./screenc"
import screend from "./screend";
import Chatscreen from "./components/Chatscreen";
import Creategroup from "./components/Creategroup"


const Stack = createNativeStackNavigator();

export default function App() {
    return (
        <>
      <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen name="BottomBar" component={BottomBar} />
      <Stack.Screen name="mycontacts" component={TabViewExample} options={{ headerShown: false }} />
      <Stack.Screen name="screena" component={screena} />
      <Stack.Screen name="screenb" component={screenb} />
      <Stack.Screen name="screenc" component={screenc} />
      <Stack.Screen name="screend" component={screend} />
      <Stack.Screen name="Chatscreen" component={Chatscreen} />
      <Stack.Screen name="Creategroup" component={Creategroup} />
      
      
      </Stack.Navigator>
    </NavigationContainer>
        </>
    )
}












// import React from "react";
// import BottomBar from "./components/bottombar";
// import { NavigationContainer } from "@react-navigation/native";

// export default function App() {
//     return (
//         <>
//       <NavigationContainer>
//       <BottomBar />
//     </NavigationContainer>
//         </>
//     )
// }




// // App.js
// import React from 'react';
// import { NavigationContainer } from '@react-navigation/native';
// import TabNavigator from './TabNavigator';

// const App = () => {
//   return (
//     <NavigationContainer>
//       <TabNavigator />
//     </NavigationContainer>
//   );
// };

// export default App;









// import React from "react";
// import { Image, Text, TextInput, View } from "react-native";
// import Entypo from "react-native-vector-icons/Entypo";
// import Fontisto from "react-native-vector-icons/Fontisto";
// import MaterialIcons from "react-native-vector-icons/MaterialIcons";

// export default function App() {
//   return (
//     <>
//     <View style={{ backgroundColor: "#DE518B", height: "12%", width: "100%", flexDirection: "row", alignItems: "center", paddingRight: 10 }}>
//       <Image
//         source={{ uri: 'https://www.mensjournal.com/.image/t_share/MTk2MTM2NTcwNDMxMjg0NzQx/man-taking-selfie.jpg' }}
//         style={{ height: 40, width: 40, marginTop: "5%", borderRadius: 30 }} />
//       <View style={{ flex: 1, marginLeft: "2%" }}>
//         <View style={{ justifyContent: 'space-between', flexDirection: 'row', alignItems: 'center', marginTop: "2%" }}>
//           <View>
//             <Text style={{ color: "white", fontFamily: "outfit", fontWeight: "600" }}>Family ( 4 Members )</Text>
//             <Text style={{ color: "white", fontFamily: "outfit", fontWeight: "300" }}>Sai@roone,shriya,vyshu,uma</Text>
//           </View>
//           <Entypo name="dots-three-vertical" size={20} color="white" style={{ marginLeft: 10 }} />
//         </View>
//       </View>
//     </View>
//     <View style={{ flexDirection: "row", justifyContent: 'space-between', backgroundColor: "#FFDBEA", borderRadius: 10, marginTop: "130%", width: "98%", marginLeft: 5, }}>
//         <TextInput placeholder='Type your message here'></TextInput>
//         <View style={{ flexDirection: "row", marginTop: 10, marginRight: 10 }}>
//           <Fontisto name="smiley" size={24} color="black" style={{ marginLeft: 10, }} />
//           <Fontisto name="camera" size={24} color="black" style={{ marginLeft: 10, }} />
//           <MaterialIcons name="keyboard-voice" size={24} color="black" style={{ marginLeft: 10, }} />
//         </View>
//       </View>
      
      
//       </>
//   )
// }








// iimport * as React from 'react';
// import { ImageBackground, Text, TextInput, View, useWindowDimensions } from 'react-native';
// import { TabView, SceneMap } from 'react-native-tab-view';
// import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
// import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
// import AntDesign from 'react-native-vector-icons/AntDesign';

// const FirstRoute = () => (
//   <View style={{ flex: 1,  }} />
// );

// const SecondRoute = () => (
//   <View style={{ flex: 1}} />
// );

// const renderScene = SceneMap({
//   first: FirstRoute,
//   second: SecondRoute,
// });

// export default function TabViewExample() {
//   const layout = useWindowDimensions();

//   const [index, setIndex] = React.useState(0);
//   const [routes] = React.useState([
//     { key: 'first', title: 'Already in WTracker' },
//     { key: 'second', title: 'Invite to WTracker' },
//   ]);

//   return (
//     <>
   
//      <View style={{ flexDirection:"row", justifyContent:"space-between" }}>
//       <View style={{ flexDirection:"row" }}>
//      <MaterialCommunityIcons name="butterfly-outline" size={24} color="black" style={{ marginLeft: 10, height: 30, width: 30,marginRight:10 }} />
//       <Text style={{ fontSize:17, fontWeight:"600",color:"black" }}>Women Tracker</Text>
//       </View>
//       <MaterialIcons name="notifications-active" size={24} color="black" style={{ marginLeft: 10, height: 30, width: 30,marginRight:10 }} />
//     </View>

//     <ImageBackground source={require('./assets/image1.png')} style={{flex: 1,justifyContent: 'center',alignItems: 'center',
//     }}
//   >
//       <View style={{ flexDirection: "row", justifyContent: 'space-between', alignItems: 'center' , marginTop:10 } }>
//         <View style={{ marginTop:10 ,flexDirection:"row",justifyContent:"space-between"}}>
//         <AntDesign name="down" size={28} color="white" style={{ marginTop: 5 }} />
//         <View style={{ flexDirection: 'row', alignItems: 'center', backgroundColor: "#c4c4c4", width: "90%", borderRadius: 12 }}>
//           <AntDesign name="search1" size={20} color="gray" style={{ marginLeft: 10 }} />
//           <TextInput placeholder='Search' style={{ flex: 1, paddingLeft: 10 }} />
//           </View>
//         </View>
//       </View>
//       <Text style={{ color:"white",fontSize:17,fontWeight:"500", marginTop:5 }}>My Contacts</Text>
//         </ImageBackground>
//     <TabView
//       navigationState={{ index, routes }}
//       renderScene={renderScene}
//       onIndexChange={setIndex}
//       initialLayout={{ width: layout.width }}
//     />
  
    
//     </>
//   );
// }















// import * as React from 'react';
// import { View, useWindowDimensions, StyleSheet, Text, Modal, TouchableOpacity } from 'react-native';
// import { TabView, SceneMap } from 'react-native-tab-view';
// import Ionicons from 'react-native-vector-icons/Ionicons';
// import AntDesign from 'react-native-vector-icons/AntDesign';
// import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
// import FontAwesome from 'react-native-vector-icons/FontAwesome'
// import FontAwesome6 from 'react-native-vector-icons/FontAwesome6'

// const FirstRoute = ({ openModal }: { openModal: () => void }) => {
//   return (
//     <View style={{ flex: 1, backgroundColor: '#DE518B' }}>
//       <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//         <Text style={{ fontWeight: '500', color: "#ffffff", fontFamily: "outfit", fontSize: 16 }}>
//           You don’t have any chat History {'\n'} Add friends to start chat...{'\n'}
//         </Text>
//         <AntDesign name="adduser" size={34} color="white" style={{ marginLeft: 10, height: 30, width: 30 }} />
//       </View>
   
//     </View>
//   );
// };

// const SecondRoute = () => (
//   <View style={{ flex: 1, backgroundColor: '#DE518B' }}>
//     <View style={{ flexDirection: 'row', justifyContent: 'flex-end', marginRight:10 }}>
//       <TouchableOpacity style={{marginTop: 10,backgroundColor: 'white',borderRadius: 12,padding: 10,flexDirection: 'row',alignItems: 'center',width: '30%',
//     }}
//     onPress={() => {
      
//     }}
//   >
//     <Text style={{ color: '#DE518B', fontSize: 16, marginRight: 8 }}>Create</Text>
//     <FontAwesome6 name="users" size={18} color="#DE518B" />
//   </TouchableOpacity>
// </View>



//      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//         <Text style={{ fontWeight: '500', color: "#ffffff", fontFamily: "outfit", fontSize: 16 }}>
//           You don’t have any group {'\n'} &nbsp;&nbsp;&nbsp;&nbsp; Create Group{'\n'}
//         </Text>
//         <FontAwesome6 name="users" size={24} color="white" style={{ marginLeft: 5, height: 30, width: 30 }} />
//       </View>
//   </View>
// );

// const renderScene = SceneMap({
//   first: FirstRoute,
//   second: SecondRoute,
// });

// const styles = StyleSheet.create({
//   tabBar: {
//     flexDirection: 'row',
//     backgroundColor: '#DE518B',
//     justifyContent: 'space-around',
//     alignItems: 'center',
//     height: 50,
//   },
//   tabLabel: {
//     color: 'white',
//     fontSize: 16,
//     fontWeight: 'bold',
//   },
// });

// export default function TabViewExample() {
//   const layout = useWindowDimensions();

//   const [index, setIndex] = React.useState(0);
//   const [modalVisible, setModalVisible] = React.useState(false); // State to manage the visibility of the modal

//   // Function to open the modal
//   const openModal = () => {
//     setModalVisible(true);
//   };

//   // Function to close the modal
//   const closeModal = () => {
//     setModalVisible(false);
//   };

//   const routes = React.useMemo(
//     () => [
//       { key: 'first', title: 'CHATS' },
//       { key: 'second', title: 'GROUPS' },
//     ],
//     []
//   );

//   const handleTabPress = (route: any) => {
//     if (route.key === 'first') {
//       openModal();
//     } else {
//       setIndex(routes.indexOf(route));
//     }
//   };

//   const CustomTabBar = (props: any) => (
//     <View style={styles.tabBar}>
//       {props.navigationState.routes.map((route: any, index: number) => (
//         <TouchableOpacity
//           key={route.key}
//           onPress={() => handleTabPress(route)}
//           style={{
//             flex: 1,
//             alignItems: 'center',
//             borderBottomWidth: index === props.navigationState.index ? 2 : 0, // Highlight the active tab
//             borderColor: 'white',
//           }}
//         >
//           <Text style={styles.tabLabel}>{route.title}</Text>
//         </TouchableOpacity>
//       ))}
//     </View>
//   );

//   return (
//     <>
//       <View style={{ flexDirection: "row", justifyContent: 'space-between' }}>
//         <MaterialCommunityIcons name="butterfly-outline" size={40} color="black" style={{ marginLeft: 20, }} />
//         <Text style={{ fontFamily: 'outfit', fontWeight: '400', fontSize: 20, marginRight: "25%", marginTop: 5, color: "#000000" }}>Women Tracker</Text>
//         <View style={{ flexDirection: 'row', marginRight: 10 }}>
//         <AntDesign name="adduser" size={34} color="black" style={{ marginLeft: 10, height: 30, width: 30 , marginTop: 5, marginRight: 10 }} />
//           <Ionicons name="notifications-outline" size={30} color="black"  style={{ marginLeft: 10,marginTop: 5 }}  /> 
        
          
//         </View>
//       </View>
//       <View style={{ height: 20 }} />

//       <View style={{ flex: 1, backgroundColor: '#DE518B', }}>
//         <TabView
//           navigationState={{ index, routes }}
//           renderScene={renderScene}
//           onIndexChange={setIndex}
//           initialLayout={{ width: layout.width }}
//           renderTabBar={CustomTabBar} // Use the custom tab bar
//         />
//       </View>

//       <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop:5 }}>
//         <Ionicons name="calendar-clear-outline" size={34} color="black" style={{ marginLeft: 10, }} />
//         {/* <Ionicons name="user" size={34} color="black" style={{ marginLeft: 10, }} /> */}
//         <Text style={{ fontSize: 20 }}>M</Text>
//         <FontAwesome name="users" size={34} color="black" style={{ marginLeft: 10, }} />
//         <FontAwesome name="user-circle" size={34} color="black" style={{ marginLeft: 10,marginRight: 10 }} />
//       </View>
//       <View style={{ height: 10 }} />
//       <View style={{ height: 10 }} />
//       <View style={{ height: 10 }} />

    
//       <Modal
//         animationType="slide"
//         transparent={true}
//         visible={modalVisible}
//         onRequestClose={closeModal}
//       >
//         <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
        
//           <View style={{ width: '80%', height: '70%', backgroundColor: 'white', padding: 20 }}>
          
//             <TouchableOpacity onPress={closeModal}>
//               <Text style={{ color: 'blue', marginTop: 20 }}>X {'\n'} {'\n'}{'\n'}{'\n'} {'\n'}{'\n'}</Text>
//               <View style={{ alignItems:'center' }}>
//                 <Text style={{fontSize: 20, fontWeight: '600',color : "#182035",}}>Contacts {'\n'}</Text>
//                 <Text style={{ fontSize: 16,fontWeight: '500',color : "#606268", }}>Allow your Contacts to chat with you {'\n'}</Text>
//               <TouchableOpacity style={{  marginTop: 20,backgroundColor: '#DE518B',padding: 10,borderRadius: 50,height: 44,width: 250}}>
//         <Text style={{ fontSize: 16, color: 'white',fontWeight: '600', textAlign:'center'}}>Allow</Text>
//       </TouchableOpacity>
//       <TouchableOpacity style={{marginTop: 20, backgroundColor: '#ffffff', padding: 10, borderWidth: 1,    borderRadius: 50,height: 44,width: 250}}>
//         <Text style={{ fontSize: 16,color: '#DE518B',fontWeight: '600',textAlign:'center',borderColor: '#DE518B',}}>Skip for now</Text>
//       </TouchableOpacity>
//               </View>
//             </TouchableOpacity>
//           </View>
//         </View>
//       </Modal>
//     </>
//   );
// }






