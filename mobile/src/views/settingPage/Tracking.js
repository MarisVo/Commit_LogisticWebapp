import React, {useState, useEffect} from "react";
import {
  Text,
  View,
  SafeAreaView,
  StatusBar,
  Dimensions,
  TouchableOpacity,
  Image,
  StyleSheet,
  TextInput,
} from "react-native";
import {getDistrictsByProvinceCode, getProvinces} from "sub-vn";
import Icon from "react-native-vector-icons/FontAwesome";
import {Select, CheckIcon} from "native-base";

function Tracking({navigation}) {
  const [warehouse, setWarehouse] = useState({});
  const [provinces, setProvinces] = useState([]);
  const [dataForSearch, setDataForSearch] = useState({
    province: null,
    district: null,
  });
  useEffect(() => {
    const dataProvinces = getProvinces();
    setProvinces(dataProvinces);
  }, []);
  return (
    <View style={{backgroundColor: "#FFD124", height: "100%"}}>
      <View
        style={{
          height: "15%",
          position: "relative",
          justifyContent: "center",
          alignItems: "center",
        }}>
        <View
          style={{
            position: "absolute",
            left: 24,
            width: 50,
            height: 50,
            justifyContent: "center",
          }}>
          <TouchableOpacity
            onPress={() => {
              navigation.goBack();
            }}>
            <Icon name="arrow-left" size={26} />
          </TouchableOpacity>
        </View>
        <Text style={{fontSize: 20, fontWeight: "bold"}}>
          Tra cứu phí vận chuyển
        </Text>
      </View>
      <View
        style={{
          height: "85%",
          backgroundColor: "white",
          borderTopLeftRadius: 40,
          borderTopRightRadius: 40,
        }}>
        <View
          style={{
            height: "100%",
            backgroundColor: "red",
            marginHorizontal: 24,
          }}>
          <View
            style={{
              flex: 1,
              // alignContent: "space-between",
              backgroundColor: "yellow",
              // justifyContent:"space-around"


            }}>
            <View
              style={{
                flex:1,
                justifyContent: "space-around",
                paddingVertical:10,
                alignItems:"center",
                flexDirection: "row",
                backgroundColor: "blue",
              }}>
              <Select
                selectedValue={dataForSearch.province}
                minWidth="40%"
                height="56px"
                borderRadius={16}
                backgroundColor="#FFD124"
                placeholderTextColor="black"
                accessibilityLabel="Choose Service"
                fontSize="14px"
                placeholder="Tỉnh/Thành phố"
                _selectedItem={{
                  bg: "teal.600",
                  endIcon: <CheckIcon size="5" />,
                }}
                mt={1}
                onValueChange={itemValue =>
                  setDataForSearch({province: itemValue, district: null})
                }>
                {provinces.map(province => (
                  <Select.Item
                    label={province.name}
                    value={province.name}
                    key={province.name}
                  />
                ))}
              </Select>
              <Select
                selectedValue={dataForSearch.province}
                minWidth="40%"
                height="56px"
                borderRadius={16}
                backgroundColor="#FFD124"
                placeholderTextColor="black"
                accessibilityLabel="Choose Service"
                fontSize="14px"
                placeholder="Quận/huyện"
                _selectedItem={{
                  bg: "teal.600",
                  endIcon: <CheckIcon size="5" />,
                }}
                mt={1}
                onValueChange={itemValue =>
                  setDataForSearch({province: itemValue, district: null})
                }>
                {provinces.map(province => (
                  <Select.Item
                    label={province.name}
                    value={province.name}
                    key={province.name}
                  />
                ))}
              </Select>
            </View>
            <View style={{flex:1,backgroundColor:"orange"}}>
                  <View style={{backgroundColor:"white",width:"40%"}}>
                    <TextInput placeholder="Khối lượng"/>
                  </View>
            </View>
            <View style={{flex:1,backgroundColor:"pink"}}>

            </View>
          </View>
          <View
            style={{
              flex: 3,
              flexDirection: "row",
              backgroundColor: "green",
            }}></View>
        </View>
      </View>
    </View>
  );
}

export default Tracking;
