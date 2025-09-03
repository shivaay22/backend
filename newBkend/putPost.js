const http = require('http');

const server = http.createServer((req,res) =>
{
    if(req.method === 'POST' && req.url === "/submit")
    {
        let body = "";
        req.on('data', (chunk) =>
        {
            body += chunk.toString(); // convert buffer to string
        })

        req.on('end', () =>
        {
            console.log(JSON.parse(body));
            res.writeHead(200,{'content-type':'application/json'});
            res.end(JSON.stringify({success:true,message:"Account Created Successfully,"}))
        })
    }
    else
    {
        res.writeHead(404,{"content-type": "application/json"});
        res.end(JSON.stringify({success:false, message: "Not Found"}));
    }
});

server.listen(8000, () =>
{
    console.log("Server listen at port 8000");
})