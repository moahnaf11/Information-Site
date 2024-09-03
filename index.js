const https = require('node:https');
const fs = require('node:fs/promises');

https.createServer(async (req, res) => {
    try {
        let filePath = '';
        let statusCode = 200;
        if (req.url === "/") {
            filePath = 'index.html';
        } else if (req.url === "/about") {
            filePath = 'about.html';
        } else if (req.url === "/contact-me") {
            filePath = 'contact-me.html';
        } else {
            filePath = '404.html';
            statusCode = 404;
        }

        const data = await fs.readFile(filePath, { encoding: "utf-8" });

        
        if (req.url === "/" || req.url === "/about" || req.url === "/contact-me") {
            res.writeHead(statusCode, { 'Content-Type': 'text/html' });
        }
        res.end(data);

    } catch (error) {
        console.log(error, "file could not be read");
    }
})
.listen(8080, () => console.log("listening on 8080"));
