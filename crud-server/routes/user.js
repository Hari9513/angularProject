'use strict';
const express = require('express');
const { userSchema } = require('../models');

const router = express.Router();

router.route('/user')
.post((req, res) => {
	const userData = new userSchema(req.body);

	userData.save()
	.then(data => {
		res.json(data);
	})
	.catch(error => {
		res.json(error);
	})
})

.get((req, res) => {
	userSchema.find({})
	.then(data => {
		res.json(data);
	})
	.catch(error => {
		res.json(error);
	})
})

.put((req, res) => {
	console.log(req.body);
	userSchema.findOneAndUpdate({"_id": req.body._id}, { $set : req.body}, {new : true})
	.then(data => {
		res.json(data);
	})
	.catch(error => {
		res.json(error);
	})
})
router.route('/user/delete')
.post((req, res) => {
	userSchema.findOneAndRemove({"email": req.body.email})
	.then(data => {
		res.json(data);
	})
	.catch(error => {
		res.json(error);
	})
})

module.exports = router;