require('dotenv').config();
const express = require('express');
const path = require('path')
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

const app = express()

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cookieParser());

app.use(express.static(path.join(__dirname, 'public')));

const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
})

app.get('/health', (req, res) => {
    res.status(200).json({
        status: 'ok'
    });
})

app.listen(PORT, err => {
    console.log(`listening on ${PORT}`);
})
