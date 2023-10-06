import * as React from 'react';
import { Image, ImageBackground, Text, TextInput, Touchable, View, useWindowDimensions } from 'react-native';
import { TabView, SceneMap } from 'react-native-tab-view';
import { TabBar } from 'react-native-tab-view';
import { useNavigation } from '@react-navigation/native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import AntDesign from 'react-native-vector-icons/AntDesign';
import { TouchableOpacity } from 'react-native-gesture-handler';

const FirstRoute = ({ navigation }) => (
  <>
    {/* <ImageBackground source={{ uri: '' }} style={{ height: "100%" }} > */}
    <ImageBackground source={require('../assets/image1.png')} style={{ height: "100%" }} >
      <View style={{ flexDirection: "row", marginTop: 15 }}>
        <Image source={{ uri: 'https://media.sproutsocial.com/uploads/2022/06/profile-picture.jpeg' }} style={{ width: 55, height: 60, borderRadius: 50 }} />
        <Text style={{ color: "white", padding: 15, fontSize: 18, fontWeight: "500" }}>Chandhu</Text>
        <View style={{ backgroundColor: '#42ff00', borderRadius: 50, width: 50, height: 50, justifyContent: 'center', alignItems: 'center', marginLeft: "30%" }}>
          <MaterialIcons name="done" size={28} color="gray" style={{ marginLeft: 10, }} />
        </View>
        <View style={{ backgroundColor: '#ff5858', borderRadius: 50, width: 50, height: 50, justifyContent: 'center', alignItems: 'center', marginLeft: 20 }}>
          <AntDesign name="close" size={28} color="gray" style={{ marginLeft: 10, }} />
        </View>
      </View>
      <View style={{ backgroundColor: 'white', height: 1, width: '100%', marginTop: 5 }} />

      <View onPress={() => navigation.navigate('Chatscreen')} style={{ flexDirection: "row", marginTop: 15 }}>
        <Image source={{ uri: 'https://media.sproutsocial.com/uploads/2022/06/profile-picture.jpeg' }} style={{ width: 55, height: 60, borderRadius: 50 }} />
        <Text style={{ color: "white", padding: 15, fontSize: 18, fontWeight: "500" }}>Saankhya</Text>
        <View style={{ backgroundColor: '#42ff00', borderRadius: 50, width: 50, height: 50, justifyContent: 'center', alignItems: 'center', marginLeft: "30%" }}>
          <MaterialIcons name="done" size={28} color="gray" style={{ marginLeft: 10, }} />
        </View>
        <View style={{ backgroundColor: '#ff5858', borderRadius: 50, width: 50, height: 50, justifyContent: 'center', alignItems: 'center', marginLeft: 20 }}>
          <AntDesign name="close" size={28} color="gray" style={{ marginLeft: 10, }} />
        </View>
      </View>
      <View style={{ backgroundColor: 'white', height: 1, width: '100%', marginTop: 5 }} />
      <View style={{ flexDirection: "row", marginTop: 15 }}>
        <Image source={{ uri: 'https://media.sproutsocial.com/uploads/2022/06/profile-picture.jpeg' }} style={{ width: 55, height: 60, borderRadius: 50 }} />
        <Text style={{ color: "white", padding: 15, fontSize: 18, fontWeight: "500" }}>Praneeth</Text>
        <View style={{ backgroundColor: '#42ff00', borderRadius: 50, width: 50, height: 50, justifyContent: 'center', alignItems: 'center', marginLeft: "30%" }}>
          <MaterialIcons name="done" size={28} color="gray" style={{ marginLeft: 10, }} />
        </View>
        <View style={{ backgroundColor: '#ff5858', borderRadius: 50, width: 50, height: 50, justifyContent: 'center', alignItems: 'center', marginLeft: 20 }}>
          <AntDesign name="close" size={28} color="gray" style={{ marginLeft: 10, }} />
        </View>
      </View>
      <View style={{ backgroundColor: 'white', height: 1, width: '100%', marginTop: 5 }} />
      <View style={{ flexDirection: "row", marginTop: 15 }}>
        <Image source={{ uri: 'https://media.sproutsocial.com/uploads/2022/06/profile-picture.jpeg' }} style={{ width: 55, height: 60, borderRadius: 50 }} />
        <Text style={{ color: "white", padding: 15, fontSize: 18, fontWeight: "500" }}>Chandhu</Text>
        <View style={{ backgroundColor: '#42ff00', borderRadius: 50, width: 50, height: 50, justifyContent: 'center', alignItems: 'center', marginLeft: "30%" }}>
          <MaterialIcons name="done" size={28} color="gray" style={{ marginLeft: 10, }} />
        </View>
        <View style={{ backgroundColor: '#ff5858', borderRadius: 50, width: 50, height: 50, justifyContent: 'center', alignItems: 'center', marginLeft: 20 }}>
          <AntDesign name="close" size={28} color="gray" style={{ marginLeft: 10, }} />
        </View>
      </View>
      <View style={{ backgroundColor: 'white', height: 1, width: '100%', marginTop: 5 }} />



    </ImageBackground>
    <View style={{ flex: 1 }} />
  </>
);

