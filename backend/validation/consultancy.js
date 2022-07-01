import Error from "../helper/error.js"

export const createConsultancyValidate = data => {
    const error = new Error()

    error.isRequired(data.name, 'name')
    .isRequired(data.email, 'email')
    .isRequired(data.phone, 'phone')
    .isOnlyRequiredOneOf([{field: data.serviceId, name:'serviceId'}, {field: data.serviceName,name:'serviceName'}])
    return error.get()
}