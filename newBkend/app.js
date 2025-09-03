// const http = require('http');
// const path = require("path");

// const fs = require("fs");

// const server = http.createServer((req,res) =>
// {
//     res.writeHead(200,{'content-type':'text/html'});
//     const dirName = path.join(__dirname,"index.html");
//     // const htmlContent = fs.readFileSync(__dirname+"/index.html");
//     const htmlContent = fs.readFileSync(dirName);

//     res.end(htmlContent);
// })

// server.listen(3000);

const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

// Route to serve index.html
app.get('/homePage', (req, res) => {
    const filePath = path.join(__dirname, 'index.html');
    res.sendFile(filePath);
});

// Start the server
app.listen(PORT, () => {
    console.log(`🚀 Server is running on http://localhost:${PORT}`);
});
