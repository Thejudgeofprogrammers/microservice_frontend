console.clear();

import dotenv from 'dotenv';
import express, { Request, Response } from 'express';
import path from 'path';

dotenv.config();

const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// View engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '..', 'views'));

// Static files
app.use(express.static(path.join(__dirname, '..', 'public')));
app.use('/favicon.ico', (_req, res) => {
    res.status(204).end();
});

const PORT: number = parseInt(process.env.PORT || '3000', 10);
const HOST: string = process.env.HOST || 'localhost';

app.get('/', (_req: Request, res: Response) => {
    return res.render('main')
});

app.get('/auth', (_req: Request, res: Response) => {
    return res.render('auth')
});

app.get('/project_list', (_req: Request, res: Response) => {
    return res.render('project_list')
});

app.listen(PORT, HOST, () => {
    console.log(`Server located on http://${HOST}:${PORT}`);
});
