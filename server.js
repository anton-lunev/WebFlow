var express = require('express');
var env = process.env.NODE_ENV || 'development';
var app = express();
var config = require('./server/config/config')[env];

require('./server/config/express')(app, config); //подключаем express
require('./server/config/mongoose')(config);//БД
require('./server/config/routes')(app);//Роутинг

app.listen(config.port);//Запускаем сервер
console.log("Server running on port: " + config.port);