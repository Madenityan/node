let things = require('./things.js');
let events = require('events');
let util = require('util');
let fs = require('fs');

let http = require('http');

let server = http.createServer(function(req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain; charset:utf-8'});
  res.end('Hi!');
});

server.listen(3000, '127.0.0.1');
console.log('порт 3000');

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

let myReadShort  = fs.createReadStream();