const SecondRoute = () => (
  <>
    {/* <ImageBackground source={{ uri: '' }} style={{ height: "100%" }} > */}
    <ImageBackground source={require('../assets/image1.png')} style={{ height: "100%" }} >
      <View style={{ flexDirection: "row", marginTop: 15 }}>
        <Image source={{ uri: 'https://media.sproutsocial.com/uploads/2022/06/profile-picture.jpeg' }} style={{ width: 55, height: 60, borderRadius: 50 }} />
        <Text style={{ color: "white", padding: 15, fontSize: 18, fontWeight: "500" }}>Chandhu</Text>
        <View style={{ backgroundColor: 'white', borderRadius: 50, width: 50, height: 50, justifyContent: 'center', alignItems: 'center', marginLeft: "45%" }}>
          <Text style={{ color: "#DE518B", fontFamily: "outfit" }}>Send Invite</Text>
        </View>
      </View>
      <View style={{ backgroundColor: 'white', height: 1, width: '100%', marginTop: 5 }} />

      <View style={{ flexDirection: "row", marginTop: 15 }}>
        <Image source={{ uri: 'https://media.sproutsocial.com/uploads/2022/06/profile-picture.jpeg' }} style={{ width: 55, height: 60, borderRadius: 50 }} />
        <Text style={{ color: "white", padding: 15, fontSize: 18, fontWeight: "500" }}>Sankhya</Text>
        <View style={{ backgroundColor: 'white', borderRadius: 50, width: 50, height: 50, justifyContent: 'center', alignItems: 'center', marginLeft: "45%" }}>
          <Text style={{ color: "#DE518B", fontFamily: "outfit" }}>Send Invite</Text>
        </View>
      </View>
      <View style={{ backgroundColor: 'white', height: 1, width: '100%', marginTop: 5 }} />
      <View style={{ flexDirection: "row", marginTop: 15 }}>
        <Image source={{ uri: 'https://media.sproutsocial.com/uploads/2022/06/profile-picture.jpeg' }} style={{ width: 55, height: 60, borderRadius: 50 }} />
        <Text style={{ color: "white", padding: 15, fontSize: 18, fontWeight: "500" }}>Praneeth</Text>
        <View style={{ backgroundColor: 'white', borderRadius: 50, width: 50, height: 50, justifyContent: 'center', alignItems: 'center', marginLeft: "45%" }}>
          <Text style={{ color: "#DE518B", fontFamily: "outfit" }}>Send Invite</Text>
        </View>
      </View>
      <View style={{ backgroundColor: 'white', height: 1, width: '100%', marginTop: 5 }} />
      <View style={{ flexDirection: "row", marginTop: 15 }}>
        <Image source={{ uri: 'https://media.sproutsocial.com/uploads/2022/06/profile-picture.jpeg' }} style={{ width: 55, height: 60, borderRadius: 50 }} />
        <Text style={{ color: "white", padding: 15, fontSize: 18, fontWeight: "500" }}>Chandhu</Text>
        <View style={{ backgroundColor: 'white', borderRadius: 50, width: 50, height: 50, justifyContent: 'center', alignItems: 'center', marginLeft: "45%" }}>
          <Text style={{ color: "#DE518B", fontFamily: "outfit" }}>Send Invite</Text>
        </View>

      </View>
      <View style={{ backgroundColor: 'white', height: 1, width: '100%', marginTop: 5 }} />



    </ImageBackground>
    <View style={{ flex: 1, }} />
  </>
);

