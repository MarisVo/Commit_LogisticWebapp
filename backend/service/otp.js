import CustomerVerifyOTP from "../model/CustomerVerifyOTP.js"
import argon2 from "argon2"
import { OTP_EXPIRED } from "../constant.js"

export const genarateOTP = () => Math.floor(100000 + Math.random() * 900000).toString()

export const createOTP = async () => {
    try {
        while (true) {
            const otp = genarateOTP()
            const argon2_otp = await argon2.hash(otp)
            const isExist = await CustomerVerifyOTP.exists({
                otp_code: argon2_otp
            })
            if (!isExist) {
                return otp
            }
            await clearOTP()
        }
    } catch (error) {
        console.log(error)
        return null
    }
}

export const updateOTP = async (userId) => {
    try {
        while (true) {
            const otp = genarateOTP()
            const argon2_otp = await argon2.hash(otp)
            const isExist = await CustomerVerifyOTP.exists({
                otp_code: argon2_otp
            })
            if (!isExist) {
                const newVerifyOTP = await CustomerVerifyOTP.findOneAndUpdate({
                    user: userId
                },
                {
                    otp_code: argon2_otp
                })
                if(newVerifyOTP)
                    return otp
                return null
            }
        }
    } catch (error) {
        console.log(error)
        return null
    }
}

export const clearOTP = async () => {
    try {
        await CustomerVerifyOTP.deleteMany({
            updatedAt: {
                $lt: Date.now() - OTP_EXPIRED
            }
        })
    } catch (error) {
        console.log(error)
    }
}