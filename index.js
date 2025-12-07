const path = require('path');
const express = require('express');

const app = express();
const port = 3000;

// Use assets
app.use(express.static('public'));

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
