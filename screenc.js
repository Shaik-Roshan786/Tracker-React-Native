import * as React from 'react';
import { View, Text, useWindowDimensions, ImageBackground, TouchableOpacity, Modal, Image } from 'react-native';
import { TabView, SceneMap } from 'react-native-tab-view';
import { TabBar } from 'react-native-tab-view';
import { useNavigation } from '@react-navigation/native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6'

const FirstRoute = ({ setModalVisible }) => (
  <ImageBackground source={require('./assets/image1.png')} style={{ flex: 1 }}>
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontWeight: '500', color: '#ffffff', fontFamily: 'outfit', fontSize: 16 }}>
        You don’t have any chat history {'\n'} Add friends to start chat...{'\n'}
      </Text>
      <TouchableOpacity
        style={{ backgroundColor: "grey", borderRadius: 20, height: 53, width: 53, marginTop: 5 }}
        onPress={() => setModalVisible(true)} // Open the modal when clicked
      >
        <AntDesign name="adduser" size={34} color="white" style={{ marginLeft: 10, height: 30, width: 30, marginTop: 5 }} />
      </TouchableOpacity>
    </View>
  </ImageBackground>
);

const SecondRoute = ({ setModalVisible }) => (
  <ImageBackground source={require('./assets/image1.png')} style={{ flex: 1 }}>
    <TouchableOpacity
      style={{
        marginLeft: "75%",
        marginTop: "2%",
        backgroundColor: 'white',
        borderRadius: 20,
        paddingHorizontal: 10,
        paddingVertical: 5,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        width: 83
      }}
      onPress={() => setModalVisible(true)} // Open the modal when clicked
    >
      <Text style={{ color: '#de518b', marginLeft: 5 }}>Create</Text>
      <FontAwesome6 name="users" size={24} color="#de518b" style={{ marginLeft: 2 }} />
    </TouchableOpacity>
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontWeight: '500', color: '#ffffff', fontFamily: 'outfit', fontSize: 16 }}>
        You don’t have any group chat history {'\n'} Add groups to start chat...{'\n'}
      </Text>
      <TouchableOpacity
        style={{ backgroundColor: "grey", borderRadius: 20, height: 53, width: 53, marginTop: 5 }}
        onPress={() => setModalVisible(true)} // Open the modal when clicked
      >
        <AntDesign name="adduser" size={34} color="white" style={{ marginLeft: 10, height: 30, width: 30, marginTop: 5 }} />
      </TouchableOpacity>
    </View>
  </ImageBackground>
);

export default function TabViewExample() {
  const layout = useWindowDimensions();

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'first', title: 'chats' },
    { key: 'second', title: 'groups' },
  ]);

  const renderScene = SceneMap({
    first: FirstRoute,
    second: SecondRoute,
  });

  // State variable to control the visibility of the modal
  const [modalVisible, setModalVisible] = React.useState(false);

  const renderTabBar = props => (
    <View>
      <ImageBackground source={require('./assets/image1.png')} style={{ flexDirection: 'row', alignItems: 'center', height: 56 }}>
        <TabBar
          {...props}
          indicatorStyle={{ backgroundColor: 'white' }}
          style={{ backgroundColor: '#de518b', flex: 1 }}
        />
      </ImageBackground>
    </View>
  );

