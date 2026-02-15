// Import built-in http module to create server
const http=require('http');
// Import file system module to read HTML and CSS files
const fs=require('fs');
// creating a port to run the server on specific port
const PORT=8080;

// creating server as name of app
const app=http.createServer((req,res)=>{
    //create an  Object that maps routes to their respective HTML files
    const routes={
        '/home':'home.html',
        '/about':'about.html',
        '/contact':'contact.html'
    }
    // ---------- CSS FILE HANDLING ----------
    if (req.url === "/style.css") {
        fs.readFile("style.css", (err, data) => {
            res.writeHead(200, { "Content-Type": "text/css" });
            res.end(data);
        });
        return;
    }
    // ---------- ROUTE HANDLING ----------
    // Get file name corresponding to requested route   
    const file=routes[req.url]
     // If route exists in routes object
    if(file){
        fs.readFile(file,(err,data)=>{
            if(err){
                res.writeHead(500,{"content-type":"text/plain"})
                res.end()
            }else{
                res.writeHead(200,{"content-type": 'text/html'})
                res.end(data)
            }
        })
        
    }// ---------- 404 ERROR HANDLING ----------
        // If route does not exist
    else{
        res.writeHead(404,{"content-type": 'text/html'})
                res.end(`<h1>404 page not found</h1>`)
    }
})
//  Start server and listen on specified port
app.listen(PORT,()=>{
    console.log(`http://localhost:${PORT}`)
})

