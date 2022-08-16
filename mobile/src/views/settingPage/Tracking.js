import React, {useState, useEffect} from 'react';
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
} from 'react-native';
import {getDistrictsByProvinceCode, getProvinces} from 'sub-vn';
import {Select, Box, CheckIcon} from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';

const windowwidth = Dimensions.get('window').width;
const windowheight = Dimensions.get('window').height;
function Tracking({navigation}) {
  const [warehouse, setWarehouse] = useState({});
  const [provinces, setProvinces] = useState([]);
  const [service, setService] = React.useState('');
  useEffect(() => {
    const dataProvinces = getProvinces();
    setProvinces(dataProvinces);
  }, []);

  return (
    <SafeAreaView
      style={{
        height: '100%',
        width: '100%',
        // justifyContent: 'center',
        // alignItems: 'center',
        backgroundColor: '#FFD124',
      }}>
      <StatusBar barStyle="light-content" backgroundColor="#FFD124" />
      <View
        style={{
          // flex: 1,
          height: '100%',
          width: '100%',
          alignItems: 'center',
          backgroundColor: '#FFD124',
        }}>
        <View
          style={{
            height: '15%',
            // alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text style={{fontSize: 20, fontWeight: 'bold'}}>
            Tra cứu phí vận chuyển
          </Text>
        </View>
        <View
          style={{
            height: '85%',
            width: '100%',
            flexDirection: 'row',
            justifyContent: 'space-between',
            backgroundColor: '#FFFFFF',
            borderTopStartRadius: 40,
            borderTopEndRadius: 40,
          }}>
          <View
            style={{
              width: '100%',
              height:"20%",
              flexDirection: 'row',
              justifyContent: 'space-around',
              marginTop: 30,             
            }}>
            <View style={{}}>
              <Text style={{marginLeft: 10}}>Chọn điểm đến</Text>
              <Select
                selectedValue={service}
                minWidth="40%"
                height="56px"
                borderRadius={16}
                backgroundColor="#FFD124"
                placeholderTextColor="black"
                accessibilityLabel="Choose Service"
                fontSize="14px"
                placeholder="Tỉnh/Thành phố"
                _selectedItem={{
                  bg: 'teal.600',
                  endIcon: <CheckIcon size="5" />,
                }}
                mt={1}
                onValueChange={itemValue => setService(itemValue)}>
                {provinces.map(province => (
                  <Select.Item
                    label={province.name}
                    value={province.name}
                    key={province.name}
                  />
                ))}
              </Select>
              <Select
                selectedValue={service}
                minWidth="40%"
                height="56px"
                borderRadius={16}
                backgroundColor="#FFD124"
                placeholderTextColor="black"
                accessibilityLabel="Choose Service"
                fontSize="14px"
                placeholder="Quận/Huyện"
                _selectedItem={{
                  bg: 'teal.600',
                  endIcon: <CheckIcon size="5" />,
                }}
                mt={1}
                onValueChange={itemValue => setService(itemValue)}>
                {/* {provinces.map(province => (
                  <Select.Item
                    label={province.name}
                    value={province.name}
                    key={province.name}
                  />
                ))} */}
              </Select>
            </View>
            {/* <Icon name="gear" /> */}
            <View style={{}}>
              <Text style={{marginLeft: 10}}>Chọn điểm đi</Text>
              <Select
                selectedValue={service}
                minWidth="40%"
                height="56px"
                borderRadius={16}
                backgroundColor="#FFD124"
                placeholderTextColor="black"
                accessibilityLabel="Choose Service"
                placeholder="Tỉnh/Thành phố"
                fontSize="14px"
                _selectedItem={{
                  bg: 'teal.600',
                  endIcon: <CheckIcon size="5" />,
                }}
                mt={1}
                onValueChange={itemValue => setService(itemValue)}>
                {provinces.map(province => (
                  <Select.Item
                    label={province.name}
                    value={province.name}
                    key={province.name}
                  />
                ))}
              </Select>
              <Select
                selectedValue={service}
                minWidth="40%"
                height="56px"
                borderRadius={16}
                backgroundColor="#FFD124"
                placeholderTextColor="black"
                accessibilityLabel="Choose Service"
                fontSize="14px"
                placeholder="Quận/Huyện"
                _selectedItem={{
                  bg: 'teal.600',
                  endIcon: <CheckIcon size="5" />,
                }}
                mt={1}
                onValueChange={itemValue => setService(itemValue)}>
                {/* {provinces.map(province => (
                  <Select.Item
                    label={province.name}
                    value={province.name}
                    key={province.name}
                  />
                ))} */}
              </Select>
            </View>
          </View>
          <View
            style={{
              height: "50%",
              width: "100%",
              backgroundColor:"red"
            }}>
            <TextInput
              style={{height: '100%', fontSize: 20, width:"100%", backgroundColor:"red"}}
              placeholder="Khối lượng"
            />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

export default Tracking;
