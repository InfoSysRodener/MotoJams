import config from 'config';
import mongoose from 'mongoose';
import winston from "winston";

module.exports = function () {

    const name = process.env.DB_NAME; // config.get('DB.NAME');
    const password = process.env.DB_PASS; // config.get('DB.PASSWORD');
   
    const host = `mongodb+srv://root:${password}@cluster0.2r8jw.mongodb.net/${name}?retryWrites=true&w=majority`;
  
    mongoose
    .connect(
        `${host}`,
        { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true }
    )

    .then(() => winston.info(`Connected To ${name}..`));
}
