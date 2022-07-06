import Error from "../helper/error.js"

export const careerValidate = data => {
    const error = new Error()

    .isRequired(data.name, 'name')
    .isRequired(data.description, 'description')
    .isRequired(data.type, 'type')
    .isRequired(data.location, 'location')
    .isRequired(data.state, 'state')
    .isRequired(data.bonus, 'bonus')
    .isRequired(data.deadline, 'deadline')
    .isRequired(data.applicants, 'applicants')

    return error.get()

}

    // CV file check type of file 

    // check admin fx


   
