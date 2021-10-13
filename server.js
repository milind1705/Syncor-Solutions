const express = require('express');
const mongoose= require('mongoose');
const port = 3000;
const app = express();

const productRoute = require('./routes/product.routes')
mongoose.connect("mongodb://localhost:27017")

mongoose.connection.once('open', () => {
    console.log("connceted with db")
});

app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.use('/product', productRoute);

app.listen(port, () => {
    console.log(`app is started on port ${port}`)
})
