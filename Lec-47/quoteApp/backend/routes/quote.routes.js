const QuoteModel = require('../models/Quote.model');

const router = require('express').Router();

router.get('/', async (req, res, next) => {
    try {
        // const quotes = await QuoteModel.find({}).populate('user');
        const quotes = await QuoteModel.find({});

        res.status(200).json({
            data: quotes
        });
    } catch (err) {
        next(err);
    }
})

router.post('/', async (req, res, next) => {
    try {
        const quote = await QuoteModel.create(req.body);
        res.status(201).json({
            data: quote
        })
    } catch (err) {
        next(err)
    }
})

router.get('/:id', async (req, res, next) => {
    const { id } = req.params;
    const quote = await QuoteModel.findById(id);
    res.status(200).json({
        data: quote
    })
})

router.put('/:id', async (req, res, next) => {
    const { id } = req.params;
    const quote = await QuoteModel.findByIdAndUpdate(id, req.body);

    res.status(200).json({
        data: quote
    })
})

router.delete('/:id', async (req, res, next) => {
    const { id } = req.params;
    const quote = await QuoteModel.findByIdAndDelete(id);

    res.status(200).json({
        data: quote
    })
})



module.exports = router;