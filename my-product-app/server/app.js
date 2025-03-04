const express = require("express");
const app = express();

const PORT = 3002;

const users = [];

app.get("/users", (req, res) => {
    res.status(200).json(users)
});

app.get("/user/:id", (req, res) => {
    const uid = req.params;
    const index = users.findIndex(el => el.id == uid);
    if (index == -1) {
        res.status(400).json({ status: "Fail", message: "User not found" });
    } else {
        res.status(200).json({ status: "success", message: "User found", data: users[index] });
    }
});

app.post("/createuser", (req, res) => {
    const { name, email } = req.body;
    const newId = Date.now();
    if (!name || !email) {
        res.status(400).json({ status: "Fail", message: "Incomplete details" });
    }
    users.push({
        id: newId,
        name: name,
        email: email,
    })
    res.status(201).json({ status: "Success", message: "User entered successfully" });
});

app.patch("/edituser/:id", () => {
    const uid = req.params.id;
    let { name, email } = req.body;
    if (!name || !email) {
        res.status(400).json({ status: "Fail", message: "Incomplete details" });
    }
    let index = users.findIndex((el) => {
        el.id === uid;
    });
    if (index == -1) {
        res.status(401).json({ status: "Fail", message: "Index not found" });
    }
    users[index].name = name;    
    users[index].email = email;    
    res.status(201).json({ status: "Success", message: "User details edited successfully" });

});

app.delete("/deleteuser/:id", () => {

});

app.listen(PORT, () => {
    console.log(`Server is running on PORT ${PORT}`);
});