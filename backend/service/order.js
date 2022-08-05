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
