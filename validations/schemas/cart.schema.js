const Joi = require('joi')

// inisialisasi body object terhadap joi
    const cartSchema = Joi.object({
        id_item: required(),
        total_item: required(),
    }).required()
   
module.exports = { cartSchema }

