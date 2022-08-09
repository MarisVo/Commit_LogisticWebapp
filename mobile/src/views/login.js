import React from 'react';
import { Text, View, SafeAreaView, ImageBackground, StatusBar, Dimensions, TouchableOpacity } from 'react-native';

const windowwidth = Dimensions.get("window").width
const windowheight = Dimensions.get("window").height
const Login = ({navigation}) => {
    return (
        <ImageBackground style={{height:"100%",width:"100%"}} source={require("../images/login.jpg")} resizeMode="stretch">
            <StatusBar barStyle='light-content'/>
            <Text>Logiqwen</Text>
            <SafeAreaView style={{flex:1}}>
                <View style={{height:"100%",width:"100%",justifyContent:"center",alignItems:"center"}}>
                    <TouchableOpacity style={{height:"15%",width:"60%" , marginTop:windowheight*0.3 , borderColor:"black",borderWidth:2} }
                     onPress={()=>{
                        navigation.navigate("HomeTabs")
                    }}>
                        <Text style={{color:"red",textAlign:"center",fontSize:40}}>Login</Text>
                    </TouchableOpacity>
            
                </View>
            </SafeAreaView>
        </ImageBackground>
    );
};

export default Login;