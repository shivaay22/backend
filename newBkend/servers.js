const http = require("http");

const server = http.createServer((req, res) => {
    // Normalize URL to avoid trailing slash issues
    const url = req.url.replace(/\/$/, "");

    if (url === '') {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end("Home");
    } else if (url === "/api/user") {
        const user = {
            name: "Shiva",
            age: 15,
            email: "Shiva@gmail.com"
        };
        const data = JSON.stringify(user);
        console.log(JSON.parse(data));

        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(data);
    } else if (url === '/login') {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end("Login Successfully");
    } else if (url === '/signup') {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end("SignUp Successfully");
    } else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end("Page not found");
    }
});

server.listen(8000, () => {
    console.log("Server listening at port 8000");
});
