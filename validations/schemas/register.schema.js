const Joi = require('joi')

// inisialisasi body object terhadap joi
    const registerSchema = Joi.object({
        nama_user: Joi.string().min(5).required(),
        email: Joi.string().required(),
        passwrod: Joi.string().required(),   
    }).required()
   
module.exports = { registerSchema }

