import express, { Request, Response } from "express";
import { validate } from '../model/user';


export const index =  async(req:Request,res:Response) => {
    
}

export const create = async(req:Request,res:Response) => {
    const { error } = validate(req.body);
    if (error) return res.status(400).send(error.details[0].message);

}