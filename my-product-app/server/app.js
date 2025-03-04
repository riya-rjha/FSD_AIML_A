const express = require("express");
const app = express();

const fs = require("fs/promises");

app.use(express.json());

const PORT = 3002;

const users = [];

// Using middleware

// Application Level Middleware

const middleware = (req, res, next) => {
    const age = req.query.age;
    if (!age) {
        res.status(400).send("Enter age in query");
    } else {
        if (age < 18) {
            res.status(401).send("User not authorized");
        } else {
            next();
        }
    }
};

// app.use(middleware);

// Route Level Middleware
// Applied in POST request

// Built in middleware 
// Eg. express.json()
// URL_encoded
// static

// Third party middleware

app.get("/users", async (_, res) => {
    try {
        const data = await fs.readFile("./users.json", "utf-8");
        res.status(200).json(JSON.parse(data)); // JSON.parse to get object notation
    } catch (error) {
        res.status(400).send("File not found");
    }
});

app.get("/user/:id", (req, res) => {
    const uid = req.params.id;
    const index = users.findIndex(el => el.id == uid);
    if (index == -1) {
        res.status(400).json({ status: "Fail", message: "User not found" });
    } else {
        res.status(200).json({ status: "success", message: "User found", data: users[index] });
    }
});

app.post("/createuser", middleware, async (req, res) => { // Router level middleware
    const { name, email } = req.body;
    const newId = Date.now();
    if (!name || !email) {
        res.status(400).json({ status: "Fail", message: "Incomplete details" });
    }

    const data = await fs.readFile("./users.json", "utf-8");
    users.push(JSON.parse(data));
    users.push({
        id: newId,
        name: name,
        email: email,
    });
    
    // appendFile -> Leads to error in users.json as does not add comma after every file entry

    await fs.writeFile("./users.json", JSON.stringify(users)); // JSON.stringify to convert to string and then write
    res.status(201).json({ status: "Success", message: "User entered successfully" });
});

app.patch("/edituser/:id", (req, res) => {
    const uid = req.params.id;
    let { name, email } = req.body;
    if (!name || !email) {
        res.status(400).json({ status: "Fail", message: "Incomplete details" });
    }
    let index = users.findIndex(e => e.id == uid);
    console.log(index)
    if (index == -1) {
        res.status(401).json({ status: "Fail", message: "Index not found" });
    }
    users[index].name = name;
    users[index].email = email;
    res.status(201).json({ status: "Success", message: "User details edited successfully" });

});

app.delete("/deleteuser/:id", (req, res) => {
    const id = req.params.id;
    const index = users.findIndex((el) => {
        return el.id === id
    });
    if (index == -1) {
        res.status(401).json({ status: "Fail", message: "Index not found" });
    }
    let deletedData = users.splice(index, 1);
    res.status(201).json({ status: "Success", message: "User deleted successfully", "Deleted Data": deletedData });
});

app.listen(PORT, () => {
    console.log(`Server is running on PORT ${PORT}`);
});