const Product = require("../models/Product")

exports.GetProduct = async (req, res) => {
    try {
        const products = await Product.find();
        res.json(products);
    } catch (error) {
        console.log(error);
        res.status(400).json({ ok: false, message: 'Ha ocurrido un error' });
    }
}

exports.NewProduct = (req, res) => {
    console.log(req.body);
}

exports.DeleteProduct = (req, res) => {
    res.send('delete')
}