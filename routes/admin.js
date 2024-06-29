const {Router} = require('express');
const router = Router();

const { getProduct, deleteProduct, addProduct } = require('../controllers/products');
//const { getUser, } = require('../controllers/products');

router.get('/products', getProduct)
//router.get('/users', getUser)



module.exports = router;
