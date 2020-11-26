var app = require('express')();
var http = require('http').createServer(app);
var io = require('socket.io')(http);
var fs = require('fs')
const bodyParser = require('body-parser');
const process = require('process');

app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/recources/login.html');
})
app.get('/code.js', (req, res) => {
  res.sendFile(__dirname + '/recources/code.js');
})
app.post('/login', function (req, res, next) {
  console.log('Got body:', req.body);
  var jsonObject = eval(req.body);
  if(fs.existsSync(__dirname + '/users/' + jsonObject.name)){
    process.chdir(__dirname + '/users/' + jsonObject.name + '/personalInfo')
    if(fs.existsSync(__dirname + '/users/' + jsonObject.name + "/personalInfo/password/" + jsonObject.pass)){
      console.log(jsonObject.name + " logged in")
      res.sendFile(__dirname + "/recources/index.html")
    }
  }
  else{
    res.send("<script>alert('Login failed')</script>")
  }
  res.end()
})
io.on('connection', (socket) => {
  console.log('a user connected');
});

http.listen(3000,"192.168.1.156", () => {
  console.log('listening on *:3000');
});
