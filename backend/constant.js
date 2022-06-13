import multer from "multer"
import CustomerVerifyOTP from "./model/CustomerVerifyOTP.js"
import argon2 from "argon2"

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, `./public/uploads/${req.dirName}/`)
    },
    filename: (req, file, cb) => {
        const uniqueSuffix = Date.now()
        const filename = file.originalname  // name.jpg
        const part = filename.split(".")
        part[part.length - 2] += uniqueSuffix   // name+uniqeSuffix.jpg
        cb(null, part.join("."))
    }
})
export const upload = multer({ storage })

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

export const OTP_EXPIRED = 60000 // unit: milisecond

export const JWT_EXPIRED = '24h'

export const UTYPE = {
    STAFF: 'staff',
    CUSTOMER: 'customer'
}

export const STAFF = {
    ADMIN: 'admin',
    DRIVER: 'driver',
    SHIPPER: 'shipper',
    STAFF: 'staff'
}

export const CUSTOMER = {
    BUSINESS: 'business',
    PASSERS: 'passers',
    INTERMEDIARY: 'intermediary'
}

export const CUSTOMER_RANK = {
    TITAN: 'titan',
    GOLD: 'gold',
    SILVER: 'silver',
    BRONZE: 'bronze',
    UNRANK: 'unrank'
}

export const PRODUCT_UNIT = {
    KG: 'kg',
    TON: 'ton',
    M3: 'm3'
}

export const RETURN_ZONE = {
    A: 'provincial',
    B: '<100Km',
    C: '100-300Km',
    D: '>300Km'
}

export const VERIFY_OP = {
    email: 'email',
    phone: 'phone'
}