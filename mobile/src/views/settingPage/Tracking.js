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
  Button,
  Pressable,
  Alert,
} from "react-native";
import {getDistrictsByProvinceCode, getProvinces} from "sub-vn";
import axios from "axios";
import {END_POINT} from "../../utils/constant";
import IconAwesome from "react-native-vector-icons/FontAwesome";
import IconAnt from "react-native-vector-icons/AntDesign";
import {Select, CheckIcon, Radio, Stack, Progress } from "native-base";

function Tracking({navigation}) {
  const [provinces, setProvinces] = useState([]);
  const [services, setServices] = useState([]);
  const [price, setPrice] = useState(null);
  const [unit, setUnit] = useState("kg")
  const [formData, setFormData] = useState({
    fromProvince: null,
    toProvince: null,
    quantity: null,
    serviceId: null,
  });
  useEffect(() => {
    const dataProvinces = getProvinces();
    setProvinces(dataProvinces);
    const getListServices = async () => {
      try {
        const res = await axios.get(`${END_POINT}/service`);
        setServices(res.data.data.service);
      } catch (error) {
        Alert.alert("Thông báo", `${error}`, [
          {
            text: "Cancel",
            // onPress: () => console.log("Cancel Pressed"),
            style: "cancel",
          },
          {
            text: "OK",
            //  onPress: () => console.log("OK Pressed")
          },
        ]);
      }
    };
    getListServices();
  }, []);
  const lookUpPostage = () => {
    if (formData.fromProvince && formData.toProvince && formData.quantity && formData.serviceId) {
      const fromProvince = formData.fromProvince
        ?.replace("Thành phố ", "")
        ?.replace("Tỉnh ", "");
      const toProvince = formData.toProvince
        ?.replace("Thành phố ", "")
        ?.replace("Tỉnh ", "");
      const fetchData = async () => {
        try {
          const res = await axios.post(`${END_POINT}/tracking/postage`, {
            ...formData,
            fromProvince,
            toProvince,
            unit
          });
          setPrice(res.data.data.result)
          console.log(res)
          console.log({
            ...formData,
            fromProvince,
            toProvince,
            unit
          })
        } catch (error) {
          Alert.alert("Thông báo", `${error}`, [
            {
              text: "Cancel",
              // onPress: () => console.log("Cancel Pressed"),
              style: "cancel",
            },
            {
              text: "OK",
              //  onPress: () => console.log("OK Pressed")
            },
          ]);
        }
      };
      return fetchData();
    }
    Alert.alert("Thông báo", "Bạn chưa điền đủ thông tin", [
      {
        text: "Cancel",
        // onPress: () => console.log("Cancel Pressed"),
        style: "cancel",
      },
      {
        text: "OK",
        //  onPress: () => console.log("OK Pressed")
      },
    ]);
  };
  return (
    <SafeAreaView style={{backgroundColor: "#FFD124", height: "100%"}}>
      <View
        style={{
          height: "12%",
          position: "relative",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <View
          style={{
            position: "absolute",
            left: 24,
            width: 50,
            height: 50,
            justifyContent: "center",
          }}
        >
          <TouchableOpacity
            onPress={() => {
              navigation.goBack();
            }}
          >
            <IconAwesome name="arrow-left" size={26} />
          </TouchableOpacity>
        </View>
        <Text style={{fontSize: 20, fontWeight: "bold"}}>
          Tra cứu phí vận chuyển
        </Text>
      </View>
      <View
        style={{
          height: "88%",
          backgroundColor: "white",
          borderTopLeftRadius: 40,
          borderTopRightRadius: 40,
          paddingHorizontal: 24,
          // justifyContent: "center",
        }}
      >
        <View
          style={{
            paddingVertical: 10,
          }}
        >
          <View
            style={{
              justifyContent: "space-between",
              paddingVertical: 10,
              alignItems: "center",
              flexDirection: "row",
            }}
          >
            <View style={{flex: 1}}>
              <Text style={{paddingVertical: 5, paddingLeft: 15, fontSize: 13, color:"#3A3C3F"}}>
                Chọn điểm đi
              </Text>
              <Select
                selectedValue={formData.fromProvince}
                minWidth="42%"
                height="56px"
                borderRadius={16}
                backgroundColor="#FFD124"
                placeholderTextColor="black"
                accessibilityLabel="Choose Service"
                fontSize="14px"
                // alignSelf="center"
                placeholder="Tỉnh/Thành phố"
                _selectedItem={{
                  bg: "teal.600",
                  endIcon: <CheckIcon size="5" />,
                }}
                onValueChange={fromProvince => {
                  // const fromProvince = itemValue?.replace("Thành phố ", "")?.replace("Tỉnh ", "")
                  setFormData({...formData, fromProvince});
                }}
              >
                {provinces.map(province => (
                  <Select.Item
                    label={province.name}
                    value={province.name}
                    key={province.name}
                  />
                ))}
              </Select>
            </View>
            <IconAnt
              name="arrowright"
              size={24}
              style={{marginHorizontal: 2, transform: [{translateY: 15}]}}
            />
            <View style={{flex: 1}}>
              <Text style={{paddingVertical: 5, paddingLeft: 15, fontSize: 13, color:"#3A3C3F"}}>
                Chọn điểm đến
              </Text>
              <Select
                selectedValue={formData.toProvince}
                minWidth="42%"
                height="56px"
                borderRadius={16}
                backgroundColor="#FFD124"
                placeholderTextColor="black"
                accessibilityLabel="Choose province"
                fontSize="14px"
                // alignSelf="center"
                placeholder="Tỉnh/Thành phố"
                _selectedItem={{
                  bg: "teal.600",
                  endIcon: <CheckIcon size="5" />,
                }}
                onValueChange={toProvince => {
                  // const toProvince = itemValue?.replace("Thành phố ", "")?.replace("Tỉnh ", "")
                  setFormData({...formData, toProvince});
                }}
              >
                {provinces.map(province => (
                  <Select.Item
                    label={province.name}
                    value={province.name}
                    key={province.name}
                  />
                ))}
              </Select>
            </View>
          </View>
          <View
            style={{
              justifyContent: "center",
              paddingVertical: 10,
              flexDirection: "row",
            }}
          >
            <View
              style={{
                flex: 1,
                position: "relative",
                backgroundColor: "white",
                borderRadius: 16,
                borderWidth: 1,
              }}
            >
              <TextInput
                style={{height: 56}}
                textAlign="center"
                fontSize={16}
                keyboardType="number-pad"
                onChangeText={value => setFormData({...formData, quantity: +value})}
              />
              <Text
                style={{
                  position: "absolute",
                  top: 0,
                  fontSize: 13,
                  color:"#3A3C3F",
                  lineHeight: 20,
                  transform: [{translateX: 16}, {translateY: -12}],
                  backgroundColor: "white",
                }}
              >
                Khối lượng
              </Text>
            </View>
            <View
              style={{
                flex: 1,
                justifyContent: "center",
                paddingLeft: 5,
              }}
            >
              <Radio.Group
                defaultValue={unit}
                name="unitGroup"
                accessibilityLabel="select unit"
                onChange={value => setUnit(value)}
                
              >
                <Stack
                  direction={{
                    base: "row",
                  }}
                  alignItems={{
                    base: "space-between",
                  }}
                  space={3}
                >
                  <Radio value="ton" my={1} size="sm" colorScheme="yellow">
                    <Text style={{fontSize: 12, lineHeight: 30, color: "#000"}}>
                      Tấn
                    </Text>
                  </Radio>
                  <Radio value="kg" my={1} size="sm" colorScheme="yellow">
                    <Text style={{fontSize: 12, lineHeight: 30, color: "#000"}}>
                      KG
                    </Text>
                  </Radio>
                  <Radio value="m3" my={1} size="sm" colorScheme="yellow">
                    <View style={{flexDirection: "row"}}>
                      <Text
                        style={{fontSize: 12, lineHeight: 30, color: "#000"}}
                      >
                        M
                      </Text>
                      <Text
                        style={{fontSize: 7, lineHeight: 18, color: "#000"}}
                      >
                        3
                      </Text>
                    </View>
                  </Radio>
                </Stack>
              </Radio.Group>
            </View>
          </View>
          {/* <View style={{paddingVertical: 10}}>
            <View style={{flexDirection: "row", alignItems: "center"}}>
              <View
                style={{
                  flex: 1,
                  position: "relative",
                  backgroundColor: "white",
                  borderRadius: 16,
                  borderWidth:1
                }}
              >
                <TextInput
                  placeholder="Dài"
                  style={{height: 56}}
                  textAlign="center"
                  fontSize={16}
                />
                <Text
                  style={{
                    position: "absolute",
                    top: 0,
                    fontSize: 13,
                    lineHeight: 20,
                    transform: [{translateX: 16}, {translateY: -12}],
                    backgroundColor: "white",
                  }}
                >
                  Kích thước
                </Text>
              </View>
              <View style={{paddingHorizontal: 5}}>
                <Text fontSize={12}>x</Text>
              </View>
              <View
                style={{
                  flex: 1,
                  backgroundColor: "white",
                  borderRadius: 16,
                  borderWidth:1
                }}
              >
                <TextInput
                  placeholder="Rộng"
                  style={{height: 56}}
                  textAlign="center"
                  fontSize={16}
                />
              </View>
              <View style={{paddingHorizontal: 5}}>
                <Text fontSize={12}>x</Text>
              </View>
              <View
                style={{
                  flex: 1,
                  backgroundColor: "white",
                  borderRadius: 16,
                  borderWidth:1
                }}
              >
                <TextInput
                  placeholder="Cao"
                  style={{height: 56}}
                  textAlign="center"
                  fontSize={16}
                />
              </View>
            </View>
          </View> */}
          <View
            style={{
              width: "40%",
              paddingVertical: 10,
              justifyContent: "center",
            }}
          >
            <Select
              width="40%"
              minWidth="135px"
              // selectedValue="nhanh"
              height="56px"
              borderRadius={16}
              backgroundColor="#FFD124"
              placeholderTextColor="black"
              accessibilityLabel="Choose Service"
              fontSize="14px"
              placeholder="Chọn dịch vụ"
              _selectedItem={{
                bg: "teal.600",
                endIcon: <CheckIcon size="5" />,
              }}
              // onValueChange={itemValue =>
              //   setDataForSearch({province: itemValue, district: null})
              // }
              onValueChange={serviceId => setFormData({...formData, serviceId})}
            >
              {services.map(service => (
                <Select.Item
                  label={service.name}
                  value={service._id}
                  key={service.name}
                />
              ))}
            </Select>
          </View>
        </View>
        <View
          style={{
            alignItems: "center",
            marginTop: 20,
          }}
        >
          <TouchableOpacity
            style={{
              width: 150,
              height: 58,
              borderRadius: 16,
              backgroundColor: "#FFD124",
              justifyContent: "center",
            }}
            onPress={lookUpPostage}
          >
            <Text style={{textAlign: "center", fontSize: 18, color: "white"}}>
              Tra cứu
            </Text>
          </TouchableOpacity>
        </View>
        {price && 
        <View style={{marginTop:20,paddingVertical:10,alignItems:"center",borderWidth:1, borderColor:"#FFD124",borderRadius:24}}>
          <Text>Tiền cước vận chuyển là</Text>
          <Text style={{fontSize:30,fontWeight:"700",color:"#FFD124",paddingVertical:8}}>{price} VNĐ</Text>
          <Text style={{textAlign:"center"}}>Giá trên đã bao gồm phụ phí nhiên liệu, phí vùng sâu vùng xa và 8% thuế VAT</Text>
        </View>}
      </View>
    </SafeAreaView>
  );
}

export default Tracking;
