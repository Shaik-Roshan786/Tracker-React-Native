import * as React from 'react';
import { View, useWindowDimensions, StyleSheet, Text } from 'react-native';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import Icon from 'react-native-vector-icons/FontAwesome';

const FirstRoute = () => (
  <View style={{ flex: 1, backgroundColor: '#DE518B' }}>
    <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 10 }}>
    <Icon name="user" size={24} color="black" style={{ marginLeft: 10 }} />
  <Text style={{ marginLeft: 30, color: "white" }}>Saankhya</Text>
     </View>
     <View style={{ borderBottomWidth: 1, borderBottomColor: 'white', width: '100%', marginTop: 10 }} />
     <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 10 }}>
    <Icon name="user" size={24} color="black" style={{ marginLeft: 10 }} />
  <Text style={{ marginLeft: 30, color: "white" }}>Vaishnavi</Text>
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
   
    <View style={{ flexDirection:"row", justifyContent: 'space-between' }}>
        <Text style={{   fontFamily: 'Lily Script One',fontWeight: '400',fontSize: 17, }}>Women Tracker</Text>
        <View style={{  flexDirection: 'row',  }}>
          <Icon name="user" size={24} color="black" style={{  marginLeft: 10, }} />
          <Icon name="bell" size={24} color="black" style={{  marginLeft: 10, }} />
        </View>
    </View>

    <View style={{ flex: 1, backgroundColor: '#DE518B', }}>
      <TabView
        navigationState={{ index, routes }}
        renderScene={renderScene}
        onIndexChange={setIndex}
        initialLayout={{ width: layout.width }}
        renderTabBar={renderTabBar} 
      />
    </View>
    <View style={{ flexDirection: 'row', justifyContent: 'space-between'  }}>
    <Icon name="user" size={24} color="black" style={{  marginLeft: 10, }} />
    <Icon name="user" size={24} color="black" style={{  marginLeft: 10, }} />
    <Icon name="user" size={24} color="black" style={{  marginLeft: 10, }} />
    <Icon name="user" size={24} color="black" style={{  marginLeft: 10, }} />
      </View>
      <View style={{ height: 10 }} /> 
      <View style={{ height: 10 }} /> 
      <View style={{ height: 10 }} /> 
  
    </>
  );
}




