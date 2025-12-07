const path = require('path');
const express = require('express');

const templeEngine = require('express-edge');

const app = express();
const port = 3000;

// Use assets
app.use(express.static('public'));

// Sets view engine
app.use(templeEngine);
app.set('view engine', 'hbs');
app.set('views', `${__dirname}/views`);

app.get('/', (request, response) => {
    response.sendFile(path.resolve(__dirname, 'pages/index.html'));
});

app.get('/about', (request, response) => {
    response.sendFile(path.resolve(__dirname, 'pages/about.html'));
});

app.get('/contact', (request, response) => {
    response.sendFile(path.resolve(__dirname, 'pages/contact.html'));
});

app.listen(port, () => {
    console.log(`App listening on port ${port}`);
});
