import http from 'http';

//Create our server
const server = http.createServer((req,res) =>{
    //console.log(req);

    //Show result in the browser inspect


    //Shorthand for status (code, message & header)
    //res.setHeader("Content-Type","text/html");
    //res.statusCode = 404;
    //res.statusCode = "Bad";
    // res.writeHead(202, "Good",{"Content-Type": "text/html"});
    res.write("<h1>Hello hustler from nodejs server</h1>");
   
});

//Listening on port 8000
server.listen(8000, ()=>console.log("Server UP!"));
