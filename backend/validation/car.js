import Error from "../helper/error.js"

export const createCarValidate = data => {
    const error = new Error()

    error.isRequired(data.car_plate, 'car_plate')
    .isRequired(data.car_type, 'car_type')
    
    return error.get()
}