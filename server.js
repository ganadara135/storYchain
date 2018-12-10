var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

var server = app.listen(80, function(){
    console.log("Express server has started on port 80")
})

app.use(express.static('public'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded());

var router = require('./router/main')(app);


// <img class="bannerlogo" src="./img/bannerlogo.png">
//<h2 class="font-family-123rf">Philosophy
//<br>

//<span style="font-size: 30px;"> 이야기 속에서 살아가는 우리</span>
//</h2>