import React from "react";
import {
  Text,
  View,
  SafeAreaView,
  StatusBar,
  Dimensions,
  TouchableOpacity,
  Image,
} from "react-native";

function Tracking({navigation}) {
  return (

    <SafeAreaView style={{height:"100%",width:"100%", justifyContent:"center", alignItems:"center", backgroundColor: "#FFD124"}}>
    <StatusBar
        barStyle="light-content"
        backgroundColor="#FFD124"
      />
      <View style={{flex:1, height:"100%",width:"100%", justifyContent:"flex-end", alignItems:"center", backgroundColor: "#FFD124"}}>
        <View style={{height:"85%",width:"100%", justifyContent:"center", alignItems:"center", backgroundColor: "#FFFFFF", borderTopStartRadius:40, borderTopEndRadius:40}}>

        <Text>Tra cứu</Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

export default Tracking;
