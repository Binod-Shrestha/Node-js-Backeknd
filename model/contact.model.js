'use strict'
const connection = require('../config/db.config')
// create contact object
var Contact = (contact)=> {
    this.street = contact.street;
    this.city = contact.city;
    this.province = contact.province;
    this.postal_code = contact.postal_code;
}

Contact.getAllContact = (result) => {
    connection.query('SELECT * FROM CONTACTS', (err, res) =>{
        if(err)
        {
            console.log("Error while fetching contacts", err);
            result(null, err);
        } else{
            console.log("Contacts fetched successfully");
            result(null, res);
        }
    })
}

module.exports = Contact;
