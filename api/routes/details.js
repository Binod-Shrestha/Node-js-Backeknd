const express = require('express');
const router = express.Router();

router.get('/', (req,res,next) =>{
    res.status(200).json({
        message: 'Details were fetched'
    });
});

router.post('/', (req, res, next) =>{
    res.status(200).json({
        message: 'Details created'
    });
});

router.delete('/:detailId', (req, res, next) =>{
    res.status(200).json({
        message: 'Detail details',
        detailId: req.params.deleteId
    });
});

router.get('/detailId',(req, res, next) =>{
    res.status(200).json({
        message: 'Individual detail',
        detailId: req.params.detailId
    });
});
module.exports = router;
