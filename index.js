console.clear()
const dotenv = require('dotenv')
const express = require('express')
const app = express()
dotenv.config()

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use('/favicon.ico', (req, res) => res.status(204).end());

const PORT = parseInt(process.env.PORT, 10) || 3000;
const HOST = process.env.HOST || 'localhost';

app.get('/', (req, res) => {
    return res.render('main')
})

app.get('/auth', (req, res) => {
    return res.render('auth')
})

app.listen(PORT, HOST, () => {
    console.log(`Server located on http://${HOST}:${PORT}`);
});
