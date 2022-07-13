import multer from "multer"

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

const storageResources = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, `./public/${req.dirName}/`)
    },
    filename: (req, file, cb) => {
        const uniqueSuffix = Date.now()
        const filename = file.originalname  // name.jpg
        const part = filename.split(".")
        part[part.length - 2] += uniqueSuffix   // name+uniqeSuffix.jpg
        cb(null, part.join("."))
    }
})
export const uploadResources = multer({ storage: storageResources })

export const handleFilePath = req_file => {
    if (process.platform === 'win32')
        return req_file ? req_file.path.split("\\").slice(1).join("/") : null
    else
        return req_file ? req_file.path.split("/").slice(1).join("/") : null
}

export const calculateShipmentFee = (distance, quantity, price) => {
    let totalPrice = 0
    const priceIdx = Object.keys(RETURN_ZONE).indexOf(distance.zonecode)

    let idx = 0
    let value = price[idx]
    while (quantity > 0 && idx < price.length) {
        if (value.next) {
            totalPrice += value.prices[priceIdx]
            quantity -= value.sidestep
        }
        else {
            totalPrice += value.prices[priceIdx]
            quantity -= value.sidestep
            idx += 1
            value = price[idx]
        }
    }
    return totalPrice
}

export const OTP_EXPIRED = 60000 // unit: milisecond

export const JWT_EXPIRED = '7d'
export const JWT_REFRESH_EXPIRED = '30d'

export const UTYPE = {
    STAFF: 'staff',
    CUSTOMER: 'customer'
}

export const STAFF = {
    ADMIN: 'admin',
    DRIVER: 'driver',
    SHIPPER: 'shipper',
    STOREKEEPER: 'storekeeper',
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
    A: 'A', // 'provincial'
    B: 'B', // '<100Km'
    C: 'C', // '100-300Km'
    F: 'F' // '>300Km'
}

export const VERIFY_OP = {
    email: 'email',
    phone: 'phone'
}

export const ORDER_STATUS = {
    waiting: 'waiting',
    accepted: 'accepted',
    processing: 'processing',
    completed: 'completed'
}

export const NOTIFY_EVENT = {
    connection: 'connection',
    addSession: 'add-session',
    send: 'send',
    receive: 'receive',
    disconnect: 'disconnect'
}