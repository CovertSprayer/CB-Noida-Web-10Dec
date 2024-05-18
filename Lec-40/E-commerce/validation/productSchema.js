const Joi = require('joi');

const productSchema = Joi.object({
    title: Joi.string().required(),
    image: Joi.string().required(),
    price: Joi.number().min(0).required(),
    description: Joi.string()
})

const reviewSchema = Joi.object({
    rating: Joi.number().min(0).required(),
    comment: Joi.string()
})

module.exports = {
    productSchema,
    reviewSchema
}