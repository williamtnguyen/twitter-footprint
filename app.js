const express = require('express');
          app = express();
   bodyParser = require('body-parser');

// Setting default view engine
app.set('view engine', 'ejs');
// Allows us to get input data from form
app.use(bodyParser.urlencoded({extended: true}));
// Serve the public directory (CSS and JS)
app.use(express.static(__dirname + '/public'));

var userName;

/* ROUTES */

// Landing Page 
app.get('/', (req, res) => {
	res.render('landing');
});

// Emissions GET route
app.get('/emissions', (req, res) => {
    console.log(userName);
    // res.send('emissions', {userName: userName});
});

// Emissions POST route: sends data from landing page input to the Emissions GET route
app.post('/emissions', (req, res) => {
    userName = req.body.twitterUsername;
    // res.redirect('/emissions');
    console.log(req.body.twitterUsername);
    res.redirect('/emissions');
});


// Start the server with 'node app.js' in command line
const PORT = 3000;
app.listen(PORT, () => {
    console.log('Server has started on port ' + PORT);
});