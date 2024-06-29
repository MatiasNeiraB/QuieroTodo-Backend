const product = require("../models/product")

exports.getProducts = async (req, res) => {
    try {
        const products = await product.find();
        res.json(products);
    } catch (error) {
        console.log(error);
        res.status(400).json({ ok: false, message: 'Ha ocurrido un error' });
    }
}
exports.getProduct = async (req, res) => {
    try {
        const sku = req.params.sku;
        const products = await product.findById(sku);
        res.json(products);
    } catch (error) {
        console.log(error);
        res.status(400).json({ ok: false, message: 'Ha ocurrido un error' });
    }
}

exports.addProduct = (req, res) => {
    console.log(req.body);
}

exports.deleteProduct = (req, res) => {
    res.send('delete')
}