const renderScene = SceneMap({
  first: FirstRoute,
  second: SecondRoute,
});

 const renderTabBar = props => (
    <View>
      <ImageBackground source={require('../assets/image1.png')} style={{ flexDirection: 'row', alignItems: 'center', height: 56 }}>
        <TabBar
          {...props}
          indicatorStyle={{ backgroundColor: 'white' }}
          style={{ backgroundColor: '#de518b', flex: 1 }}
        />
      </ImageBackground>
    </View>
  );

export default function TabViewExample() {
  const layout = useWindowDimensions();

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'first', title: 'Already in WTracker' },
    { key: 'second', title: 'Invite to WTracker' },
  ]);

  const navigation = useNavigation();  
const handleNavigation2 = () => {
  console.log('chat clicked')
  navigation.navigate('Chatscreen')
}

  return (
    <>
    {/* <ImageBackground source={{ uri: '' }}> */}

      <View style={{  flexDirection: "row", justifyContent: "space-between", marginTop: 10, marginBottom: 10, }}>
        <View style={{ flexDirection: "row" }}>
        
          <Image source={require('../assets/image2.png')} style={{ height: 40, width: 40 }} ></Image>
          <Text style={{ fontSize: 20, fontWeight: "600", color: "black", padding: 5 }}>Women Tracker</Text>
        </View>
        <MaterialIcons name="notifications-active" size={26} color="black" style={{ marginLeft: 10, height: 30, width: 30, marginRight: 10, marginTop: 5 }} />
      </View>

      <View style={{ backgroundColor:"#de518b" }}>
      
        
        <View style={{ flexDirection: "row", justifyContent: 'space-between', alignItems: 'center' }}>
          <View style={{ marginTop: 10, flexDirection: "row", justifyContent: "space-between" }}>
            <AntDesign name="left" size={28} color="white" style={{ marginTop: 5 }} />
            <View style={{ flexDirection: 'row', alignItems: 'center', backgroundColor: "#c4c4c4", width: "90%", borderRadius: 12 }}>
              <AntDesign name="search1" size={20} color="gray" style={{ marginLeft: 10 }} />
              <TextInput placeholder='Search' style={{ flex: 1, paddingLeft: 10 }} />
            </View>
          </View>
        </View>
        <Text style={{ color: "white", fontSize: 17, fontWeight: "500", marginTop: 5, textAlign: 'center', marginBottom: 10 }}>My Contacts</Text>
        </View>
      {/* </ImageBackground> */}
      <TabView
        navigationState={{ index, routes }}
        renderScene={renderScene}
        onIndexChange={setIndex}
        initialLayout={{ width: layout.width }}
        renderTabBar={renderTabBar}
        navigation={navigation}
      />


    </>
  );
}


















// import * as React from 'react';
// import { Image, ImageBackground, Text, TextInput, Touchable, View, useWindowDimensions } from 'react-native';
// import { TabView, SceneMap } from 'react-native-tab-view';
// import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
// import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
// import AntDesign from 'react-native-vector-icons/AntDesign';
// import { TouchableOpacity } from 'react-native-gesture-handler';

