const express = require('express');
const port = process.env.PORT || 3001;
const someVariable = process.env.SOME_VARIABLE;

const app = express();

app.get('/', (req, res) => {
    res.send(`<h1>Hello from test.recap.cloud v2!</h1><p>Some variable is "${someVariable}"</p>`);
});

app.listen(port, () => {
    console.log(`App listening on port ${port}`);
});