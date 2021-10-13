const mongoose = require('mongoose');
const productSchema = mongoose.Schema({
    name:{
        type:String,
        requred: true
    },
    hsn:{
        type:Number,
        unique:true,
        requred: true
    },
    uqc:{
        type:Number,
        requred: true
    },
    rodtep:{
        type: Number,
        requred: true
    },
    cap:{
        type: Number,
        requred: true
    },

    price:{
        type: Number,
        requred: true
    }
})

module.exports = mongoose.model("Product", productSchema);