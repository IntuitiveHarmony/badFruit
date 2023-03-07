// I need to have express and then invoke it as app per the documentation
const express = require('express');
const app = express();
// This is bringing in the exports from my badFruit controller
// const { badFruit } = require('./controllers');


const methodOverride = require('method-override');

// START OF MIDDLEWARE!!! 

// Make sure the middleware is finished before reading the routes. Otherwise, the routes won't have the information they need

// This is setting up that ejs will be used in this project and it will be set to a directory named views. The directory has to be named views.
app.set('view engine', 'ejs');

// I now also want to make sure I connect this to the CSS files and any DOM manipulation.
app.use(express.static('public'));

// Forms do not come in the way I would want them to normally. I need to make sure I parse the information so that it works alongside EJS. Parses the information in express into something that will be in the req.body
// You can also npm i body-parser and then invoke it and do the same
app.use(express.urlencoded({ extended: false }));

// This is method override. This allows us to go and override what a form normally wants to do. A form with this allows us with a ? and then an _method= to set it to either update or delete on the submission of the form
app.use(methodOverride('_method'));

// I want to make sure that I can have a generic home route first but I also want my badFruit controller to be read before any * or catch all 


// End of middleware and the start of my routes

// app.get is saying this is a route and I'm going to be making a GET request. So basically anyone visiting my site is making a GET request.
app.get('/', (req, res) => {
    res.render('home');
});


// app.use is saying I want to use all of the imports from my badFruit controller. If the first argument is saying the base URL is now http://localhost:4000/badFruit when that file is read
// app.use('', badFruitController);
// The version we're using is the ES6 destructuring but it would  be fine to use this traditional version as well.


// app.use('', badFruit);

app.get('/*', (req, res) => {
    res.render('404');
});

app.listen(4000, () => {
    console.log("Listening on port 4000");
});