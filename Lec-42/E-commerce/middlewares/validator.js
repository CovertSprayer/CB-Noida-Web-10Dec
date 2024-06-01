
// const { productSchema, reviewSchema } = require("../validation/productSchema");


// function productValidator(req, res, next) {
//     const { title, price, description, image } = req.body;

//     const {error, value} = productSchema.validate({ title, price, description, image })
//     if(error) return res.send('Invalid Data');

//     next();
// }

// function reviewValidator(req, res, next) {
//     const { rating, comment } = req.body;

//     const {error, value} = reviewSchema.validate({ rating, comment })
//     if(error) return res.send('Invalid Data');

//     next();
// }

function validator(schema){
    return function (req, res, next){
        const {error, value} = schema.validate(req.body)

        // console.log(error);
        if(error) return res.render('error', {err: error.details[0]});
        
        req.body = value;
        next();
    }
}

module.exports.validator = validator;

// productValidator = validator(productSchema)
// reviewValidator = validator(reviewSchema)