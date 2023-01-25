
// membuat method dengan props schema
const validate = (schema) => (req, res, next) => {
try{
    schema.validateAsync()
}
catch (error){
    console.log(error)
    // next()
}
}

module.exports = {validate}