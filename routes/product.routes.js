const express = require('express');
const router = express.Router();
const product = require('../controller/product.controller');
const calculator = require('../controller/rodtepCalculator')
router.post('/', product.create);
router.get('/', product.getAll);
router.get('/:id', product.getOne);
router.put('/:id', product.update);
router.delete('/:id', product.delete)

router.post('/calc', calculator.calculate)
module.exports= router;