import { ArgumentsHost, ExceptionFilter } from "@nestjs/common";
import { appendFileSync } from "fs";
import { Response } from "express";

export class HttpErrorFilter implements ExceptionFilter {
  catch(exception: any, host: ArgumentsHost) {
    const response = host.switchToHttp().getResponse<Response>();
    const statusCode = typeof exception.getStatus === 'function' ? exception.getStatus() : 500;
    const message = exception.message;
    const timestamp = new Date().toISOString();
    appendFileSync("errors.log", `[${timestamp}] ${statusCode} - ${exception.message}\n`);
    response.status(statusCode).json({
      statusCode,
      message,
      timestamp,
      path: host.switchToHttp().getRequest().path,
      error: null
    })
  }
}