const navigation = useNavigation();  
const handleNavigation = () => {
  navigation.navigate('mycontacts')
}


  return (
    <>
      <View style={{ flexDirection: "row", justifyContent: 'space-between' }}>
        <MaterialCommunityIcons name="butterfly-outline" size={40} color="black" style={{ marginLeft: 20, }} />
        <Text style={{ fontFamily: 'outfit', fontWeight: '400', fontSize: 20, marginRight: "25%", marginTop: 5, color: "#000000" }}>Women Tracker</Text>
        <View style={{ flexDirection: 'row', marginRight: 10 }}>
          <AntDesign name="adduser" size={34} color="black" style={{ marginLeft: 10, height: 30, width: 30, marginTop: 5, marginRight: 10 }} />
          <Ionicons name="notifications-outline" size={30} color="black" style={{ marginLeft: 10, marginTop: 5 }} />
        </View>
      </View>
      <View style={{ height: 10 }} />
      <TabView
        navigationState={{ index, routes }}
        renderScene={({ route }) => {
          switch (route.key) {
            case 'first':
              return <FirstRoute setModalVisible={setModalVisible} />;
            case 'second':
              return <SecondRoute setModalVisible={setModalVisible} />;
            default:
              return null;
          }
        }}
        onIndexChange={setIndex}
        initialLayout={{ width: layout.width }}
        renderTabBar={renderTabBar}
      />
      {/* Modal component */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
      >
        {/* Add your modal content here */}
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(0, 0, 0, 0.7)' }}>
          {/* Add your modal content */}
          <View style={{ backgroundColor: 'white', padding: 20, borderRadius: 10, height: "70%", width: "80%" }}>
            <TouchableOpacity
              onPress={() => setModalVisible(false)}
              style={{ marginTop: 10, alignSelf: 'flex-end' }}
            >
              <Text style={{ marginLeft: "95%" }}>X</Text>
            </TouchableOpacity>
            <View style={{ alignItems: "center" }}>
              <Image source={require('./assets/image3.png')} style={{ width: 100, height: 140 }} />
              <Text style={{ color: "black", fontWeight: "bold", fontFamily: "outfit", fontSize: 20 }}>Contacts {'\n'} </Text>
              <Text style={{ color: "#606268", fontWeight: "400", fontFamily: "outfit", fontSize: 16 }}>Allow your Contacts  {'\n'} to chat with you</Text>
              <TouchableOpacity onPress={handleNavigation} style={{ marginTop: 20, backgroundColor: '#DE518B', padding: 10, borderRadius: 50, height: 44, width: 250 }}>
                <Text  style={{ fontSize: 16, color: 'white', fontWeight: '600', textAlign: 'center' }}>Allow</Text>
              </TouchableOpacity>
              <TouchableOpacity style={{ borderColor: '#DE518B', marginTop: 20, backgroundColor: 'white', padding: 10, borderRadius: 50, height: 44, width: 250, borderWidth: 1 }}>
                <Text style={{ fontSize: 16, color: '#DE518B', fontWeight: '600', textAlign: 'center' }}>Skip for now</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </>
  );
}




















// import * as React from 'react';
// import { View, Text, useWindowDimensions, ImageBackground, TouchableOpacity, Modal, Image } from 'react-native';
// import { TabView, SceneMap } from 'react-native-tab-view';
// import { TabBar } from 'react-native-tab-view';
// import { useNavigation } from '@react-navigation/native';
// import AntDesign from 'react-native-vector-icons/AntDesign';
// import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
// import Ionicons from 'react-native-vector-icons/Ionicons';
// import FontAwesome6 from 'react-native-vector-icons/FontAwesome6'

// const FirstRoute = ({ setModalVisible }) => (
//   <ImageBackground source={require('./assets/image1.png')} style={{ flex: 1 }}>
//     <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//       <Text style={{ fontWeight: '500', color: '#ffffff', fontFamily: 'outfit', fontSize: 16 }}>
//         You don’t have any chat history {'\n'} Add friends to start chat...{'\n'}
//       </Text>
//       <TouchableOpacity
//         style={{ backgroundColor: "grey", borderRadius: 20, height: 53, width: 53, marginTop: 5 }}
//         onPress={() => setModalVisible(true)} // Open the modal when clicked
//       >
//         <AntDesign name="adduser" size={34} color="white" style={{ marginLeft: 10, height: 30, width: 30, marginTop: 5 }} />
//       </TouchableOpacity>
//     </View>
//   </ImageBackground>
// );

