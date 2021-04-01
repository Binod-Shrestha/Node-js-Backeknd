const express = require('express');
const router = express.Router();
const contactController = require('../../controllers/contact.controller');

//Retrieve all the contacts
router.get('/', contactController.getAllContactList);

//Create Contact

module.exports = router;
