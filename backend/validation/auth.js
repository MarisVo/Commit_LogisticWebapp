import Error from "../helper/error.js"

export const staffRegisterValidate = data => {
    const error = new Error()

    error.isRequired(data.name, "name")
    .isRequired(data.email, "email")
    .isRequired(data.phone, 'phone')
    .isRequired(data.password, "password")

    return error.get()
}

export const customerRegisterValidate = data => {
    const error = new Error()

    error.isRequired(data.name, "name")
    .isRequired(data.email, "email")
    .isRequired(data.phone, 'phone')
    .isRequired(data.password, "password")
    .isRequired(data.verify_password, "verify_password")
    
    if(error.get()) return error.errors
    if(data.password != data.verify_password)
        error.appendError('confirm password does not match password.')

    return error.get()
}

export const userLoginValidate = data => {
    const error = new Error()

    error.isOnlyRequiredOneOf([{field:data.email, name:'email'},{field:data.phone, name:'phone'}])
    .isRequired(data.password, "password")
    return error.get()
}