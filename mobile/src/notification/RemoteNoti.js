// import { Platform } from 'react-native';
// import React, {useEffect} from "react"
// import PushNotification from "react-native-push-notification"

// const RemoteNoti = ()=>{
//     useEffect(()=>{
//         PushNotification.configure({
//             onRegister: function (token){
//                 console.log('Token re',token)
//             },
//             onNotification: function (notification){
//                 console.log("Remote Noti", notification)
//             },
//             senderId:'954949310478',
//             popInitialNotification:true,
//             requestPermissions: Platform.OS === 'ios',
//         })
//     },[])
//     return null
// }
// export default RemoteNoti