// const FirstRoute = () => (
//   <>
//     {/* <ImageBackground source={{ uri: '' }} style={{ height: "100%" }} > */}
//     <ImageBackground source={require('../assets/image1.png')} style={{ height: "100%" }} >
//       <View style={{ flexDirection: "row", marginTop: 15 }}>
//         <Image source={{ uri: 'https://media.sproutsocial.com/uploads/2022/06/profile-picture.jpeg' }} style={{ width: 55, height: 60, borderRadius: 50 }} />
//         <Text style={{ color: "white", padding: 15, fontSize: 18, fontWeight: "500" }}>Chandhu</Text>
//         <View style={{ backgroundColor: '#42ff00', borderRadius: 50, width: 50, height: 50, justifyContent: 'center', alignItems: 'center', marginLeft: "30%" }}>
//           <MaterialIcons name="done" size={28} color="gray" style={{ marginLeft: 10, }} />
//         </View>
//         <View style={{ backgroundColor: '#ff5858', borderRadius: 50, width: 50, height: 50, justifyContent: 'center', alignItems: 'center', marginLeft: 20 }}>
//           <AntDesign name="close" size={28} color="gray" style={{ marginLeft: 10, }} />
//         </View>
//       </View>
//       <View style={{ backgroundColor: 'white', height: 1, width: '100%', marginTop: 5 }} />

//       <View style={{ flexDirection: "row", marginTop: 15 }}>
//         <Image source={{ uri: 'https://media.sproutsocial.com/uploads/2022/06/profile-picture.jpeg' }} style={{ width: 55, height: 60, borderRadius: 50 }} />
//         <Text style={{ color: "white", padding: 15, fontSize: 18, fontWeight: "500" }}>Saankhya</Text>
//         <View style={{ backgroundColor: '#42ff00', borderRadius: 50, width: 50, height: 50, justifyContent: 'center', alignItems: 'center', marginLeft: "30%" }}>
//           <MaterialIcons name="done" size={28} color="gray" style={{ marginLeft: 10, }} />
//         </View>
//         <View style={{ backgroundColor: '#ff5858', borderRadius: 50, width: 50, height: 50, justifyContent: 'center', alignItems: 'center', marginLeft: 20 }}>
//           <AntDesign name="close" size={28} color="gray" style={{ marginLeft: 10, }} />
//         </View>
//       </View>
//       <View style={{ backgroundColor: 'white', height: 1, width: '100%', marginTop: 5 }} />
//       <View style={{ flexDirection: "row", marginTop: 15 }}>
//         <Image source={{ uri: 'https://media.sproutsocial.com/uploads/2022/06/profile-picture.jpeg' }} style={{ width: 55, height: 60, borderRadius: 50 }} />
//         <Text style={{ color: "white", padding: 15, fontSize: 18, fontWeight: "500" }}>Praneeth</Text>
//         <View style={{ backgroundColor: '#42ff00', borderRadius: 50, width: 50, height: 50, justifyContent: 'center', alignItems: 'center', marginLeft: "30%" }}>
//           <MaterialIcons name="done" size={28} color="gray" style={{ marginLeft: 10, }} />
//         </View>
//         <View style={{ backgroundColor: '#ff5858', borderRadius: 50, width: 50, height: 50, justifyContent: 'center', alignItems: 'center', marginLeft: 20 }}>
//           <AntDesign name="close" size={28} color="gray" style={{ marginLeft: 10, }} />
//         </View>
//       </View>
//       <View style={{ backgroundColor: 'white', height: 1, width: '100%', marginTop: 5 }} />
//       <View style={{ flexDirection: "row", marginTop: 15 }}>
//         <Image source={{ uri: 'https://media.sproutsocial.com/uploads/2022/06/profile-picture.jpeg' }} style={{ width: 55, height: 60, borderRadius: 50 }} />
//         <Text style={{ color: "white", padding: 15, fontSize: 18, fontWeight: "500" }}>Chandhu</Text>
//         <View style={{ backgroundColor: '#42ff00', borderRadius: 50, width: 50, height: 50, justifyContent: 'center', alignItems: 'center', marginLeft: "30%" }}>
//           <MaterialIcons name="done" size={28} color="gray" style={{ marginLeft: 10, }} />
//         </View>
//         <View style={{ backgroundColor: '#ff5858', borderRadius: 50, width: 50, height: 50, justifyContent: 'center', alignItems: 'center', marginLeft: 20 }}>
//           <AntDesign name="close" size={28} color="gray" style={{ marginLeft: 10, }} />
//         </View>
//       </View>
//       <View style={{ backgroundColor: 'white', height: 1, width: '100%', marginTop: 5 }} />



