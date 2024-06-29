const {Router} = require('express');
const router = Router();

const { getProducts, deleteProduct, addProduct } = require('../controllers/products');

router.get('/', getProducts)
router.post('/', addProduct)
router.delete('/', deleteProduct)

module.exports = router;

