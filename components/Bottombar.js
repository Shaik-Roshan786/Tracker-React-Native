import React from 'react';
import screena from '../screena';
import screenb from '../screenb';
import screenc from '../screenc'
import screend from '../screend';
import screene from '../screene';
import Chatscreen from '../components/Chatscreen'
import Icons from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import { NavigationContainer } from '@react-navigation/native';


import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';

const Tab = createMaterialBottomTabNavigator();

export default function BottomBar() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      shifting={true}
      // labeled={false}
      activeColor="black"
      inactiveColor="white"
      barStyle={{backgroundColor: 'white', height: 70}}>
      <Tab.Screen
        name="Home"
        component={screena}
        options={{
          tabBarLabel: '',
          tabBarIcon: ({color}) => (
            // <Icons name="user-circle-o" size={25} color={color} />
            <Ionicons name="calendar-clear-outline" size={30} color="black" style={{  }} />
          ),
        }}
      />
      <Tab.Screen
        name="Clinic"
        component={screenb}
        options={{
          tabBarLabel: '',
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons name="alpha-m-circle" size={30} color={color} style={{color:"black" }} />
            
          ),
        }}
      />
      <Tab.Screen
        name="c"
        component={screenc}
        options={{
          tabBarLabel: '',
          tabBarIcon: ({color}) => (
            // <Icons name="search-circle" size={28} color={color} />
            <FontAwesome name="users" size={30} color="black"  />
          ),
        }}
      />
      <Tab.Screen
        name="d"
        component={screend}
        options={{
          tabBarLabel: '',
          tabBarIcon: ({color}) => (
            // <Icons name="shop" size={25} color={color} />
            <FontAwesome name="user-circle" size={30} color="black" style={{  }} />
          ),
        }}
      />
      {/* <Tab.Screen
        name="e"
        component={screene}
        options={{
          tabBarLabel: 'Care',
          tabBarIcon: ({color}) => (
            <Icons name="dog-side" size={25} color={color} />
          ),
        }}
      /> */}
    </Tab.Navigator>
  );
}
