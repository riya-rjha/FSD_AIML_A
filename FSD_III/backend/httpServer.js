const http = require('http');
const fs = require('fs').promises;

const server = http.createServer(async (req, res) => {
    try {
        const data = await fs.readFile('path/to/your/file.txt', 'utf8');
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.write(data);
        res.end();
    } catch (err) {
        res.writeHead(500, { 'Content-Type': 'text/plain' });
        res.write('Internal Server Error');
        res.end();
    }
});

const PORT = 3000;
server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});