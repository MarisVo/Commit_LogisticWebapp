import { io } from 'socket.io-client'
import express from 'express'
import { NOTIFY_EVENT, PRODUCT_UNIT } from './constant.js'
import dotenv from "dotenv"
import { calculateShipmentFee } from './service/order.js'

dotenv.config()
const app = express()

// const socket = io(process.env.SOCKET_SERVER, {reconnection:true})
// // console.log(socket)
// socket.emit(NOTIFY_EVENT.addSession, '62abdfc66021f15be967a7f3')
// socket.on(NOTIFY_EVENT.receive, (data)=>{
//     console.log(data)
// })

const price = [
    {
        next: false,
        sidestep: 1,
        // prices is an array include 4 elements, which is corresponding with price of each RETURN_ZONE
        prices: [1, 2, 3, 4]
    },
    {
        next: false,
        sidestep: 1,
        // prices is an array include 4 elements, which is corresponding with price of each RETURN_ZONE
        prices: [2, 3, 4, 5]
    },
    {
        next: true,
        sidestep: 0.5,
        // prices is an array include 4 elements, which is corresponding with price of each RETURN_ZONE
        prices: [1.5, 2.5, 3.5, 4.5]
    }
]

console.log(calculateShipmentFee({zonecode: 'A'}, 10.25, {uM3: price}, PRODUCT_UNIT.M3, [{value:0.2, base:false}, {value:0.15, base:true}]))

app.listen(3000, () => {
    console.log('client is running at port 3000.')
})