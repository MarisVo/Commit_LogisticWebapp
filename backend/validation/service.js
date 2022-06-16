import Error from "../helper/error.js"

export const createPriceValidate = data => {
    const error = new Error()

    error.isRequired(data.kg, 'kg')
    .isRequired(data.ton, 'ton')
    .isRequired(data.m3, 'm3')
    
    return error.get()
}

export const createServiceValidate = data => {
    const error = new Error()

    error.isRequired(data.name, 'name')
    .isRequired(data.subDetail, 'subDetail')
    .isRequired(data.target, 'target')
    
    return error.get()
}

export const createDistanceValidate = data => {
    const error = new Error()

    error.isRequired(data.fromProvince, 'fromProvince')
    .isRequired(data.toProvince, 'toProvince')
    .isRequired(data.zonecode, 'zonecode')
    
    return error.get()
}

export const uploadPricelistValidate = data => {
    const error = new Error()

    error.isRequired(data.province, 'province')
    
    return error.get()
}