//     </ImageBackground>
//     <View style={{ flex: 1 }} />
//   </>
// );

// const SecondRoute = () => (
//   <>
//     {/* <ImageBackground source={{ uri: '' }} style={{ height: "100%" }} > */}
//     <ImageBackground source={require('../assets/image1.png')} style={{ height: "100%" }} >
//       <View style={{ flexDirection: "row", marginTop: 15 }}>
//         <Image source={{ uri: 'https://media.sproutsocial.com/uploads/2022/06/profile-picture.jpeg' }} style={{ width: 55, height: 60, borderRadius: 50 }} />
//         <Text style={{ color: "white", padding: 15, fontSize: 18, fontWeight: "500" }}>Chandhu</Text>
//         <View style={{ backgroundColor: 'white', borderRadius: 50, width: 50, height: 50, justifyContent: 'center', alignItems: 'center', marginLeft: "45%" }}>
//           <Text style={{ color: "#DE518B", fontFamily: "outfit" }}>Send Invite</Text>
//         </View>
//       </View>
//       <View style={{ backgroundColor: 'white', height: 1, width: '100%', marginTop: 5 }} />

//       <View style={{ flexDirection: "row", marginTop: 15 }}>
//         <Image source={{ uri: 'https://media.sproutsocial.com/uploads/2022/06/profile-picture.jpeg' }} style={{ width: 55, height: 60, borderRadius: 50 }} />
//         <Text style={{ color: "white", padding: 15, fontSize: 18, fontWeight: "500" }}>Sankhya</Text>
//         <View style={{ backgroundColor: 'white', borderRadius: 50, width: 50, height: 50, justifyContent: 'center', alignItems: 'center', marginLeft: "45%" }}>
//           <Text style={{ color: "#DE518B", fontFamily: "outfit" }}>Send Invite</Text>
//         </View>
//       </View>
//       <View style={{ backgroundColor: 'white', height: 1, width: '100%', marginTop: 5 }} />
//       <View style={{ flexDirection: "row", marginTop: 15 }}>
//         <Image source={{ uri: 'https://media.sproutsocial.com/uploads/2022/06/profile-picture.jpeg' }} style={{ width: 55, height: 60, borderRadius: 50 }} />
//         <Text style={{ color: "white", padding: 15, fontSize: 18, fontWeight: "500" }}>Praneeth</Text>
//         <View style={{ backgroundColor: 'white', borderRadius: 50, width: 50, height: 50, justifyContent: 'center', alignItems: 'center', marginLeft: "45%" }}>
//           <Text style={{ color: "#DE518B", fontFamily: "outfit" }}>Send Invite</Text>
//         </View>
//       </View>
//       <View style={{ backgroundColor: 'white', height: 1, width: '100%', marginTop: 5 }} />
//       <View style={{ flexDirection: "row", marginTop: 15 }}>
//         <Image source={{ uri: 'https://media.sproutsocial.com/uploads/2022/06/profile-picture.jpeg' }} style={{ width: 55, height: 60, borderRadius: 50 }} />
//         <Text style={{ color: "white", padding: 15, fontSize: 18, fontWeight: "500" }}>Chandhu</Text>
//         <View style={{ backgroundColor: 'white', borderRadius: 50, width: 50, height: 50, justifyContent: 'center', alignItems: 'center', marginLeft: "45%" }}>
//           <Text style={{ color: "#DE518B", fontFamily: "outfit" }}>Send Invite</Text>
//         </View>

//       </View>
//       <View style={{ backgroundColor: 'white', height: 1, width: '100%', marginTop: 5 }} />



//     </ImageBackground>
//     <View style={{ flex: 1, }} />
//   </>
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

