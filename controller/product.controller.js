const Product = require("../models/product");
module.exports.create = (req, res) => {
  const {hsn, name, cap, uqc, price, rodtep } = req.body;
  Product.findOne({hsn:hsn}).then((product)=>{
    if(product){
      return res.status(400).json({message:"The product with this HSN Code is alreday exists"})
    }
  let newproduct = new Product({hsn, name, cap, uqc, price, rodtep} );
  newproduct
    .save()
    .then((data) => {

      res.status(200).json({
        success: true,
        data:data,
        error:null,
        message:"product saved succesfully"
      });
    })
    .catch((err) => {
      return res.status(400).json({
        success: false,
        data:null,
        error: err.message,
        message: "ERROR_HERE"
      });
    });
 })
  
};

module.exports.getAll = (req, res) => {
  let HSN = req.query.HSN;
  if(HSN){
    Product.find({hsn:HSN})
    .then((data) => {
      res.status(200).json({success: true,
        data:data,
        error:null,
        message:"data fetched succesfully"
      });
    })
  } else
  Product.find({})
    .then((data) => {
      res.status(200).json({success: true,
        data:data,
        error:null,
        message:"data fetched succesfully"
      });
    })
    .catch((error) => {
      return res.status(400).json({
        success:false,
        data:null,
        error: error.message,
        message: "ERROR_HERE"
      });
    });
};

module.exports.getOne = (req, res) => {
    Product.findById({
    _id: req.params.id,
  })
    .then((data) => {
      res.status(200).json({
        success: true,
        data:data,
        error:null,
        message:"Data fetched succesfully"
      });
    })
    .catch((err) => {
      return res.status(400).json({
        success: false,
        data:null,
        error: err.message,
        message: "ERROR_HERE"
      });
    });
};

module.exports.update = async (req, res) => {
  try{
    const id = req.params.id;
        const updated= await Product.findByIdAndUpdate(id, req.body, {new: true})
        res.json({  success: true,
                data:updated,
                error:null,
                message:"Data fetched succesfully" });
    } catch(err){
        return res.status(400).json({
          success: false,
            data:null,
            error: err.message,
            message: "ERROR_HERE"
        })
} 
}

module.exports.delete = (req, res) => {
  Product.findByIdAndDelete({
    _id: req.params.id,
  })
    .then(() => {
      res.status(200).json({
        success: true,
        message:"product deleted"
      });
    })
    .catch((err) => {
      res.status(400).json({
        data:null,
        error: err.message,
        message: "ERROR_HERE"
      });
    });
};
