










// import * as React from 'react';
// import { View, useWindowDimensions, StyleSheet, Text, Modal, TouchableOpacity } from 'react-native';
// import { TabView, SceneMap } from 'react-native-tab-view';
// // import Icon from 'react-native-vector-icons/FontAwesome';
// import Ionicons from 'react-native-vector-icons/Ionicons';
// import AntDesign from 'react-native-vector-icons/AntDesign';
// import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
// import FontAwesome from 'react-native-vector-icons/FontAwesome'

// const FirstRoute = ({ openModal } ) => {
//   return (
//     <View style={{ flex: 1, backgroundColor: '#DE518B' }}>
//       <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//         <Text style={{ fontWeight: '500', color: "#ffffff", fontFamily: "outfit", fontSize: 16 }}>
//           You don’t have any chat History {'\n'} Add friends to start chat...{'\n'}
//         </Text>
//         <AntDesign name="adduser" size={34} color="white" style={{ marginLeft: 10, height: 30, width: 30 }} />
//       </View>
//       {/* You can trigger the modal using openModal */}
//       {/* <TouchableOpacity onPress={openModal}>
//         <Text style={{ color: 'white', textDecorationLine: 'underline', marginTop: 20 }}>
//           Open Modal
//         </Text>
//       </TouchableOpacity> */}
//     </View>
//   );
// };

// const SecondRoute = () => (
//   <View style={{ flex: 1, backgroundColor: '#DE518B' }}>
//     {/* Your GROUPS content goes here */}
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

//   const handleTabPress = (route) => {
//     if (route.key === 'first') {
//       openModal();
//     } else {
//       setIndex(routes.indexOf(route));
//     }
//   };

//   const CustomTabBar = (props) => (
//     <View style={styles.tabBar}>
//       {props.navigationState.routes.map((route, index) => (
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

//       {/* Modal */}
//       <Modal
//         animationType="slide"
//         transparent={true}
//         visible={modalVisible}
//         onRequestClose={closeModal}
//       >
//         <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
//           {/* Modal content */}
//           <View style={{ width: '80%', height: '70%', backgroundColor: 'white', padding: 20 }}>
//             {/* Add your modal content here */}
//             {/* <Text>This is the modal content</Text> */}
//             <TouchableOpacity onPress={closeModal}>
//               <Text style={{ color: 'blue', marginTop: 20 }}>X {'\n'} {'\n'}{'\n'}{'\n'} {'\n'}{'\n'}</Text>
//               <View style={{ alignItems:'center' }}>
//                 <Text style={{fontSize: 20, fontWeight: '600',color : "#182035",}}>Contacts {'\n'}</Text>
//                 <Text style={{ fontSize: 16,fontWeight: '500',color : "#606268", }}>Allow your Contacts to chat with you {'\n'}</Text>
//               <TouchableOpacity style={{  marginTop: 20,
//     backgroundColor: '#DE518B',
//     padding: 10,
//     borderRadius: 50,
//     height: 44,
//     width: 250}}>
//         <Text style={{ fontSize: 16,
//     color: 'white',
//     fontWeight: '600',
//     textAlign:'center'}}>Allow</Text>
//       </TouchableOpacity>
//       <TouchableOpacity style={{marginTop: 20,
//     backgroundColor: '#ffffff',
//     padding: 10,
//     borderWidth: 1,   
//     borderRadius: 50,
//     height: 44,
//     width: 250}}>
//         <Text style={{ fontSize: 16,
//     color: '#DE518B',
//     fontWeight: '600',
//     textAlign:'center',
//     borderColor: '#DE518B',}}>Skip for now</Text>
//       </TouchableOpacity>
//               </View>
//             </TouchableOpacity>
//           </View>
//         </View>
//       </Modal>
//     </>
//   );
// }




















// import * as React from 'react';
// import { View, useWindowDimensions, StyleSheet, Text, Modal, TouchableOpacity } from 'react-native';
// import { TabView, SceneMap } from 'react-native-tab-view';
// // import Icon from 'react-native-vector-icons/FontAwesome';
// import Ionicons from 'react-native-vector-icons/Ionicons';
// import AntDesign from 'react-native-vector-icons/AntDesign';
// import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
// import FontAwesome from 'react-native-vector-icons/FontAwesome'

// const FirstRoute = ({ openModal }: { openModal: () => void }) => {
//   return (
//     <View style={{ flex: 1, backgroundColor: '#DE518B' }}>
//       <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//         <Text style={{ fontWeight: '500', color: "#ffffff", fontFamily: "outfit", fontSize: 16 }}>
//           You don’t have any chat History {'\n'} Add friends to start chat...{'\n'}
//         </Text>
//         <AntDesign name="adduser" size={34} color="white" style={{ marginLeft: 10, height: 30, width: 30 }} />
//       </View>
//       {/* You can trigger the modal using openModal */}
//       {/* <TouchableOpacity onPress={openModal}>
//         <Text style={{ color: 'white', textDecorationLine: 'underline', marginTop: 20 }}>
//           Open Modal
//         </Text>
//       </TouchableOpacity> */}
//     </View>
//   );
// };

// const SecondRoute = () => (
//   <View style={{ flex: 1, backgroundColor: '#DE518B' }}>
//     {/* Your GROUPS content goes here */}
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

//       {/* Modal */}
//       <Modal
//         animationType="slide"
//         transparent={true}
//         visible={modalVisible}
//         onRequestClose={closeModal}
//       >
//         <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
//           {/* Modal content */}
//           <View style={{ width: '80%', height: '70%', backgroundColor: 'white', padding: 20 }}>
//             {/* Add your modal content here */}
//             {/* <Text>This is the modal content</Text> */}
//             <TouchableOpacity onPress={closeModal}>
//               <Text style={{ color: 'blue', marginTop: 20 }}>X {'\n'} {'\n'}{'\n'}{'\n'} {'\n'}{'\n'}</Text>
//               <View style={{ alignItems:'center' }}>
//                 <Text style={{fontSize: 20, fontWeight: '600',color : "#182035",}}>Contacts {'\n'}</Text>
//                 <Text style={{ fontSize: 16,fontWeight: '500',color : "#606268", }}>Allow your Contacts to chat with you {'\n'}</Text>
//               <TouchableOpacity style={{  marginTop: 20,
//     backgroundColor: '#DE518B',
//     padding: 10,
//     borderRadius: 50,
//     height: 44,
//     width: 250}}>
//         <Text style={{ fontSize: 16,
//     color: 'white',
//     fontWeight: '600',
//     textAlign:'center'}}>Allow</Text>
//       </TouchableOpacity>
//       <TouchableOpacity style={{marginTop: 20,
//     backgroundColor: '#ffffff',
//     padding: 10,
//     borderWidth: 1,   
//     borderRadius: 50,
//     height: 44,
//     width: 250}}>
//         <Text style={{ fontSize: 16,
//     color: '#DE518B',
//     fontWeight: '600',
//     textAlign:'center',
//     borderColor: '#DE518B',}}>Skip for now</Text>
//       </TouchableOpacity>
//               </View>
//             </TouchableOpacity>
//           </View>
//         </View>
//       </Modal>
//     </>
//   );
// }