//       <View style={{ flexDirection: "row", justifyContent: "space-between", marginTop: 10, marginBottom: 10 }}>
//         <View style={{ flexDirection: "row" }}>
//           {/* <MaterialCommunityIcons name="butterfly-outline" size={24} color="black" style={{ marginLeft: 10, height: 30, width: 30,marginRight:10 }} /> */}
//           <Image source={{uri:''}} style={{ height: 40, width: 40 }} ></Image>
//           <Text style={{ fontSize: 20, fontWeight: "600", color: "black", padding: 5 }}>Women Tracker</Text>
//         </View>
//         <MaterialIcons name="notifications-active" size={26} color="black" style={{ marginLeft: 10, height: 30, width: 30, marginRight: 10, marginTop: 5 }} />
//       </View>


//       <ImageBackground source={{ uri: '' }}>
        
//         <View style={{ flexDirection: "row", justifyContent: 'space-between', alignItems: 'center' }}>
//           <View style={{ marginTop: 10, flexDirection: "row", justifyContent: "space-between" }}>
//             <AntDesign name="left" size={28} color="white" style={{ marginTop: 5 }} />
//             <View style={{ flexDirection: 'row', alignItems: 'center', backgroundColor: "#c4c4c4", width: "90%", borderRadius: 12 }}>
//               <AntDesign name="search1" size={20} color="gray" style={{ marginLeft: 10 }} />
//               <TextInput placeholder='Search' style={{ flex: 1, paddingLeft: 10 }} />
//             </View>
//           </View>
//         </View>
//         <Text style={{ color: "white", fontSize: 17, fontWeight: "500", marginTop: 5, textAlign: 'center', marginBottom: 10 }}>My Contacts</Text>
//       </ImageBackground>
//       <TabView
//         navigationState={{ index, routes }}
//         renderScene={renderScene}
//         onIndexChange={setIndex}
//         initialLayout={{ width: layout.width }}
//       />


//     </>
//   );
// }




















// import * as React from 'react';
// import { Image, ImageBackground, Text, TextInput, Touchable, View, useWindowDimensions } from 'react-native';
// import { TabView, SceneMap } from 'react-native-tab-view';
// import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
// import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
// import AntDesign from 'react-native-vector-icons/AntDesign';
// import { TouchableOpacity } from 'react-native-gesture-handler';

// const FirstRoute = () => (
//   <>
//   <ImageBackground source={require('./assets/image1.png')} style={{ height:"100%" }} >
//        <View style={{ flexDirection:"row",marginTop:15 }}>
//       <Image source={{ uri: 'https://media.sproutsocial.com/uploads/2022/06/profile-picture.jpeg' }} style={{ width: 55, height: 60,borderRadius:50 }} />
//       <Text style={{ color:"white", padding:15,fontSize:18, fontWeight:"500" }}>Chandhu</Text>
//    <View style={{  backgroundColor: '#42ff00',borderRadius: 50, width: 50,height: 50, justifyContent: 'center',alignItems: 'center', marginLeft:"30%" }}>
//       <MaterialIcons name="done" size={28} color="gray" style={{ marginLeft: 10, }} />
//       </View>
//       <View style={{  backgroundColor: '#ff5858',borderRadius: 50, width: 50,height: 50, justifyContent: 'center',alignItems: 'center',marginLeft:20 }}>
//       <AntDesign name="close" size={28} color="gray" style={{ marginLeft: 10, }} />
//       </View>
//       </View>
//       <View style={{ backgroundColor: 'white', height: 1, width: '100%',marginTop:5 }} />
      
