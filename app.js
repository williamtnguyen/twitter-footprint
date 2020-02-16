const express = require('express');
          app = express();
   bodyParser = require('body-parser');

// Setting default view engine
app.set('view engine', 'ejs');
// Allows us to get input data from form
app.use(bodyParser.urlencoded({extended: true}));
// Serve the public directory (CSS and JS)
app.use(express.static(__dirname + '/public'));

//~~~~~~~~~//
/* ROUTES */
//~~~~~~~~//

var userName; // global var to be passed to 'emissions' GET route

// Landing Page 
app.get('/', (req, res) => {
	res.render('landing');
});

// Emissions GET route
app.get('/emissions', (req, res) => {
    // console.log(userName);
    // res.send('emissions', {userName: userName});
    var spawn = require('child_process').spawn,
    py = spawn('python3', ['compute_input.py']),
    data = userName,
    dataString = 'null_value';
    dataName = 'null_value';

    py.stdout.on('data' , function(data) {
        var arr = data.toString().split(" ");
        dataString = data.toString().split(" ")[0];
        dataName = '';
        var i;
        for (i = 1; i < arr.length - 1; i++) {
            dataName += arr[i] + " ";
        }
        dataDate = data.toString().split(" ")[arr.length - 1];
        app.locals.cNum = parseInt(dataString, 10);
    });
    py.stdout.on('end', function() {
        app.locals.cNum = parseInt(dataString, 10);
        res.render("emissions", {numTweets : dataString, urName : dataName, urDate : dataDate});
    });
    py.stdin.write(JSON.stringify(data));
    py.stdin.end();
});

// Emissions POST route: sends data from landing page input to the Emissions GET route
app.post('/emissions', (req, res) => {
    userName = req.body.twitterUsername;
    // res.redirect('/emissions');
    // console.log(req.body.twitterUsername);
    res.redirect('/emissions');
});


// Start the server with 'node app.js' in command line
const PORT = 3000;
app.listen(PORT, () => {
    console.log('Server has started on port ' + PORT);
});