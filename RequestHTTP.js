// https://jsonplaceholder.typicode.com/users 
//  ou /todos ou /posts

var http = require('http');
var options = {
   host:'jsonplaceholder.typicode.com',
   port: 80,
   path: '/users',
   method: 'GET'
};

console.log("Partiu fazer uma requisição...");
var req = http.request(options, function(res) {
	console.log(res.statusCode);
	res.on('data', function(data){
		console.log(data.toString());
	})
});

req.end();