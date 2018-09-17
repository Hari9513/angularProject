'use strict';
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const port = 8000;
const { db } = require('./models');

app.use(express.static('public'));

app.use(cors());

app.use(bodyParser.urlencoded({extend : true}));
app.use(bodyParser.json());
require('./routes')(app)
app.listen(port, () => {
	console.log(`App is listening at ${port}`);
})