// server.js
const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = 5000;

http.createServer((req, res) => {
    if (req.url === '/') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(`
      <html>
        <body>
          <h2>Download Image</h2>
           <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAE7Ir2I6OTwTlBt3F5CxIOZduRvxJcnzkdgJh49DfllAOnQ1B44iFnoV89OfBTd_Lv3Xx4qUHgudDLQnaxa09kQy_QjF3ICQbK-YECJ8Rfg" alt="Preview" width="300"/>
           <br><br>
          <a href="/download"><button>Click to Download</button></a>
        </body>
      </html>
    `);
    } else if (req.url === '/download') {
        const filePath = path.join(__dirname, 'images.webp');

        res.writeHead(200, {
            'Content-Type': 'application/octet-stream',
            'Content-Disposition': 'attachment; filename="images.webp"'
        });``

        fs.createReadStream(filePath)
            .on('error', () => {
                res.writeHead(500);
                res.end('File error');
            })
            .pipe(res);
    } else {
        res.writeHead(404);
        res.end('Not found');
    }
}).listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
