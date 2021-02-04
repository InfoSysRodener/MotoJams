import express , { Request, Response } from "express";
const app: express.Application = express();
import cors from "cors";
import helmet from "helmet";
import winston from "winston";

require('dotenv').config();
app.use(helmet());
app.use(cors());
app.use(express.json());

require('./src/db')();
require('./src/logging')();
require('./routes/index')(app);

const PORT: number = parseInt(process.env.PORT as string, 10) || 3000;
app.listen(PORT, () => winston.info(`App is listening on port ${PORT}!`));

