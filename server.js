var express = require('express'),
    stylus = require('stylus'),
    bodyParser = require('body-parser'),
    mongoose = require('mongoose');

var env = process.env.NODE_ENV || 'development';
var port = process.env.PORT || 3030;

var app = express();

app.set('view engine', 'jade');
app.set('views', __dirname + '/server/views');
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());
app.use(stylus.middleware(
    {
        src: __dirname + '/public',
        compile: function (str, path) {
            return stylus(str).set('filename', path);
        }
    }
));

app.use(express.static(__dirname + '/public'));

if (env == 'development') {
    mongoose.connect('mongodb://localhost/webflow');
} else {
    mongoose.connect('mongodb://root:Hammer728746@ds039550.mongolab.com:39550/webflow');
}
var db = mongoose.connection;

db.once('open', function (err) {
    if (err) {
        console.log('Database could not be opened: ' + err);
        return;
    }
    console.log("Database up and running...");
});
db.on('error', function (err) {
    console.log('Database error: ' + err);
});

app.get('/partials/:partialArea/:partialName', function (req, res) {
    res.render('partials/'+req.params.partialArea + '/' + req.params.partialName)
});

app.get('*', function (req, res) {
    res.render('index');
});

app.listen(port);
console.log("Server running on port: " + port);