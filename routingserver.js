
/*const express= require('express')
const app =express();
 const path =require('path')

const router= require('./routes/root')
const cors = require('cors')
const corsOptions=require('./config/coresOptions')
const {logger} =require('./middleware/logEevent')
const errorHandler =require('./middleware/errorHandler')


const PORT = process.env.PORT||3500;
//custom middlewarew logger nees next propites too
//app.use(logger)
// Cross Origin Resource Sharing

app.use(cors(corsOptions));


//buildin middlwewarew to handel unlencode data

app.use(express.urlencoded({extended:false}))
app.use(express.json())
app.use('/', express.static(path.join(__dirname, '/public')));
app.use('/',require('./routes/root'))
app.use('/employees',require('./routes/api/employees'))
  
app.all('*', (req, res) => {
    res.status(404);
    if (req.accepts('html')) {
        res.sendFile(path.join(__dirname, 'views', '404.html'));
    } else if (req.accepts('json')) {
        res.json({ "error": "404 Not Found" });
    } else {
        res.type('txt').send("404 Not Found");
    }
});




app.use(errorHandler)
app.listen(PORT,()=>console.log(`server running on port ${PORT}`))
*/
const express = require('express');
const app = express();
const path = require('path');
const cors = require('cors');
const corsOptions = require('./config/coresOptions');
const { logger } = require('./middleware/logEevent')
const errorHandler = require('./middleware/errorHandler');
const PORT = process.env.PORT || 3500;

// custom middleware logger
app.use(logger);

// Cross Origin Resource Sharing
app.use(cors(corsOptions));

// built-in middleware to handle urlencoded form data
app.use(express.urlencoded({ extended: false }));

// built-in middleware for json 
app.use(express.json());

//serve static files
app.use('/', express.static(path.join(__dirname, '/public')));

// routes
app.use('/', require('./routes/root'));
app.use('/employees', require('./routes/api/employees'));

app.all('*', (req, res) => {
    res.status(404);
    if (req.accepts('html')) {
        res.sendFile(path.join(__dirname, 'views', '404.html'));
    } else if (req.accepts('json')) {
        res.json({ "error": "404 Not Found" });
    } else {
        res.type('txt').send("404 Not Found");
    }
});

app.use(errorHandler);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));