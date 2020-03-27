const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = new express();

/*app.use(cors({
    origin: 'www.site.com'
}));*/

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(3333);