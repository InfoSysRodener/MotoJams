import mongoose from 'mongoose';
import Joi from 'joi';

const Order = mongoose.model(
   "Order",
   new mongoose.Schema({
        
   })
)

function validateOrders(Orders : object) {
    const schema = Joi.object({
       
    });
  
    return schema.validate(Orders);
}
  
exports.Orders = Order;
exports.validate = validateOrders;