const express = require('express');
const exphbs = require('express-handlebars');
const bodyParser = require('body-parser');
const session = require('express-session');
const flash = require('express-flash');



const model = require("./models");
const models = model(process.env.MONGO_DB_URL ||"mongodb://localhost:27017/plumbersData");


const plumbersRoutes = require('./plumbers');
const plumberRoute = plumbersRoutes(model);

var app = express();

app.use(express.static('public'));
//parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({
    extended: false
}));
// parse application/json
app.use(bodyParser.json());

//app.set('trust proxy', 1) // trust first proxy
app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: true }
}))

app.use(flash());



app.engine('hbs', exphbs({
    defaultLayout: 'main',
    extname: 'hbs'
}));

app.set('view engine', 'hbs');

// app.get("/",function(req, res){
//   res.redirect('/api/plumbers')
//  })

app.get("/api/plumbers", plumberRoute.findPlumbers)
app.post("/api/plumbers", plumberRoute.plumbersFun )
// app.post("/api/plumbers/slot/:slot/day/:day", )
// app.get("/api/plumbers/:id/bookings", )

//starting the sarver
var server = app.listen(process.env.PORT || 3001, function(){

    var host = server.address().address;
    var port = server.address().port;

    console.log('Example app listening at http://%s:%s', host, port);

});
