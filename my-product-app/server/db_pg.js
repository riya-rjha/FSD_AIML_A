const { Client } = require("pg");

const client = new Client({
    host: "localhost",
    user: 'postgres',
    port: 5432,
    database: "myFreeAppDB",
    password: "rrj",
});

client.connect()
    .then(() => {
        console.log("Postgre SQL Connected");
    })
    .catch((err) => {
        console.log("DB Error ", err.message)
    })

// Put date
client.query("Select now()", (err, res) => {
    if (err) {
        console.log("Query Error", err.message);
    } else {
        console.log("Data: ", res.rows[0]);
    }
});

// Insert into users
client.query("insert into users(name, email, age) values('Tanabh', 'tanabh@gmail.com', 20)", (err, res) => {
    if (err) {
        console.log("Query Error", err.message);
    } else {
        console.log("Data: ", res.rows);
    }
});

// See table
client.query("select * from users", (err, res) => {
    if (err) {
        console.log("Query Error", err.message);
    } else {
        console.log("Data: ", res.rows);
    }
});

// Update table
client.query("Update users set age=100 where name='Nigisha'", (err, res) => {
    if (err) {
        console.log("Query from error", err.message);
    } else {
        console.log("Data: ", res.rows);
    }
})

// Delete from table
client.query("Delete from users where name='Tanisha'", (err, res) => {
    if (err) console.log("Error: ", err.message);
    else console.log("Data deleted successfully");
})

// See table
client.query("select * from users", (err, res) => {
    if (err) {
        console.log("Query Error", err.message);
    } else {
        console.log("Data: ", res.rows);
    }
});