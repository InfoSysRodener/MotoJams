import { Request,Response} from 'express';
import winston from 'winston';


module.exports = function(err:any,req:Request,res:Response) {
    winston.error(err.message, err);

    const status = err.status || 500;
    const message = err.message || 'Something went wrong';
    
    res.status(status).send(message);
    
}