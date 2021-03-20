const express = require('express');
const router = express.Router();

router.get('/', (req,res,next) =>{
    res.status(200).json({
        message: 'Handling GET requests to /contacts'
    });
});

router.post('/', (req, res, next) =>{
    res.status(200).json({
        message: 'Handling POST requests to /contacts'
    });
});

router.get('/:contactId', (req, res, next) =>{
    const id = req.params.contactId;
    if(id === 'special'){
        res.status(200).json({
            message: 'You discovered the special ID',
            id: id
        });
    } else {
        res.status(200).json({
            message: 'You passed an ID'
        })
    }
});

router.patch('/:contactId', (req, res, next) =>{
         res.status(200).json({
            message: 'Updated contact!'
        });
});

//DELETE
router.patch('/:contactId', (req, res, next) =>{
    res.status(200).json({
        message: 'Deleted contact!'
    });
});


module.exports = router;
