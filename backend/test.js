import {io} from 'socket.io-client'
import express from 'express'
import { NOTIFY_EVENT } from './constant.js'
import dotenv from "dotenv"

dotenv.config()
const app = express()

const socket = io(process.env.SOCKET_SERVER, {reconnection:true})
// console.log(socket)
socket.emit(NOTIFY_EVENT.addSession, '62abdfc66021f15be967a7f3')
socket.on(NOTIFY_EVENT.receive, (data)=>{
    console.log(data)
})

app.listen(3000, ()=>{
    console.log('client is running at port 3000.')
})