import * as mongoose from   'mongoose';
import { Product } from '../interface/products.interface';
const Joi = require('joi');

const Product = mongoose.model<Product & mongoose.Document>(
   "Product",
   new mongoose.Schema({
    name: { type: String, required: true, minlength: 5, maxlength: 50 },
    price: { type: Number, required:true},
    brand: {
        type: String, required: true, minlength: 5, maxlength: 50
    },
    image:{
        type: String,
        required:true
    },
    images: [{
        type: String
    }],
    quantity:{
        type:Number,
        default:0,
        min:0,
        max:999
    },
    description: { type: String},
   })
)

function validateProduct(product : object) {
    const schema = Joi.object({
        name: Joi.string().min(5).max(50).required(),
        brand: Joi.string().min(5).max(50).required(),
        image:Joi.string().required(),
        images: Joi.array().default([]),
        price: Joi.number().required(),
        quantity:Joi.number(),
        description: Joi.string(),
    });
  
    return schema.validate(product);
}
  
exports.ProductsModel = Product;
exports.validate = validateProduct;