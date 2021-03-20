const  express = require('express');
const app = express();
const contactRoutes = require('./api/routes/contacts');
const detailRoutes = require('./api/routes/details');
const morgan = require('morgan');


//Routes
app.use(morgan('dev'));
app.use('/contacts', contactRoutes);
app.use('/details', detailRoutes);

//handling errors
app.use((req, res, next) => {
    const error = new Error('Not Found');
    error.status = 404;
    next(error);

});

app.use((error, req, res, next) =>{
    res.status(error.status || 500);
    res.json({
        error:{
            message: error.message
        }
    })
});

module.exports = app;
