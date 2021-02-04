const { ProductsModel } = require('../model/products');
import { Product, Products } from '../interface/products.interface'


export const findAll = async () : Promise<Products> => {

    const product = await ProductsModel.find();

    return product;
}

export const find = async (id:string) : Promise<Product> => {

    const record:Product = ProductsModel.findById(id);

    if(record){
        return record;
    }

    throw new Error('No record Found');
}

export const create = async (newItem: Product): Promise <Product> => {

    const product = await new ProductsModel(newItem);

    return await product.save();

}

export const update = async(id:string,item:Product) : Promise <Product> => {

    const product = await ProductsModel.findIdAndUpdate(id,item,{new:true});
    
    if(product){
        return product
    }

    throw new Error('No record Found');
}
