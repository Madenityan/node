let things = require('./things.js');
let events = require('events');
let util = require('util');
let fs = require('fs');
let http = require('http');
let express = require('express');

let app = express();
app.set('view engine', 'ejs');

app.get('/', function(req, res) {
  res.sendFile(__dirname + '/index.html');
});

app.get('/about', function(req, res) {
  res.sendFile(__dirname + '/about.html');
});

app.get('/news/:id', function(req, res) {
  let obj = {title: 'Новость', id: 4};
  res.render('news',{newsId: req.params.id, newParam: 234, obj:obj});
});

app.listen(3000);


// Потоки, pipe
// let myReadShort  = fs.createReadStream(__dirname + '/article.txt');
// let myWriteShort  = fs.createWriteStream(__dirname + '/news.txt');
//
// myReadShort.on('data', function(chunk) {
//   console.log('New data get:\n' + chunk);
//   myWriteShort.write(chunk);
// });

// Server
// let server = http.createServer(function(req, res) {
//   console.log('URL: ' + req.url);
//   if (req.url === '/index' || req.url === '/') {
//     res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
//     fs.createReadStream(__dirname + '/index.html').pipe(res);
//   } else if (req.url === '/about') {
//     res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
//     fs.createReadStream(__dirname + '/about.html').pipe(res);
//   } else {
//     res.writeHead(404, {'Content-Type': 'text/html; charset=utf-8'});
//     fs.createReadStream(__dirname + '/404.html').pipe(res);
//   }
// });
//
// server.listen(3000, '127.0.0.1');
// console.log('порт 3000');

// function test() {
//   console.log('yoyo');
// }
// test();
//
// function call(func) {
//   func();
// }
//
// let testTwo = function () {
//   console.log('yoyo2');
// };
//
// call(testTwo);

//
// console.log(things.someValue);
// console.log(things.arrayCounter([1,2,4,6,88,30]));
// console.log(things.multiply(10, 11));
//
// let myEmit = new events.EventEmitter();
//
// myEmit.on('event', function (text) {
//   console.log(text);
// });
// myEmit.emit('event', 'On!');

// let Cars = function(model) {
//   this.model = model;
// };
//
// util.inherits(Cars, events.EventEmitter);
//
// let aveo = new Cars('AVEO');
// let audi = new Cars('AUDI');
// let bmw = new Cars('BMW');
//
// let cars = [aveo, audi, bmw];

// cars.forEach(function(car) {
//   car.on('speed', function(text) {
//     console.log(car.model + ' speed is - ' + text);
//
//   });
// });

// bmw.emit('speed', '254 km');

// fs.readFile('text.txt', 'utf-8', function(err, data) {
//   console.log(data);
// });

// fs.writeFile('some.txt', 'rrrrrr', function(err, data) {});
// console.log('test');

// Delete file and folder

// fs.unlink('./new/new.txt', function() {
//   fs.rmdir('new', function() {});
// });

// Async create folder and write code

// fs.mkdir('new', function() {
//   fs.writeFile('./new/new.txt', 'Up', function() {
//     console.log('emmm');
//   });
// });

