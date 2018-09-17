'use strict';
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/usersDB')
.then(data => {
	console.log('DB Created');
})
.catch(error => {
	console.log(error);
});

module.exports = mongoose;