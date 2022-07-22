import Error from "../helper/error.js"

export const createRoadValidate = data => {
    const error = new Error()

    error
    .isRequired(data.car, 'car')
    .isRequired(data.destination, 'destination')
    .isRequired(data.origin, 'origin')
    .isRequired(data.driver, 'driver')
    
    return error.get()
}