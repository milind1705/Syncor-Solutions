const Product = require("../models/product");

module.exports.calculate = async (req, res) => {
   try {let hsn = req.query.hsn;
    let product =await Product.findOne({hsn:hsn})
    let price = product.price; 
    let rodtep = product.rodtep;
    let rodtepAmt = (price * rodtep)/100
    let cap = product.cap;
    let uqc = product.uqc;
    let capAmt = cap * uqc;
    if(capAmt < rodtepAmt){
        return res.status(200).json({message : `rodtepAmt is ${rodtepAmt}`})
    } else 
    return res.status(200).json({message : `capAmt is ${capAmt}`})}
    catch (err){
        console.log(err)
    }
}