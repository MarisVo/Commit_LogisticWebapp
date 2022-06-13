import { curly } from "node-libcurl"
import NodeMailer from "nodemailer"
import twilio from 'twilio'

export const sendSuccess = (res, message, data = null) => {
    let responseJson = {
        success: true,
        message: message
    }
    if (data) responseJson.data = data
    return res.status(200).json(responseJson)
}

export const sendError = (res, message, code = 400) => {
    return res.status(code).json({
        success: false,
        message: message
    })
}

export const sendServerError = res =>
    res.status(500).json({
        success: false,
        message: 'Server Interval Error.'
    })

/**
 * 
 * @param {*} url 
 * @param {*} method 
 * @param {*} headers : array string ['Authorzied: Bearer token']
 * @param {*} data : object
 */
export const sendRequest = async (url, method, headers = [], postData = {}) => {
    const dataJSON = JSON.stringify(postData)
    const config = {
        customRequest: method,
        httpHeader: headers,
        postFields: dataJSON
    }
    const { statusCode, data } = await curly(url, config)
    return { statusCode, data }
}

export const sendAutoMail = async (options) => {
    const service = process.env.MAIL_SERVICE || 'gmail'
    const transport = NodeMailer.createTransport({
        service: service,
        auth: {
            user: process.env.MAIL_HOST,
            pass: process.env.PASS_MAIL_HOST
        }
    })
    try {
        await transport.sendMail(options)
        return true
    } catch (error) {
        console.log(error)
        return false
    }
}

export const sendAutoSMS = async (options) => {
    const transport = twilio(process.env.TWILIO_SID, process.env.TWILIO_AUTH_TOKEN, {
        lazyLoading: true
    })

    try {
        await transport.messages.create(options)
        return true
    } catch (error) {
        console.log(error)
        return false
    }    
}
