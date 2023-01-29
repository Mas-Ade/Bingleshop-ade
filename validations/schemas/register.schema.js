const Joi = require('joi')

// inisialisasi body object terhadap joi
    const registerSchema = Joi.object({
        nama_user: Joi.string().min(5).required(),
        email: Joi.string().required(),
        password: Joi.string().required(),
        address: Joi.string().required(),  

    })
   
module.exports = { registerSchema }

