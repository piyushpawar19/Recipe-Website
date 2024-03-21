//mongodb+srv://piyushpawar193:<password>@cluster0.grssxl6.mongodb.net/Recipes
// username:<piyushpawar193> password:<piyush4912>

const express = require('express');
const expresslayouts = require('express-ejs-layouts');
const fileUpload = require('express-fileupload');
const session = require('express-session');
const cookieParser= require('cookie-parser');
// const flash = require('express-flash');

const app = express();

const port = 5000;
app.use(express.urlencoded({extended: true}));
app.use(express.static('public'));
app.use(expresslayouts);

app.use(cookieParser('CookingBlogSession'));
app.use(session({
    secret: 'cookingblogsecretsession',
    saveUninitialized: true,
    resave:true
}));
// app.use(flash());
app.use(fileUpload());

app.set('layout','./layouts/main');
app.set('view engine','ejs');


const routes = require('./server/routes/recipeRoutes.js');
app.use('/',routes);

app.listen(port, ()=>console.log(`listening on port ${port}`)); 

