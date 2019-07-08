import winston, { format } from 'winston';
import Transport from 'winston-transport';
import { Loggly } from 'winston-loggly-bulk';

declare var _LTracker: any;
declare var setImmediate: any;

class LogglyTransport extends Transport {
    constructor(opts?: any) {
        super(opts);
        //
        // Consume any custom options here. e.g.:
        // - Connection information for databases
        // - Authentication information for APIs (e.g. loggly, papertrail,
        //   logentries, etc.).
        //
    }

    log(info: any, callback: any) {
        setImmediate(() => {
            this.emit('logged', info);
            // Perform the writing to the remote service
            if (typeof _LTracker !== 'undefined') {
                _LTracker.push(info);
            }
        });

        callback();
    }
}

const transports = [
    // some other loggings
    new winston.transports.Console({
        level: 'info',
        handleExceptions: true,
    }),
    new LogglyTransport(),
];

if (Loggly) {
    transports.push(
        new Loggly({
            inputToken: 'c44e0143-3257-4a8f-a4b3-a3df1aefd79f',
            level: 'info',
            subdomain: 'fdmg',
            tags: ['Winston-NodeJS'],
            json: true,
            handleExceptions: true,
        })
    );
}

const logger = winston.createLogger({
    level: 'info',
    format: format.combine(format.timestamp(), format.json()),
    transports,
});

export { winston };

export { logger as Log };
