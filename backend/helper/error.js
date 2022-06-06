export default class Error
{
    constructor() {
        this.errors = []
        this.checkRequire = true
    }

    /**
     * @param field : field to validate
     * @param name : default is param field's name
     * @returns this
     */
    isRequired(field, name) {
        if(field == null) this.errors.push(`${name} field is required.`)
        if(this.checkRequire)   this.checkRequire = false
        return this
    }

    get() {
        return this.errors.length > 0 ? this.errors : null
    }
}