const dotenv = require('dotenv');
dotenv.config();

const express = require('express');
const bodyParser = require('body-parser');
const fetch = require('node-fetch');
const mockAPIResponse = require('./mockAPI.js');

const app = express();

const cors = require('cors');

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(express.static('dist'));

const baseURL = 'https://api.meaningcloud.com/sentiment-2.1?';
const apiKey = process.env.API_KEY;
let userUrl = [];

app.get('/',  (req, res) => {
    res.status(200).sendFile('dist/index.html');
});

app.get('/test', function (req, res) {
    res.status(200).send(mockAPIResponse);
});

app.post('/api', async (req, res) => {
    userUrl = req.body.url;
    const apiURL = `${baseURL}key=${apiKey}&url=${userUrl}&lang=en`;

    const response = await fetch(apiURL);
    const data = await response.json();

    res.status(200).send(data);
});

app.listen(8080,  () => {
    console.log('Example app listening on port 8080!')
});