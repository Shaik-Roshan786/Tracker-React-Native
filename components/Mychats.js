



import * as React from 'react';
import { View, useWindowDimensions, StyleSheet, Text, Image } from 'react-native';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import Icon from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import Ionicons from 'react-native-vector-icons/Ionicons'

const FirstRoute = () => (
  <View style={{ flex: 1, backgroundColor: '#DE518B' }}>
    <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 10 }}>
    <Image source={{ uri: 'https://media.sproutsocial.com/uploads/2022/06/profile-picture.jpeg' }} style={{ width: 55, height: 60,borderRadius:50 }} />
  <Text style={{ color:"white", padding:15,fontSize:18, fontWeight:"500" }}>Saankhya</Text>
     </View>
     <View style={{ borderBottomWidth: 1, borderBottomColor: 'white', width: '100%', marginTop: 10 }} />
     <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 10 }}>
     <Image source={{ uri: 'https://media.sproutsocial.com/uploads/2022/06/profile-picture.jpeg' }} style={{ width: 55, height: 60,borderRadius:50 }} />
  <Text style={{ color:"white", padding:15,fontSize:18, fontWeight:"500" }}>Vaishnavi</Text>
     </View>
     <View style={{ borderBottomWidth: 1, borderBottomColor: 'white', width: '100%', marginTop: 10 }} />
 
  </View>
);

const SecondRoute = () => (
  <View style={{ flex: 1, backgroundColor: '#DE518B' }}>
  
  </View>
);

const renderScene = SceneMap({
  first: FirstRoute,
  second: SecondRoute,
});

const renderTabBar = (props) => (
  <TabBar
    {...props}
    indicatorStyle={{ backgroundColor: 'white' }} 
    style={styles.tabBar} 
    labelStyle={styles.tabLabel} 
  />
);

const styles = StyleSheet.create({
  tabBar: {
    backgroundColor: '#DE518B', 
  },
  tabLabel: {
    color: 'white', 
    fontSize: 16, 
    fontWeight: 'bold', 
  },
});

export default function TabViewExample() {
  const layout = useWindowDimensions();

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'first', title: 'CHATS' },
    { key: 'second', title: 'GROUPS' },
  ]);

  return (
    <>
   
    <View style={{ flexDirection:"row", justifyContent: 'space-between',marginTop:5 }}>
        <Text style={{   fontFamily: 'outfit',fontWeight: 'bold',fontSize: 20,marginLeft:40 }}>Women Tracker</Text>
        <View style={{  flexDirection: 'row',marginRight:10  }}>
          <Icon name="user" size={24} color="black" style={{  marginLeft: 10,marginRight:10 }} />
          <Icon name="bell" size={24} color="black" style={{  marginLeft: 10, }} />
        </View>
    </View>

    <View style={{ flex: 1, backgroundColor: '#DE518B',marginTop:10 }}>
      <TabView
        navigationState={{ index, routes }}
        renderScene={renderScene}
        onIndexChange={setIndex}
        initialLayout={{ width: layout.width }}
        renderTabBar={renderTabBar} 
      />
    </View>
    <View style={{ flexDirection: 'row', justifyContent: 'space-between',marginTop:5  }}>
    <Ionicons name="calendar-clear-outline" size={24} color="black" style={{  marginLeft: 10, }} />
    {/* <Icon name="user" size={24} color="black" style={{  marginLeft: 10, }} /> */}
    <Text style={{ color:"black", fontSize:18 }}>M</Text>
    <FontAwesome5 name="users" size={24} color="black" style={{  marginLeft: 10, }} />
    {/* <Icon name="user" size={24} color="black" style={{  marginLeft: 10, }} /> */}
    <Image source={{ uri: 'https://media.sproutsocial.com/uploads/2022/06/profile-picture.jpeg' }} style={{ width: 25, height:30,borderRadius:50, marginRight:10 }} />
      </View>
      <View style={{ height: 10 }} /> 
      <View style={{ height: 10 }} /> 
      <View style={{ height: 10 }} /> 
  
    </>
  );
}

