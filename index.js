const express = require('express');
const app = express();
const { port } = require('./config');

const { log } = require('console');

app.use(express.static('public'));
app.use(express.json());

app.set('views');
app.set('view engine', 'ejs');

app.use('/', (req, res) => {
    res.render('index');
});

app.listen(port, () => {
    log('[ExpressJS] Website listen port http://localhost:' + port);
});