// const SecondRoute = ({ setModalVisible }) => (
//   <ImageBackground source={require('./assets/image1.png')} style={{ flex: 1 }}>
//     <TouchableOpacity
//       style={{
//         marginLeft: "75%",
//         marginTop: "2%",
//         backgroundColor: 'white',
//         borderRadius: 20,
//         paddingHorizontal: 10,
//         paddingVertical: 5,
//         flexDirection: 'row',
//         alignItems: 'center',
//         justifyContent: 'center',
//         width: 83
//       }}
//       onPress={() => setModalVisible(true)} // Open the modal when clicked
//     >
//       <Text style={{ color: '#de518b', marginLeft: 5 }}>Create</Text>
//       <FontAwesome6 name="users" size={24} color="#de518b" style={{ marginLeft: 2 }} />
//     </TouchableOpacity>
//     <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//       <Text style={{ fontWeight: '500', color: '#ffffff', fontFamily: 'outfit', fontSize: 16 }}>
//         You don’t have any group chat history {'\n'} Add groups to start chat...{'\n'}
//       </Text>
//       <TouchableOpacity
//         style={{ backgroundColor: "grey", borderRadius: 20, height: 53, width: 53, marginTop: 5 }}
//         onPress={() => setModalVisible(true)} // Open the modal when clicked
//       >
//         <AntDesign name="adduser" size={34} color="white" style={{ marginLeft: 10, height: 30, width: 30, marginTop: 5 }} />
//       </TouchableOpacity>
//     </View>
//   </ImageBackground>
// );

// export default function TabViewExample() {
//   const layout = useWindowDimensions();

//   const [index, setIndex] = React.useState(0);
//   const [routes] = React.useState([
//     { key: 'first', title: 'chats' },
//     { key: 'second', title: 'groups' },
//   ]);

//   const renderScene = SceneMap({
//     first: FirstRoute,
//     second: SecondRoute,
//   });

//   // State variable to control the visibility of the modal
//   const [modalVisible, setModalVisible] = React.useState(false);

//   const renderTabBar = props => (
//     <View>
//       <ImageBackground source={require('./assets/image1.png')} style={{ flexDirection: 'row', alignItems: 'center', height: 56 }}>
//         <TabBar
//           {...props}
//           indicatorStyle={{ backgroundColor: 'white' }}
//           style={{ backgroundColor: '#de518b', flex: 1 }}
//         />
//       </ImageBackground>
//     </View>
//   );

  

//   return (
//     <>
//       <View style={{ flexDirection: "row", justifyContent: 'space-between' }}>
//         <MaterialCommunityIcons name="butterfly-outline" size={40} color="black" style={{ marginLeft: 20, }} />
//         <Text style={{ fontFamily: 'outfit', fontWeight: '400', fontSize: 20, marginRight: "25%", marginTop: 5, color: "#000000" }}>Women Tracker</Text>
//         <View style={{ flexDirection: 'row', marginRight: 10 }}>
//           <AntDesign name="adduser" size={34} color="black" style={{ marginLeft: 10, height: 30, width: 30, marginTop: 5, marginRight: 10 }} />
//           <Ionicons name="notifications-outline" size={30} color="black" style={{ marginLeft: 10, marginTop: 5 }} />
//         </View>
//       </View>
//       <View style={{ height: 10 }} />
//       <TabView
//         navigationState={{ index, routes }}
//         renderScene={({ route }) => {
//           switch (route.key) {
//             case 'first':
//               return <FirstRoute setModalVisible={setModalVisible} />;
//             case 'second':
//               return <SecondRoute setModalVisible={setModalVisible} />;
//             default:
//               return null;
//           }
//         }}
//         onIndexChange={setIndex}
//         initialLayout={{ width: layout.width }}
//         renderTabBar={renderTabBar}
//       />
//       {/* Modal component */}
//       <Modal
//         animationType="slide"
//         transparent={true}
//         visible={modalVisible}
//       >
//         {/* Add your modal content here */}
//         <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(0, 0, 0, 0.7)' }}>
//           {/* Add your modal content */}
//           <View style={{ backgroundColor: 'white', padding: 20, borderRadius: 10, height: "70%", width: "80%" }}>
//             <TouchableOpacity
//               onPress={() => setModalVisible(false)}
//               style={{ marginTop: 10, alignSelf: 'flex-end' }}
//             >
//               <Text style={{ marginLeft: "95%" }}>X</Text>
//             </TouchableOpacity>
//             <View style={{ alignItems: "center" }}>
//               <Image source={require('./assets/image3.png')} style={{ width: 100, height: 140 }} />
//               <Text style={{ color: "black", fontWeight: "bold", fontFamily: "outfit", fontSize: 20 }}>Contacts {'\n'} </Text>
//               <Text style={{ color: "#606268", fontWeight: "400", fontFamily: "outfit", fontSize: 16 }}>Allow your Contacts  {'\n'} to chat with you</Text>
//               <TouchableOpacity style={{ marginTop: 20, backgroundColor: '#DE518B', padding: 10, borderRadius: 50, height: 44, width: 250 }}>
//                 <Text style={{ fontSize: 16, color: 'white', fontWeight: '600', textAlign: 'center' }}>Allow</Text>
//               </TouchableOpacity>
//               <TouchableOpacity style={{ borderColor: '#DE518B', marginTop: 20, backgroundColor: 'white', padding: 10, borderRadius: 50, height: 44, width: 250, borderWidth: 1 }}>
//                 <Text style={{ fontSize: 16, color: '#DE518B', fontWeight: '600', textAlign: 'center' }}>Skip for now</Text>
//               </TouchableOpacity>
//             </View>
//           </View>
//         </View>
//       </Modal>
//     </>
//   );
// }

















