const { default: mongoose } = require("mongoose");

const productSchema=new mongoose.Schema({
    name:String,
    brand:String,
    price:String,
    category:String

});

export const Product =mongoose.models.products || mongoose.model('products',productSchema);



// mongoose.models.products || mongoose.model('products',productModel)

// if already created then mongoose.models.products oterwise created collection  mongoose.model('products',productModel) ;