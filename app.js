var http = require('http');
var fs = require('fs');
var server = http.createServer(function (request, response){
	console.log('client request URL:', request.url);
	if(request.url === "/" || request.url === "/cars/new" || request.url === "/?"){
		fs.readFile("views/new.html", 'utf8', function(errors, contents){
			response.writeHead(200, {'Content-Type': 'text/html'});
			response.write(contents);
			response.end();
		})
	}
	else if(request.url === "/cars"){
		fs.readFile("views/cars.html", 'utf8', function(errors, contents){
			response.writeHead(200, {'Content-Type': 'text/html'});
			response.write(contents);
			response.end();
		})
	}
	else if(request.url === "/cats"){
		fs.readFile("views/cats.html", 'utf8', function(errors, contents){
			response.writeHead(200, {'Content-Type': 'text/html'});
			response.write(contents);
			response.end();
		})
	}
	else if(request.url === "/images/yugo.jpg"){
		fs.readFile("images/yugo.jpg", function(errors, contents){
			response.writeHead(200, {'Content-Type': 'image/jpg'});
			response.write(contents);
			response.end();
		})
	}
	else if(request.url === "/images/db6.jpg"){
		fs.readFile("images/db6.jpg", function(errors, contents){
			response.writeHead(200, {'Content-Type': 'image/jpg'});
			response.write(contents);
			response.end();
		})
	}
	else if(request.url === "/images/3series.jpg"){
		fs.readFile("images/3series.jpg", function(errors, contents){
			response.writeHead(200, {'Content-Type': 'image/jpg'});
			response.write(contents);
			response.end();
		})
	}
	else if(request.url === "/images/cats1.jpg"){
		fs.readFile("images/cats1.jpg", function(errors, contents){
			response.writeHead(200, {'Content-Type': 'image/jpg'});
			response.write(contents);
			response.end();
		})
	}
	else if(request.url === "/images/cats2.jpg"){
		fs.readFile("images/cats2.jpg", function(errors, contents){
			response.writeHead(200, {'Content-Type': 'image/jpg'});
			response.write(contents);
			response.end();
		})
	}
		else if(request.url === "/stylesheets/style.css"){
		fs.readFile("stylesheets/style.css", function(errors, contents){
			response.writeHead(200, {'Content-Type': 'text/css'});
			response.write(contents);
			response.end();
		})
	}
	else{
		response.writeHead(404);
		response.end("404 NOT FOUND");
	}
})
var PORT = 6789;
server.listen(PORT);
console.log("Listening on localhost port " + PORT);