'use strict';
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Student = new Schema({
	name:{type:String},
	address:{type:String},
	pan:{type:String},
	aadhar:{type:String}
});

module.exports = mongoose.model('Student', Student)