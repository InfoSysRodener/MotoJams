import winston from "winston";

module.exports = function (){
    winston.add(new winston.transports.File({
        filename: 'log/logfile.log'
    }));
        
    winston.exceptions.handle(
     new winston.transports.File({ filename:'log/exceptions.log'})
    );

    if (!process.env.PORT) {
        winston.info('port is missing.')
        process.exit(1);
    }
}

