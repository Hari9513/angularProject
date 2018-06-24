'use strict';
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Student = new Schema({
	name:{type:String},
	age:{type:Number},
	phone:{type:Number},
	email:{type:String, unique: true}
});

module.exports = mongoose.model('Student', Student)