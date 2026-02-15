const http=require('http');
const fs=require('fs');
let path=require('path');
const PORT=8080;
const app=http.createServer((req,res)=>{
    const routes={
        '/home':'home.html',
        '/about':'about.html',
        '/contact':'contact.html'
    }
    if (req.url === "/style.css") {
        fs.readFile("style.css", (err, data) => {
            res.writeHead(200, { "Content-Type": "text/css" });
            res.end(data);
        });
        return;
    }
    const file=routes[req.url]
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
    }else{
        res.writeHead(404,{"content-type": 'text/html'})
                res.end(`<h1>404 page not found</h1>`)
    }
})
app.listen(PORT,()=>{
    console.log(`http://localhost:${PORT}`)
})

