import React from 'react';
import {Text, View, SafeAreaView, Image} from 'react-native';
import Home from './home';
import Setting from './setting';
import Tracking from './settingPage/Tracking';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Products from './product';
import Profile from './profile';

import Icon from 'react-native-vector-icons/FontAwesome';
import Register from './register';
import Login from './login';

import ForgetPassword from './forgetPassword';
import CreateOrder from './createOrder';
import WatchListOrder from './watchListOrder';
import Statistic from './statistic';
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const MyTabs = () => {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ color, size }) => (
            // <Image source={require("../images/message.jpg") }  style={{height:35,width:35}} resizeMode="stretch" />
            <Icon name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarLabel: "Profile",
          tabBarIcon: ({ color, size }) => (
            // <Image source={require("../images/message.jpg") }  style={{height:35,width:35}} resizeMode="stretch" />
            <Icon name="user" color={color} size={size} />
          ),
        }}
      />
      {/* <Tab.Screen name="Products" component={Products} /> */}
      <Tab.Screen
        name="Setting"
        component={Setting}
        options={{
          tabBarLabel: "Setting",
          tabBarIcon: ({ color, size }) => (
            <Icon name="gear" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Statistic"
        component={Statistic}
        options={{
          tabBarLabel: "Statistic",
          tabBarIcon: ({ color, size }) => (
            <Icon name="gear" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="WatchListOrder"
        component={WatchListOrder}
        options={{
          tabBarLabel: "WatchListOrder",
          tabBarIcon: ({ color, size }) => (
            <Icon name="gear" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const RootComponent = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{headerShown: false}}>
        <Stack.Screen name="HomeTabs" component={MyTabs} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="ForgetPassword" component={ForgetPassword} />
        {/* <Stack.Screen name="CreateOrder" component={CreateOrder} /> */}
      {/*   <Stack.Screen name="Register" component={Register} /> */}
        <Stack.Screen name="Tracking" component={Tracking} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootComponent;
