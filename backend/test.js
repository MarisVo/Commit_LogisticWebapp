import { io } from 'socket.io-client'
import express from 'express'
import { NOTIFY_EVENT } from './constant.js'
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
        next: true,
        sidestep: 1,
        // prices is an array include 4 elements, which is corresponding with price of each RETURN_ZONE
        prices: [1, 2, 3, 4]
    },
    {
        next: true,
        sidestep: 1,
        // prices is an array include 4 elements, which is corresponding with price of each RETURN_ZONE
        prices: [2, 3, 4, 5]
    },
    {
        next: false,
        sidestep: 0.5,
        // prices is an array include 4 elements, which is corresponding with price of each RETURN_ZONE
        prices: [1.5, 2.5, 3.5, 4.5]
    }
]

console.log(calculateShipmentFee(200, 4, price, 2, 3, 2))

app.listen(3000, () => {
    console.log('client is running at port 3000.')
})