import React, { useState } from 'react';
import { Text, View, SafeAreaView, ImageBackground, StatusBar, Dimensions, TouchableOpacity, Image, TextInput } from 'react-native';
import Entypo from "react-native-vector-icons/Entypo"
import Icon from "react-native-vector-icons/FontAwesome";
import { Formik } from 'formik';
import { useEffect } from 'react';
 import * as Yup from 'yup';
const windowwidth = Dimensions.get("window").width
const windowheight = Dimensions.get("window").height
const Login = ({navigation}) => {
    const [passHidden,setPassHidden] = useState(true)
 
 const SignupSchema = Yup.object().shape({
   email: Yup.string().email('Invalid email').required('Required'),

 });
    const submitForm=()=>{
      console.log(form)
    }
    // xu ly validate ,form bằng formik + yup
    return (
        <View style={{flex:1}}>
           <StatusBar barStyle="default" />
            <View style={{width:"100%",height:"25%"}}>
                <Image source={require("../images/img1.png")} style={{width:"100%",height:"100%"}} />
            </View>
            <View style={{width:"100%",height:"3%",flexDirection:"column"}}>
                    <Text style={{width:"5%",height:"5%",borderRadius:50,backgroundColor:"#ffd124"}}>.</Text>
            </View>
            <View style={{width:"100%",height:"6%",backgroundColor:"#f6f8f6",borderTopRightRadius:45,borderTopLeftRadius:45}}>
                <Text style={{fontSize:25,textAlign:"center",fontWeight:"900",color:"#3a3c3f",marginBottom:-8}}>Đăng nhập tài khoản</Text>
            </View>

            <View style={{width:"100%",height:"100%",backgroundColor:"#ffd124",borderTopRightRadius:45,borderTopLeftRadius:45}}>
                <View style={{width:"100%",height:50,alignItems:"center",justifyContent:"center",marginTop:20}}>
                     <Image source={require("../images/logo.png")} style={{width:"40%",height:"100%",textAlign:"center"}} />
                </View>
                <Formik
                  initialValues={{ email: '',password:'' }}
                  validationSchema={SignupSchema}
                  onSubmit={values => console.log(values)} >
       {({ handleChange, handleBlur, handleSubmit, values,errors,touched }) => ( 
        <View  style={{width:"100%",height:200}}>
                <View style={{width:windowwidth-70,flexDirection:"row",marginLeft:35,height:45,borderBottomWidth:1,alignItems:"center",justifyContent:"center",marginTop:10,flexDirection:"row"}}>
                     <TextInput style={{flex:1,height:"100%",fontSize:20}}
                         placeholder="Email/SĐT"
                        autoCapitalize={false}
                        value={values.email}
                       onChangeText={handleChange('email')}
                     onBlur={handleBlur('email')}
                     />
                     {
                      errors.email && touched.email ? (
                      <View>
                        <Text style={{color:"red"}}>{errors.email}</Text> 
                      </View>  
                      ): null}
                     
                </View>
                <View style={{width:windowwidth-70,marginLeft:35,height:45,borderBottomWidth:1,alignItems:"center",justifyContent:"center",marginTop:10,flexDirection:"row"}}>
                     <TextInput style={{flex:1,height:"100%",fontSize:20}}
                         placeholder="Mật Khẩu"
                        autoCapitalize={false}
                        secureTextEntry={passHidden?true:false}
                       value={values.password}
                       onChangeText={handleChange('password')}
                     onBlur={handleBlur('password')}
                     />
                     <TouchableOpacity  style={{height:"100%",aspectRatio:1,alignItems:"center",justifyContent:"center"}}
                           onPress={()=>setPassHidden(!passHidden)}
                     >
                        {passHidden ? 
                          <Icon name="eye"  style={{width:20,height:15,fontSize:20}}  />
                        :    <Icon name="eye-slash"  style={{width:20,height:15,fontSize:20}}  />}
                     </TouchableOpacity>
                </View>
   
                <View style={{width:windowwidth-70,marginLeft:35,height:15,alignItems:"center",justifyContent:"flex-end",marginTop:10,flexDirection:"row"}}>
                  <TouchableOpacity   onPress={()=>{
                    navigation.navigate("ForgetPassword")
                  }}>
                   <Text className={{right:0,position:"absolute",color:"black"}}>Quên mật khẩu?</Text>
                  </TouchableOpacity>
                </View>
            
                  <TouchableOpacity style={{backgroundColor:"white",borderRadius:80 ,width:windowwidth-70,marginLeft:35,height:48,alignItems:"center",justifyContent:"center",marginTop:10}}
                    onPress={handleSubmit}
                    >
                      <Text className={{position:"absolute",color:"black",fontWeight:"900"}}>Login</Text>
                  </TouchableOpacity>
        </View>
)}
                
                         
              </Formik>
                <View style={{width:windowwidth-70,marginLeft:35,height:"5%",alignItems:"center",justifyContent:"center",marginTop:10}}>
                
                   <Text className={{position:"absolute",color:"black",fontWeight:"700"}}>Hoặc</Text>
                
                </View>
                <View style={{width:windowwidth-70,marginLeft:35,height:"5%",alignItems:"center",justifyContent:"center",marginTop:20,flexDirection:"row"}}>
                
                 <Image source={require("../images/google.png")} style={{width:35,height:35,borderRadius:50,marginRight:10}} />
                 <Image source={require("../images/face.png")} style={{width:35,height:35,borderRadius:50}} />
                
                </View>
                 <View style={{width:windowwidth-70,marginLeft:35,height:"5%",alignItems:"center",justifyContent:"center",marginTop:20,flexDirection:"row"}}>
                   <Text className={{position:"absolute",color:"white"}}>Bạn chưa có tài khoản?</Text>
                  <TouchableOpacity style={{marginLeft:4}} 
                      onPress={()=>{
                        navigation.navigate("Register")
                    }}
                  >
                   <Text className={{position:"absolute",color:"white"}}>Đăng ký</Text>
                  </TouchableOpacity>
                </View>
            </View>
       </View>
    );
};

export default Login;