// import * as React from 'react';
// import { View, Text, useWindowDimensions, ImageBackground, TouchableOpacity, Modal, Image } from 'react-native';
// import { TabView, SceneMap } from 'react-native-tab-view';
// import { TabBar } from 'react-native-tab-view';
// import AntDesign from 'react-native-vector-icons/AntDesign';
// import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
// import Ionicons from 'react-native-vector-icons/Ionicons';
// import FontAwesome6 from 'react-native-vector-icons/FontAwesome6'

// const FirstRoute = ({ setModalVisible }) => (
//   <ImageBackground source={require('./assets/image1.png')} style={{ flex: 1 }}>
//     <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//       <Text style={{ fontWeight: '500', color: '#ffffff', fontFamily: 'outfit', fontSize: 16 }}>
//         You don’t have any chat history {'\n'} Add friends to start chat...{'\n'}
//       </Text>
//       <TouchableOpacity
//         style={{ backgroundColor: "grey", borderRadius: 20, height: 53, width: 53, marginTop: 5 }}
//         onPress={() => setModalVisible(true)} // Open the modal when clicked
//       >
//         <AntDesign name="adduser" size={34} color="white" style={{ marginLeft: 10, height: 30, width: 30, marginTop: 5 }} />
//       </TouchableOpacity>
//     </View>
//   </ImageBackground>
// );

// const SecondRoute = ({ setModalVisible }) => (
//   <ImageBackground source={require('./assets/image1.png')} style={{ flex: 1 }}>
//    <TouchableOpacity
//       style={{marginLeft:"75%",marginTop:"2%", backgroundColor: 'white',borderRadius: 20, paddingHorizontal: 10, paddingVertical: 5,flexDirection: 'row', alignItems: 'center',justifyContent: 'center',width:83
//       }}
//     >
//       <Text style={{ color: '#de518b', marginLeft: 5 }}>Create</Text>
//       <FontAwesome6 name="users" size={24} color="#de518b" style={{ marginLeft:2 }} />
//     </TouchableOpacity>
//     <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        
//       <Text style={{ fontWeight: '500', color: '#ffffff', fontFamily: 'outfit', fontSize: 16 }}>
//         You don’t have any group chat history {'\n'} Add groups to start chat...{'\n'}
//       </Text>
//       <TouchableOpacity
//         style={{ backgroundColor: "grey", borderRadius: 20, height: 53, width: 53, marginTop: 5 }}
//         onPress={() => setModalVisible(true)} // Open the modal when clicked
//       >
//         <AntDesign name="adduser" size={34} color="white" style={{ marginLeft: 10, height: 30, width: 30, marginTop: 5 }} />
//       </TouchableOpacity>
//     </View>
//   </ImageBackground>
// );

// export default function TabViewExample() {
//   const layout = useWindowDimensions();

//   const [index, setIndex] = React.useState(0);
//   const [routes] = React.useState([
//     { key: 'first', title: 'chats' },
//     { key: 'second', title: 'groups' },
//   ]);

//   const renderScene = SceneMap({
//     first: FirstRoute,
//     second: SecondRoute,
//   });

//   // State variable to control the visibility of the modal
//   const [modalVisible, setModalVisible] = React.useState(false);

//   const renderTabBar = props => (
//     <View>
//       <ImageBackground source={require('./assets/image1.png')} style={{ flexDirection: 'row', alignItems: 'center', height: 56 }}>
//         <TabBar
//           {...props}
//           indicatorStyle={{ backgroundColor: 'white' }}
//           style={{ backgroundColor: '#de518b', flex: 1 }}
//         />
//       </ImageBackground>
//     </View>
//   );

