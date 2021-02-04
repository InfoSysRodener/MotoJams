import express from "express";
import product  from './product.router';


module.exports = function(app:express.Application){
    app.use("/api/products",product);
}