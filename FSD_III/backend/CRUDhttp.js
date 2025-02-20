const http = require("http");
const port = 3003;
const data = [
    {
        id: 1,
        name: "Harshita",
        email: "harshita@gmail.com"
    }
];

const server = http.createServer((req, res) => {
    const url = req.url;
    if (url == "/users" && req.method == "GET") {
        res.writeHead(200, { "Content-Type": "application/json" });
        res.write(JSON.stringify(data));
    }
    else if (url == "/users" && req.method == "POST") {
        let body = "";
        req.on("data", (chunk) => {
            body += chunk;
        });
        console.log(body);
        req.on("end", () => {
            const parseData = JSON.parse(body); // parse converts JSON -> Object
            const { name, email } = parseData; // Destructuring
            const newID = data.length > 0 ? (data[data.length - 1].id + 1) : 1001;
            let newEntry = {
                id: newID, name, email
            }
            data.push(newEntry);
        });
        res.writeHead(201, { "Content-Type": "application/json" });
        res.write(JSON.stringify({ status: "success", message: "User created successfully!" }));
        res.end();
        console.log(data);
    }
    else {
        res.writeHead(404, { "Content-Type": "application/json" });
        res.write(JSON.stringify({ status: "fail", message: "Page not found" }));
    }
    res.end();
});

server.listen(port, (err) => {
    try {
        if (err) throw err;
        console.log(`Server is running on port: ${port}`);
    } catch (error) {
        console.log("Server error: " + err.message);
    }
})