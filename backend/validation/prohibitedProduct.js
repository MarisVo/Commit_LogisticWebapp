import Error from "../helper/error.js"

export const addProhibitedProductValidate = data => {
    const error = new Error()

    error.isRequired(data.name, 'name')
    .isRequired(data.detail, 'detail')

    return error.get()
}