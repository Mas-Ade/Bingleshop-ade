const ErrorResponse = require("../helpers/error.helper");

// membuat method dengan props schema
const validate = (schema) => async (req, res, next) => {
try{
    await schema.validateAsync(req.body)
}
catch (error){

    const messages = []

    error.details.forEach (detail => {
        messages.push({
            path: detail.path[0],
            message: detail.message
        })
    })

    next(new ErrorResponse(400, messages))
    
}
}

module.exports = {validate}