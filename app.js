const  express = require('express');
const app = express();
const contactRoutes = require('./api/routes/contacts');
const detailRoutes = require('./api/routes/details');
const morgan = require('morgan');
const bodyParser = require('body-parser');


//Routes
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

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
