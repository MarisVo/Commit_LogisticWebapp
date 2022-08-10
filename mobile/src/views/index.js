import React from 'react';
import { Text, View ,SafeAreaView, Image} from 'react-native';
import Home from './home';
import Login from './login';
import Setting from './setting';
import Tracking from './settingPage/Tracking';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Products from './product';
import Profile from './profile';


const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const MyTabs = ()=>{
    return (

        <Tab.Navigator screenOptions={{headerShown:false}}>
                <Tab.Screen name="Home" component={Home} options={{
                    tabBarIcon:()=>{
                        <Image source={require("../images/message.jpg") }  style={{height:35,width:35}} resizeMode="stretch" /> 
                    }
                }} />
                <Tab.Screen name="Profile" component={Profile} options={{
                    tabBarIcon:()=>{
                        <Image source={require("../images/box.png") }  style={{height:35,width:35}} resizeMode="stretch" /> 
                    }
                    }} />
                <Tab.Screen name="Products" component={Products} />
                <Tab.Screen name="Setting" component={Setting} />
                <Tab.Screen name="Tracking" component={Tracking} />

        </Tab.Navigator>
    )
    
}

const RootComponent = () => {
    return (
            <NavigationContainer>
                 <Stack.Navigator initialRouteName="Home"  screenOptions={{headerShown:false}}>
                    <Stack.Screen name="Login" component={Login} />
                    <Stack.Screen name="HomeTabs" component={MyTabs} />
                   
                </Stack.Navigator>
            </NavigationContainer>
    );
};

export default RootComponent;