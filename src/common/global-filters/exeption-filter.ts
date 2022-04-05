import {
    ExceptionFilter,
    Catch,
    ArgumentsHost,
    Injectable,
    Logger,
  } from '@nestjs/common';

/**
* Global error for catch errors
* @name AllExceptionFilter
* @kind class
*/
  @Catch()
  @Injectable()
  export class AllExceptionFilter implements ExceptionFilter {
    public constructor() {}
    logger = new Logger('ERROR');
    catch(exception: Error, host: ArgumentsHost) {
      const ctx = host.switchToHttp();
      const res = ctx.getResponse();
      this.logger.log(exception);
      res.send(exception);
    }
  }