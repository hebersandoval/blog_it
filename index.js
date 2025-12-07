const path = require('path');
const express = require('express');

const app = express();
const port = 3000;

// Use assets
app.use(express.static('public'));

app.get('/', (request, response) => {
    response.sendFile(path.resolve(__dirname, 'index.html'));
});

app.get('/about', (request, response) => {
    response.sendFile(path.resolve(__dirname, 'about.html'));
});

app.get('/contact', (request, response) => {
    response.sendFile(path.resolve(__dirname, 'contact.html'));
});

app.listen(port, () => {
    console.log(`App listening on port ${port}`);
});
