const  express = require('express');
const app = express();
const contactRoutes = require('./api/routes/contacts');
const morgan = require('morgan');
const bodyParser = require('body-parser');


//Routes
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

// create employee routes

app.use('/', contactRoutes);

//handling errors
app.use((req, res, next) => {
    const error = new Error('Not Found');
    error.status = 404;
    next();

});

app.use((error, req, res, next) =>{
    res.status(error.statusCode || 500);
    res.json({
        error:{
            message: error.message
        }
    })
});

module.exports = app;
