const { error } = require("node:console");
const fs = require("node:fs");
try {
    const data = fs.readFileSync("../backend/dummy.text");
    if (data) {
        console.log("File data: " + data);
    } else throw error;
}
catch (err) {
    console.log(err);
}
function writeFile() {
    const data = "I am learning Web Dev + DSA with the OG Coder Tanisha Sain";
    fs.writeFile("../backend/dummy.text", data, (err) => {
        if(err) return "err";
        console.log("Data: " + data);
    });    
}

writeFile();