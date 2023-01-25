const Joi = require('joi')

// inisialisasi body object terhadap joi
    const registerSchema = Joi.object({
        nama_user: Joi.string().min(5).required(),
        noreg_user: Joi.string().min(5).required(),
        email: Joi.string().required(),
        passwrod: Joi.string().required(),
        address: Joi.string().required(),
        no_telp: Joi.string().required()        
    })

    //
    // registerSchema.validateAsync()

    module.exports = { registerSchema }

