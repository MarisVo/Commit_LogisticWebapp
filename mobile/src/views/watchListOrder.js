import React, { useState } from 'react';
import { Text, View, SafeAreaView, ScrollView, StatusBar, Dimensions, TouchableOpacity, Image, TextInput } from 'react-native';
import Icon from "react-native-vector-icons/FontAwesome";
import Search1 from "react-native-vector-icons/AntDesign";
import Scan from "react-native-vector-icons/MaterialCommunityIcons";

import StepIndicator from 'react-native-step-indicator';
const windowwidth = Dimensions.get("window").width
const windowheight = Dimensions.get("window").height
const WatchListOrder = ({navigation}) => {
    const [currentPosition,setCurrentPosition] = useState(0)
    const labels = ["Lấy hàng","Delivery Address","Address","success"];
    const data = [
        {
            label:"Hàng đã chấp thuận",
            dataTime:"Sat 3rd Nov 11:00pm"
        },
        {
            label:"Hàng đã xong",
           
            dataTime:"Sat 3rd Nov 12:00pm"
        },
        {
            label:"Hàng đã xong",
           
            dataTime:"Sat 3rd Nov 12:00pm"
        },
        {
            label:"Hàng đã hoàn thành",
            dataTime:"Sat 4th Nov 01:00am"
        },
    ]
const customStyles = {
  stepIndicatorSize: 25,
  currentStepIndicatorSize:30,
  separatorStrokeWidth: 2,
  currentStepStrokeWidth: 3,
  stepStrokeCurrentColor: '#fe7013',
  stepStrokeWidth: 3,
  stepStrokeFinishedColor: '#fe7013',
  stepStrokeUnFinishedColor: '#aaaaaa',
  separatorFinishedColor: '#fe7013',
  separatorUnFinishedColor: '#aaaaaa',
  stepIndicatorFinishedColor: '#fe7013',
  stepIndicatorUnFinishedColor: '#ffffff',
  stepIndicatorCurrentColor: '#ffffff',
  stepIndicatorLabelFontSize: 13,
  currentStepIndicatorLabelFontSize: 13,
  stepIndicatorLabelCurrentColor: '#fe7013',
  stepIndicatorLabelFinishedColor: '#ffffff',
  stepIndicatorLabelUnFinishedColor: '#aaaaaa',
  labelColor: '#999999',
  labelSize: 13,
  currentStepLabelColor: '#fe7013'
}

    return (
        <View style={{flex:1,backgroundColor:"#ffd124"}}>
           <StatusBar barStyle="light-content" backgroundColor="#000" />
             <View style={{width:"100%",height:60,alignItems:"center",backgroundColor:"#ffd124",justifyContent:"center",position:'relative'}}> 
                    <Icon name="arrow-left"  style={{width:50,height:45,fontSize:30,position:"absolute",fontWeight:700,top:8,left:10}}  />
                    
                     <Text style={{width:"60%",height:40,color:"#3A3C3F",fontSize:25,fontWeight:"700",textAlign:"center"}}>Thống kê doanh thu</Text>
            </View>
            <ScrollView>

            <View style={{width:windowwidth-50,marginLeft:20,marginBottom:25,flexDirection:"row",width:"100%",height:58,alignItems:"center",backgroundColor:"#ffd124",position:'relative'}}> 
                   <View style={{width:"70%",height:"100%",backgroundColor:"white",borderRadius:7,flexDirection:"row",alignItems:"center",marginRight:8}}>
                        <TextInput style={{width:"85%",height:"100%",fontSize:17,marginLeft:9}}
                            placeholder="Nhập mã đơn vận"
                            autoCapitalize={false}
                        />
                       <Search1 name="search1"  style={{fontSize:30}}  />
                   </View>
                   <View style={{width:"15%",height:"100%",borderRadius:7,backgroundColor:"white",alignItems:"center",justifyContent:"center"}}>
                        <View  >
                             <Scan name="barcode-scan"  style={{fontSize:40}}  />
                        </View>
                   </View>
            </View>
           <View style={{width:"100%",height:"100%",backgroundColor:"white",borderTopRightRadius:45,borderTopLeftRadius:45}}>
                <View style={{width:windowwidth-50,marginLeft:25,marginTop:25,height:windowheight-350,borderRadius:12,borderWidth:1,alignItems:"flex-start",justifyContent:"center"}}>
                     <View style={{width:"100%",height:35,alignItems:"flex-start",justifyContent:"space-between",flexDirection:"row"}}>
                        <View style={{backgroundColor:"#4E9F3D",marginLeft:6,paddingHorizontal:15,paddingVertical:6}}>
                          <Text style={{color:"white"}}>#13123</Text>
                        </View>
                    </View>
                    <View style={{marginLeft:6,borderBottomWidth:1,borderColor:"#CCCCCC",width:"100%",height:30,alignItems:"flex-start",justifyContent:"flex-start"}}>
                          <Text style={{color:"#3A3C3F",fontSize:20,fontWeight:"700",textAlign:"left"}}>Đang vận chuyển</Text>
                    </View>
                     <View style={{width:"100%",height:"80%",alignItems:"flex-start",justifyContent:"flex-start",marginTop:5}}>
                        <View style={{marginLeft:15}}>

                                <StepIndicator
                                style={{marginLeft:20,justifyContent:"flex-start",alignItems:"center"}}
                                customStyles={customStyles}
                                currentPosition={currentPosition}
                                labels={labels} 
                                stepCount={data.length}
                                direction="vertical"    
                                renderLabel={({position,stepStatus,label,currentPosition})=>{
                                    return(
                                        <View style={{paddingLeft:7,width:"100%",justifyContent:"flex-start",alignItems:"flex-start"}}>
                                            <Text style={{fontSize:15,color:"black",fontWeight:"bold"}}>{data[position].label}</Text>                         
                                                <Text style={{fontSize:15,color:"gray"}}>{data[position].dataTime}</Text>
                                        </View>
                                    )
                                }}    
                            />
                        </View>
                    </View>
                </View>    
                 <View style={{width:windowwidth-50,marginLeft:25,height:230,borderRadius:8,borderWidth:1,alignItems:"center",justifyContent:"center",flexDirection:"column"}}>
                      <View style={{width:"100%",height:35,backgroundColor:"#ffd124",alignItems:"center",justifyContent:"center"}}>
                        <Text style={{textAlign:"center",fontSize:20,fontWeight:"700"}}>Địa chỉ người nhận</Text>
                      </View>
                      <View style={{width:"90%",paddingHorizontal:25,height:50,marginTop:10,borderRadius:9,borderWidth:2,alignItems:"center",justifyContent:"center",flexDirection:"row"}} >
                        <Icon name="user"  style={{width:20,height:15,fontSize:25}}  />
                        <TextInput style={{width:"100%",height:"100%",fontSize:18}}
                            placeholder="Email/SĐT"
                            autoCapitalize={false}
                        />
                      </View>
                     
                                      
                </View>         
            </View>
            </ScrollView>

       </View>
    );
};

export default WatchListOrder;