//   return (
//     <>
//       <View style={{ flexDirection: "row", justifyContent: 'space-between' }}>
//         <MaterialCommunityIcons name="butterfly-outline" size={40} color="black" style={{ marginLeft: 20, }} />
//         <Text style={{ fontFamily: 'outfit', fontWeight: '400', fontSize: 20, marginRight: "25%", marginTop: 5, color: "#000000" }}>Women Tracker</Text>
//         <View style={{ flexDirection: 'row', marginRight: 10 }}>
//           <AntDesign name="adduser" size={34} color="black" style={{ marginLeft: 10, height: 30, width: 30, marginTop: 5, marginRight: 10 }} />
//           <Ionicons name="notifications-outline" size={30} color="black" style={{ marginLeft: 10, marginTop: 5 }} />
//         </View>
//       </View>
//       <View style={{ height: 10 }} />
//       <TabView
//         navigationState={{ index, routes }}
//         renderScene={({ route }) => {
//           switch (route.key) {
//             case 'first':
//               return <FirstRoute setModalVisible={setModalVisible} />;
//             case 'second':
//               return <SecondRoute setModalVisible={setModalVisible} />;
//             default:
//               return null;
//           }
//         }}
//         onIndexChange={setIndex}
//         initialLayout={{ width: layout.width }}
//         renderTabBar={renderTabBar}
//       />
//       {/* Modal component */}
//       <Modal
//         animationType="slide"
//         transparent={true}
//         visible={modalVisible}
//       >
//         {/* Add your modal content here */}
//         <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(0, 0, 0, 0.7)' }}>
//           {/* Add your modal content */}
//           <View style={{ backgroundColor: 'white', padding: 20, borderRadius: 10, height: "70%", width: "80%" }}>
//             <TouchableOpacity
//               onPress={() => setModalVisible(false)}
//               style={{ marginTop: 10, alignSelf: 'flex-end' }}
//             >
//               <Text style={{ marginLeft: "95%" }}>X</Text>
//             </TouchableOpacity>
//             <View style={{ alignItems: "center" }}>
//               <Image source={require('./assets/image3.png')} style={{ width: 100, height: 140 }} />
//               <Text style={{ color: "black", fontWeight: "bold", fontFamily: "outfit", fontSize: 20 }}>Contacts {'\n'} </Text>
//               <Text style={{ color: "#606268", fontWeight: "400", fontFamily: "outfit", fontSize: 16 }}>Allow your Contacts  {'\n'} to chat with you</Text>
//               <TouchableOpacity style={{ marginTop: 20, backgroundColor: '#DE518B', padding: 10, borderRadius: 50, height: 44, width: 250 }}>
//                 <Text style={{ fontSize: 16, color: 'white', fontWeight: '600', textAlign: 'center' }}>Allow</Text>
//               </TouchableOpacity>
//               <TouchableOpacity style={{ borderColor: '#DE518B', marginTop: 20, backgroundColor: 'white', padding: 10, borderRadius: 50, height: 44, width: 250, borderWidth: 1 }}>
//                 <Text style={{ fontSize: 16, color: '#DE518B', fontWeight: '600', textAlign: 'center' }}>Skip for now</Text>
//               </TouchableOpacity>
//             </View>
//           </View>
//         </View>
//       </Modal>
//     </>
//   );
// }































// import * as React from 'react';
// import { View, Text, useWindowDimensions, ImageBackground, Touchable, TouchableOpacity } from 'react-native';
// import { TabView, SceneMap } from 'react-native-tab-view';
// import { TabBar } from 'react-native-tab-view';
// import AntDesign from 'react-native-vector-icons/AntDesign';
// import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
// import Ionicons from 'react-native-vector-icons/Ionicons';

