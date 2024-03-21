const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://piyushpawar193:piyush4912@cluster0.grssxl6.mongodb.net/Recipes?retryWrites=true');

const db = mongoose.connection;
db.on('error',console.error.bind(console,'connection error:'));
db.once('open', function(){
    console.log('connected');
});

//models

require('./category');
require('./recipe');
