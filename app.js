const express = require('express');
const port = process.env.PORT || 3000;

const app = express();

app.get('/', (req, res) => {
    res.send('<h1>Hello from test.recap.cloud v2!</h1>');
});

app.listen(port, () => {
    console.log(`App listening on port ${port}`);
});