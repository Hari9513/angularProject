'use strict';
const user = require('./user');

function createUser(app){
	app.use('/api', user);
} 

module.exports = createUser;