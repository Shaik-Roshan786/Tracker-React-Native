import React, { useState } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import TabScreen from './TabScreen';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Image } from 'react-native';
import ImagePicker from 'react-native-image-picker';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  const [imageUrl, setImageUrl] = useState(null);

  const handleImagePicker = () => {
    const options = {
      title: 'Select Image',
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };

    ImagePicker.showImagePicker(options, (response) => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else {
        const uri = response.uri;
        setImageUrl(uri);
      }
    });
  };

  return (
    <Tab.Navigator
      tabBarOptions={{
        labelStyle: { fontSize: 16 },
        tabStyle: { flex: 1, justifyContent: 'space-between' },
        style: { flexDirection: 'row' },
      }}
    >
      <Tab.Screen
        name="a"
        component={TabScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icon name="calendar" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen name="M" component={TabScreen} />
      <Tab.Screen
        name="c"
        component={TabScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icon name="users" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="d"
        component={TabScreen}
        options={{
          tabBarIcon: () => (
            <Image
              source={{ uri: 'https://wallpapers.com/images/hd/cool-profile-picture-87h46gcobjl5e4xu.jpg' }}
              style={{ width: 24, height: 24, borderRadius: 50 }}
            />
          ),
          tabBarOnPress: ({ navigation }) => {
            handleImagePicker();
            // If you want to prevent navigation when clicking the "d" tab, remove the following line:
            navigation.navigate('d');
          },
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;







