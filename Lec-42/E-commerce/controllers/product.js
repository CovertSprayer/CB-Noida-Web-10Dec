const Product = require('../models/Product.model');

module.exports.getAllProducts = async (req, res) => {
    const products = await Product.find({});
    res.render('product/index', { products });
}

module.exports.productForm = (req, res) => {
    res.render('product/new');
}

module.exports.createProduct = async (req, res) => {
    const { title, price, description, image } = req.body;

    // const {error, value} = productSchema.validate({ title, price, description, image })
    // if(error) return res.send('Invalid Data');

    // return res.send('from product route')
    await Product.create({ title, price, description, image });

    req.flash('success', 'Product added successfully!!')
    res.redirect('/products');
}

module.exports.getProduct = async (req, res) => {
    const id = req.params.id;
    // const products = await Product.find({_id: id});
    const product = await Product.findById(id).populate('reviews');
    res.render('product/show', { product });
}

module.exports.getEditForm = async (req, res) => {
    const { id } = req.params;
    const product = await Product.findById(id);
    res.render('product/edit', { product });
}

module.exports.editProduct = async (req, res) => {
    const { title, description, image, price } = req.body;
    const { id } = req.params;
    const existingProduct = await Product.findById(id);

    existingProduct.title = title;
    existingProduct.description = description;
    existingProduct.image = image;
    existingProduct.price = price;

    await existingProduct.save();

    req.flash('success', 'Product updated successfully!!')
    res.redirect('/products');
}

module.exports.deleteProduct = async (req, res) => {
    try {
        const { id } = req.params;
        await Product.findByIdAndDelete(id);

        req.flash('success', 'Product deleted successfully!!')
        res.redirect('/products');
    }
    catch (err) {
        req.flash('error', 'Something Went wrong!!');
        console.log(err);
    }
}