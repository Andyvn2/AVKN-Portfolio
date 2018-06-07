var http = require('http')
var fs = require('fs')



// app.use(express.static(__dirname + "/static"));
// app.set('views', __dirname + '/views')


// app.set('view engine', 'html')
// app.engine('html', require('ejs').renderfile);

// function home(request, response){
// 	if(request.url === "/"){
// 		fs.readFile('views/index.html', 'utf8', function (errors, contents){
//             response.writeHead(200, {'Content-Type': 'text/html'});
//             response.write(contents); 
//             response.end();
//         });
// 	}
// }

var express = require('express');
var app = express();

// set the port of our application
// process.env.PORT lets the port be set by Heroku
var port = process.env.PORT || 8080;

// set the view engine to ejs
app.set('view engine', 'ejs');

// make express look in the public directory for assets (css/js/img)
app.use(express.static(__dirname + '/static'));

// set the home page route
app.get('/', function(request, response) {
	console.log("index page")
	// ejs render automatically looks in the views folder
	response.render('index');
});

app.listen(port, function() {
	console.log('Our app is running on http://localhost:' + port);
});

// var server = http.createServer(function (request, response){
//     // see what URL the clients are requesting:
//     console.log('client request URL: ', request.url);
//     // this is how we do routing:
//     if(request.url === '/') {
//         fs.readFile('views/index.html', 'utf8', function (errors, contents){
//             response.writeHead(200, {'Content-Type': 'text/html'});  // send data about response
//             response.write(contents);  //  send response body
//             response.end(); // finished!
//         });
//     }
//     else if('static/images/header.jpg'){
//     	fs.readFile('static/images/header.jpg', 'utf8', function (errors, contents){
//             if(contents){
//            	 response.writeHead(400, {'Content-Type': 'image/jpg'});  // send data about response
//            	 response.write(contents);  //  send response body
//            	 response.end(); // finished!
//            	 console.log('loading image')
//         }	
//             else if(errors){
//             	console.log(errors)
//             }
//         });
    	
//     }
//     else if('/static/css/creative.css'){
//     	fs.readFile('static/images/header.jpg', 'utf8', function (errors, contents){
//             if(contents){
//            	 response.writeHead(400, {'Content-Type': 'image/jpg'});  // send data about response
//            	 response.write(contents);  //  send response body
//            	 response.end(); // finished!
//            	 console.log('loading css1')
//         }	
//             else if(errors){
//             	console.log(errors)
//             }
//         });
    	
//     }
//     else if('static/css/creative.min.css'){
//     	fs.readFile('/static/css/creative.min.css', 'utf8', function (errors, contents){
//             if(contents){
//            	 response.writeHead(400, {'Content-Type': 'text/css'});  // send data about response
//            	 response.write(contents);  //  send response body
//            	 response.end(); // finished!
//            	 console.log('loading css2')
//         }	
//             else if(errors){
//             	console.log(errors)
//             	console.log('loading css3')
//             }
//         });
//         console.log('loading css4')
    	
//     }

//     // request didn't match anything:
//     else {
//         response.writeHead(404);
//         response.end('File not found!!!');
//     }
// }).listen(8000);
// t
// var server = http.createServer(function (request, response){
//     if(request.url === '/'){
//         fs.readFile('index.html', function (errors, contents){
//         	if(errors){
//             	response.writeHead(200, {'Content-Type': 'text/html'});  // send data about response
//             	response.write(contents);  //  send response body
//         }
//         	else{
//         		response.writeHead(200, {'Content-type': contentType})
//         		reponse.write(data);
//         	}
//         	response.end();
//     });

//  }
 	
 	// else if()

 	// else if(/^\/[a-zA-Z0-9\/]*.css$/.test(request.url.toString())){
		// sendFileContent(response, request.url.toString().substring(1), "text/css");
		// }
// })


// app.get('/', function(request, response){
// 	response.render('index')
// });

// app.listen(8000, function(){
// 	console.log("listening on port 8000")
// });

