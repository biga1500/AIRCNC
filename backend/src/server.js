const cors = require ('cors');
const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes')
const path = require('path');
const app = express();

mongoose.connect('mongodb+srv://gpatatt:gpatatt@cluster0-lyknz.mongodb.net/aircnc?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});



//req.query = acessar query params (filtros)
//req.params = acessar route params(edição, delete)

app.use(cors());
app.use(express.json());
app.use('/files', express.static(path.resolve(__dirname, '..', 'uploads')))
app.use(routes);
app.listen(3333);