//       <View style={{ flexDirection:"row",marginTop:15 }}>
//       <Image source={{ uri: 'https://media.sproutsocial.com/uploads/2022/06/profile-picture.jpeg' }} style={{ width: 55, height: 60,borderRadius:50 }} />
//       <Text style={{ color:"white", padding:15,fontSize:18, fontWeight:"500" }}>Saankhya</Text>
//    <View style={{  backgroundColor: '#42ff00',borderRadius: 50, width: 50,height: 50, justifyContent: 'center',alignItems: 'center', marginLeft:"30%" }}>
//       <MaterialIcons name="done" size={28} color="gray" style={{ marginLeft: 10, }} />
//       </View>
//       <View style={{  backgroundColor: '#ff5858',borderRadius: 50, width: 50,height: 50, justifyContent: 'center',alignItems: 'center',marginLeft:20 }}>
//       <AntDesign name="close" size={28} color="gray" style={{ marginLeft: 10, }} />
//       </View>
//       </View>
//       <View style={{ backgroundColor: 'white', height: 1, width: '100%',marginTop:5 }} />
//       <View style={{ flexDirection:"row",marginTop:15 }}>
//       <Image source={{ uri: 'https://media.sproutsocial.com/uploads/2022/06/profile-picture.jpeg' }} style={{ width: 55, height: 60,borderRadius:50 }} />
//       <Text style={{ color:"white", padding:15,fontSize:18, fontWeight:"500" }}>Praneeth</Text>
//    <View style={{  backgroundColor: '#42ff00',borderRadius: 50, width: 50,height: 50, justifyContent: 'center',alignItems: 'center', marginLeft:"30%" }}>
//       <MaterialIcons name="done" size={28} color="gray" style={{ marginLeft: 10, }} />
//       </View>
//       <View style={{  backgroundColor: '#ff5858',borderRadius: 50, width: 50,height: 50, justifyContent: 'center',alignItems: 'center',marginLeft:20 }}>
//       <AntDesign name="close" size={28} color="gray" style={{ marginLeft: 10, }} />
//       </View>
//       </View>
//       <View style={{ backgroundColor: 'white', height: 1, width: '100%',marginTop:5 }} />
//       <View style={{ flexDirection:"row",marginTop:15 }}>
//       <Image source={{ uri: 'https://media.sproutsocial.com/uploads/2022/06/profile-picture.jpeg' }} style={{ width: 55, height: 60,borderRadius:50 }} />
//       <Text style={{ color:"white", padding:15,fontSize:18, fontWeight:"500" }}>Chandhu</Text>
//    <View style={{  backgroundColor: '#42ff00',borderRadius: 50, width: 50,height: 50, justifyContent: 'center',alignItems: 'center', marginLeft:"30%" }}>
//       <MaterialIcons name="done" size={28} color="gray" style={{ marginLeft: 10, }} />
//       </View>
//       <View style={{  backgroundColor: '#ff5858',borderRadius: 50, width: 50,height: 50, justifyContent: 'center',alignItems: 'center',marginLeft:20 }}>
//       <AntDesign name="close" size={28} color="gray" style={{ marginLeft: 10, }} />
//       </View>
//       </View>
//       <View style={{ backgroundColor: 'white', height: 1, width: '100%',marginTop:5 }} />
      
      

//   </ImageBackground>  
//   <View style={{ flex: 1 }} />
//   </>
// );

// const SecondRoute = () => (
//   <>
//   <ImageBackground source={require('./assets/image1.png')} style={{ height:"100%" }} >
//        <View style={{ flexDirection:"row",marginTop:15 }}>
//       <Image source={{ uri: 'https://media.sproutsocial.com/uploads/2022/06/profile-picture.jpeg' }} style={{ width: 55, height: 60,borderRadius:50 }} />
//       <Text style={{ color:"white", padding:15,fontSize:18, fontWeight:"500" }}>Chandhu</Text>
//       <View style={{  backgroundColor: 'white',borderRadius: 50, width: 50,height: 50, justifyContent: 'center',alignItems: 'center', marginLeft:"45%" }}>
//    <Text style={{ color:"#DE518B", fontFamily:"outfit" }}>Send Invite</Text>
//       </View>
//       </View>
//       <View style={{ backgroundColor: 'white', height: 1, width: '100%',marginTop:5 }} />
      
