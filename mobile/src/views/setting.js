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
import { showNotification } from "../notification/androidNotification";
const windowwidth = Dimensions.get("window").width;
const windowheight = Dimensions.get("window").height;
const Setting = ({navigation}) => {
  return (
    <SafeAreaView style={{height: "100%", width: "100%"}}>
      <StatusBar barStyle="light-content" />
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          height: "10%",
          borderColor: "black",
          borderWidth: 2,
        }}>
        <TouchableOpacity
          style={{
            height: "100%",
            aspectRatio: 1.6,
            borderColor: "black",
            borderWidth: 2,
            justifyContent: "center",
            alignItems: "center",
          }}
          onPress={() => {
            navigation.goBack();
          }}>
          <Text style={{fontSize: 25}}>Back</Text>
        </TouchableOpacity>
      </View>
      <View
        style={{
          flex: 1,
          height: "100%",
          width: "100%",
          justifyContent: "center",
          alignItems: "center",
        }}>
        <View
          style={{height: "20%", width: "100%", marginTop: windowheight * 0.3}}>
          <Text style={{color: "red", textAlign: "center", fontSize: 55}}>
            Setting
          </Text>
        </View>
        <TouchableOpacity
          style={{
            height: "10%",
            aspectRatio: 1.6,
            borderColor: "black",
            borderWidth: 2,
            justifyContent: "center",
            alignItems: "center",
          }}
          onPress={() => {
            navigation.navigate("Tracking");
          }}>
          <Text style={{fontSize: 25}}>Track</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            height: "10%",
            aspectRatio: 1.6,
            borderColor: "black",
            borderWidth: 2,
            justifyContent: "center",
            alignItems: "center",
          }}
          onPress={() => {
            navigation.navigate("Warehouses");
          }}>
          <Text style={{fontSize: 25}}>Warehouse</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            height: "10%",
            aspectRatio: 1.6,
            borderColor: "black",
            borderWidth: 2,
            justifyContent: "center",
            alignItems: "center",
          }}
          onPress={() => {
            navigation.navigate("SettingNoti");
          }}>
          <Text style={{fontSize: 25}}>Notification</Text>
        </TouchableOpacity>
<<<<<<< HEAD
=======
        <TouchableOpacity
          style={{
            height: "10%",
            aspectRatio: 1.6,
            borderColor: "black",
            borderWidth: 2,
            justifyContent: "center",
            alignItems: "center",
          }}
          onPress={() => showNotification("hello","hi")}>
          <Text style={{fontSize: 25}}>test</Text>
        </TouchableOpacity>
>>>>>>> c69209fc884e98c40476f8aeba617cce2f4e4b0a
      </View>
    </SafeAreaView>
  );
};

export default Setting;
