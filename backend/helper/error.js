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
        // if(this.checkRequire)   this.checkRequire = false
        return this
    }

    isOnlyRequiredOneOf(lstFieldAndName){
        if(!lstFieldAndName.some(ele=>ele.field != null)){
            let errorlog = ''
            lstFieldAndName.forEach((ele, idx)=>{
                if(idx < lstFieldAndName.length-1)
                    errorlog += ele.name + ' or '
                else errorlog += ele.name
            })
            this.errors.push(`${errorlog} is requied`)
        }
        return this
    }

    isInRange(field, range) {
        if(!Object.values(range).includes(field))
            this.errors.push(`system do not understand value of ${field}.`)
        return this
    }

    get() {
        return this.errors.length > 0 ? this.errors : null
    }
}