// const FirstRoute = () => (
//   <ImageBackground source={require('./assets/image1.png')} style={{ flex: 1 }}>
//     <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//       <Text style={{ fontWeight: '500', color: '#ffffff', fontFamily: 'outfit', fontSize: 16 }}>
//         You don’t have any chat history {'\n'} Add friends to start chat...{'\n'}
//       </Text>
//       <TouchableOpacity style={{ backgroundColor:"grey", borderRadius:20, height:53,width:53 }}>
//       <AntDesign name="adduser" size={34} color="white" style={{ marginLeft: 10, height: 30, width: 30,marginTop:5 }} />
//       </TouchableOpacity>
//     </View>
//   </ImageBackground>
// );

// const SecondRoute = () => (
//     <ImageBackground source={require('./assets/image1.png')} style={{ flex: 1 }}>
   
//   </ImageBackground>
// );

// const renderScene = SceneMap({
//   first: FirstRoute,
//   second: SecondRoute,
// });

// export default function TabViewExample() {
//   const layout = useWindowDimensions();

//   const [index, setIndex] = React.useState(0);
//   const [routes] = React.useState([
//     { key: 'first', title: 'chats' },
//     { key: 'second', title: 'groups' },
//   ]);

//   const renderTabBar = props => (
//     <View>
//       <ImageBackground source={require('./assets/image1.png')} style={{ flexDirection: 'row', alignItems: 'center', height: 56 }}>
//         <TabBar
//           {...props}
//           indicatorStyle={{ backgroundColor: '' }}
//           style={{ backgroundColor: '', flex: 1 }}
//         />
//       </ImageBackground>
//     </View>
//   );

//   return (
//     <>
//       <View style={{ flexDirection: "row", justifyContent: 'space-between' }}>
//         <MaterialCommunityIcons name="butterfly-outline" size={40} color="black" style={{ marginLeft: 20, }} />
//         <Text style={{ fontFamily: 'outfit', fontWeight: '400', fontSize: 20, marginRight: "25%", marginTop: 5, color: "#000000" }}>Women Tracker</Text>
//         <View style={{ flexDirection: 'row', marginRight: 10 }}>
//           <AntDesign name="adduser" size={34} color="black" style={{ marginLeft: 10, height: 30, width: 30, marginTop: 5, marginRight: 10 }} />
//           <Ionicons name="notifications-outline" size={30} color="black" style={{ marginLeft: 10, marginTop: 5 }} />
//         </View>
//       </View>
//       <View style={{ height: 10 }} />
//       <TabView
//         navigationState={{ index, routes }}
//         renderScene={renderScene}
//         onIndexChange={setIndex}
//         initialLayout={{ width: layout.width }}
//         renderTabBar={renderTabBar}
//       />
//     </>
//   );
// }










// Duplicate code
// import * as React from 'react';
// import { View, useWindowDimensions, StyleSheet, Text, Modal, TouchableOpacity } from 'react-native';
// import { TabView, SceneMap } from 'react-native-tab-view';
// import Ionicons from 'react-native-vector-icons/Ionicons';
// import AntDesign from 'react-native-vector-icons/AntDesign';
// import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
// import FontAwesome from 'react-native-vector-icons/FontAwesome'

// const FirstRoute = () => {
//   return (
//     <View style={{ flex: 1, backgroundColor: '#DE518B' }}>
//       <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//         <Text style={{ fontWeight: '500', color: "#ffffff", fontFamily: "outfit", fontSize: 16 }}>
//           You don’t have any chat History {'\n'} Add friends to start chat...{'\n'}
//         </Text>
//         <AntDesign name="adduser"  size={34} color="white" style={{ marginLeft: 10, height: 30, width: 30 }} />
//       </View>
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
// //   const [modalVisible, setModalVisible] = React.useState(false); // State to manage the visibility of the modal

//   // Function to open the modal
// //   const openModal = () => {
// //     setModalVisible(true);
// //   };

//   // Function to close the modal
// //   const closeModal = () => {
// //     setModalVisible(false);
// //   };

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

   
//     </>
//   );
// }






















// original working code

// import * as React from 'react';
// import { View, useWindowDimensions, StyleSheet, Text, Modal, TouchableOpacity } from 'react-native';
// import { TabView, SceneMap } from 'react-native-tab-view';
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
//         <AntDesign name="adduser"  size={34} color="white" style={{ marginLeft: 10, height: 30, width: 30 }} />
//       </View>
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
//               <TouchableOpacity style={{  marginTop: 20,backgroundColor: '#DE518B',
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
//       </Modal>
//     </>
//   );
// }