//       <View style={{ flexDirection:"row",marginTop:15 }}>
//       <Image source={{ uri: 'https://media.sproutsocial.com/uploads/2022/06/profile-picture.jpeg' }} style={{ width: 55, height: 60,borderRadius:50 }} />
//       <Text style={{ color:"white", padding:15,fontSize:18, fontWeight:"500" }}>Sankhya</Text>
//       <View style={{  backgroundColor: 'white',borderRadius: 50, width: 50,height: 50, justifyContent: 'center',alignItems: 'center', marginLeft:"45%" }}>
//    <Text style={{ color:"#DE518B", fontFamily:"outfit" }}>Send Invite</Text>
//       </View>
//       </View>
//       <View style={{ backgroundColor: 'white', height: 1, width: '100%',marginTop:5 }} />
//       <View style={{ flexDirection:"row",marginTop:15 }}>
//       <Image source={{ uri: 'https://media.sproutsocial.com/uploads/2022/06/profile-picture.jpeg' }} style={{ width: 55, height: 60,borderRadius:50 }} />
//       <Text style={{ color:"white", padding:15,fontSize:18, fontWeight:"500" }}>Praneeth</Text>
//       <View style={{  backgroundColor: 'white',borderRadius: 50, width: 50,height: 50, justifyContent: 'center',alignItems: 'center', marginLeft:"45%" }}>
//    <Text style={{ color:"#DE518B", fontFamily:"outfit" }}>Send Invite</Text>
//       </View>
//       </View>
//       <View style={{ backgroundColor: 'white', height: 1, width: '100%',marginTop:5 }} />
//       <View style={{ flexDirection:"row",marginTop:15 }}>
//       <Image source={{ uri: 'https://media.sproutsocial.com/uploads/2022/06/profile-picture.jpeg' }} style={{ width: 55, height: 60,borderRadius:50 }} />
//       <Text style={{ color:"white", padding:15,fontSize:18, fontWeight:"500" }}>Chandhu</Text>
//    <View style={{  backgroundColor: 'white',borderRadius: 50, width: 50,height: 50, justifyContent: 'center',alignItems: 'center', marginLeft:"45%" }}>
//    <Text style={{ color:"#DE518B", fontFamily:"outfit" }}>Send Invite</Text>
//       </View>
      
//       </View>
//       <View style={{ backgroundColor: 'white', height: 1, width: '100%',marginTop:5 }} />
      
      

//   </ImageBackground>
//   <View style={{ flex: 1, }} />
//   </>
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
   
//      <View style={{ flexDirection:"row", justifyContent:"space-between",marginTop:10,marginBottom:10 }}>
//       <View style={{ flexDirection:"row" }}>
//      {/* <MaterialCommunityIcons name="butterfly-outline" size={24} color="black" style={{ marginLeft: 10, height: 30, width: 30,marginRight:10 }} /> */}
//       <Image   source={require('./assets/image2.png')}style={{ height:40,width:40 }} ></Image>
//       <Text style={{ fontSize:20, fontWeight:"600",color:"black",padding:5 }}>Women Tracker</Text>
//       </View>
//   <MaterialIcons name="notifications-active" size={26} color="black" style={{ marginLeft: 10, height: 30, width: 30,marginRight:10,marginTop:5 }} />
//     </View>
   

//     <ImageBackground source={require('./assets/image1.png')} 
//   >
//       <View style={{ flexDirection: "row", justifyContent: 'space-between', alignItems: 'center' } }>
//         <View style={{ marginTop:10 ,flexDirection:"row",justifyContent:"space-between"}}>
//         <AntDesign name="left" size={28} color="white" style={{ marginTop: 5 }} />
//         <View style={{ flexDirection: 'row', alignItems: 'center', backgroundColor: "#c4c4c4", width: "90%", borderRadius: 12 }}>
//           <AntDesign name="search1" size={20} color="gray" style={{ marginLeft: 10 }} />
//           <TextInput placeholder='Search' style={{ flex: 1, paddingLeft: 10 }} />
//           </View>
//         </View>
//       </View>
//       <Text style={{ color:"white",fontSize:17,fontWeight:"500", marginTop:5,textAlign:'center',marginBottom:10 }}>My Contacts</Text>
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

