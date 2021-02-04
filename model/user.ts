import mongoose from 'mongoose';
import Joi from 'joi';
import { User } from '../interface/users.interface';

const User = mongoose.model<User & mongoose.Document>(
   "User",
   new mongoose.Schema({
        name: {
            type: String,
            required: true,
            minlength: 5,
            maxlength: 50,
        },
        email: {
            type: String,
            unique: true,
            minlength: 5,
            maxlength: 50,
        },
        password: {
            type: String,
            required: true,
            minlength: 5,
            maxlength: 1024,
        },
        isAdmin:Boolean 
   })
)

function validateUsers(User : object) {
    const schema = Joi.object({
        name: Joi.string().min(5).max(50).required(),
        email: Joi.string().min(5).max(255).required().email(),
        password: Joi.string().min(5).max(255).required(),
    });
  
    return schema.validate(User);
}
  
exports.User = User;
export const validate = validateUsers;