'use strict'
const ContactModel = require('../model/contact.model');

// get all the contact list

exports.getAllContactList = (req, res) => {
    ContactModel.getAllContact((err, contact) =>{
        console.log('controller')

        if(err){
            res.send(err);
            console.log('Error while fetching contacts:', err);

        } else{
            console.log('Contacts fetched from db:', contact);
            res.send(contact);
        }
    })
}
