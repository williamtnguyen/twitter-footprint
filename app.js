const express = require('express');
          app = express();
   bodyParser = require('body-parser');

// Setting default view engine
app.set('view engine', 'ejs');
// Allows us to get input from form
app.use(bodyParser.urlencoded({extended: true}));
// Serve the public directory (CSS and JS)
app.use(express.static(__dirname + '/public'));


/* ROUTES */

// Landing page route
app.get('/', (req, res) => {
    res.send('welcome to landing page');
});


// Start the server with 'node app.js' in command line
const PORT = 3000;
app.listen(PORT, () => {
    console.log('Server has started on port ' + PORT);
});