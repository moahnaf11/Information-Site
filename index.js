const http = require('node:http');
const fs = require('node:fs/promises');
const url = require('node:url');
let port = 2000;

http.createServer(async (req, res) => {
    try {
        const urlObject = url.parse(req.url, true);
        const fileName = "." + (urlObject.pathname === "/" ? '/index.html' : urlObject.pathname + '.html');
        const data = await fs.readFile(fileName, {encoding: "utf-8"});  
        res.writeHead(200, {'Content-Type': "text/html"});
        res.write(data);
        res.end();
        
    }   catch(err) {
        res.writeHead(404, {'Content-Type': "text/html"});
        const data = await fs.readFile("./404.html", {encoding: "utf-8"});  
        res.write(data);
        res.end();
    }
})
.listen(port, () => console.log("listening on " + port));
