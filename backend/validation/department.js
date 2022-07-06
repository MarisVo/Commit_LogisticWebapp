import Error from "../helper/error.js"

export const departmentRegisterValidate = data => {
    const error = new Error()

    .isRequired(data.name, 'name')
    .isRequired(data.description, 'description')
    .isRequired(data.location, 'location')
    .isRequired(data.director, 'director')
    .isRequired(data.scale, 'scale')
    .isRequired(data.careers, 'careers')

    return error.get()

}
