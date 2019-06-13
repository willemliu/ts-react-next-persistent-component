import winston, {format} from 'winston';
import Transport from 'winston-transport';

declare var _LTracker: any;

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
        });

        // Perform the writing to the remote service
        if  (typeof(_LTracker) !== 'undefined') {
            _LTracker.push(info);
        }

        callback();
    }
}

const logger = winston.createLogger({
    level: 'info',
    format: format.combine(
        format.timestamp(),
        format.json()
    ),
    transports: [
        // some other loggings
        new winston.transports.Console({
            level: 'info',
            handleExceptions: true
        }),
        new LogglyTransport()
    ]
});

export {logger as Log};
