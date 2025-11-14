import express, { Express, Request, Response, NextFunction } from 'express';
import morgan from 'morgan';
import path from 'path';

const removeXPoweredByHeader = (req: Request, res: Response, next: NextFunction) => {
    res.removeHeader('X-Powered-By');
    next();
}

const serverConfig = (app: Express) => {
    app.use(morgan('dev')); // логируем запросы в консоль

    // парсим тело запроса
    app.use(express.json()); 
    app.use(express.urlencoded({ extended: true })); 

    app.use(removeXPoweredByHeader); // убираем заголовок, что сервер на экспресс

    app.use(express.static(path.join(__dirname, '../public'))) // раздает статику из папки паблик
}

export default serverConfig;