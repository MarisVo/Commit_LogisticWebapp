import Order from "../model/Order.js"

export const genarateOrderID = async () => {
    try {
        while (true) {
            const orderId = Math.floor(10000000 + Math.random() * 90000000).toString()
            const isExist = await Order.exists({
                orderId
            })
            if (!isExist) {
                return orderId
            }
        }
    } catch (error) {
        console.log(error)
        return null
    }
}
