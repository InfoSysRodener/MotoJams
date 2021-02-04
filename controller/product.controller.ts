import express, { Request, Response } from "express";
const { validate } = require('../model/products');
import * as ProductService from "../services/products.service"
import { Product , Products } from "../interface/products.interface";


export const index = async (req:Request,res:Response) => {

    try{
        const items:Products = await ProductService.findAll();
        res.send(items);
    }catch(e){
        res.status(404).send(e.message);
    }
    
}

export const find = async(req:Request,res:Response) => {
    
    try{
        const item = await ProductService.find(req.params.id);
        res.send(item);
    }catch(e){
        res.status(400).send(e.message);
    }

}

export const create = async(req:Request,res:Response) => {
 
    const { error } = validate(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    const product = await ProductService.create(req.body);

    res.status(201).send(product); 
}

export const update = async(req:Request,res:Response) => {

    const { error } = validate(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    
}
