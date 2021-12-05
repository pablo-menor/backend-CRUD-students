const express = require('express');
const cors = require('cors');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

//Connecting to database
mongoose.connect('mongodb+srv://admin:pobluxadmin@cluster0.v1qd7.mongodb.net/vue-students?retryWrites=true&w=majority')
    .then(db => console.log('Connected to database'));

//Importing routes
const homeRoutes = require('./routes/home')

//Settings
app.set('port', process.env.PORT || 3000)

//Middlewares
app.use(cors({origin: 'http://localhost:8080'}));
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.json());
app.use('/', homeRoutes);




//Starting server
app.listen(app.get('port'), ()=>{
    console.log('Server ON!')
});