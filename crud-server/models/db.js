'use strict';
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/userDB')
.then(data => {
	console.log('DB Created');
})
.catch(error => {
	console.log(error);
});

module.exports = mongoose;