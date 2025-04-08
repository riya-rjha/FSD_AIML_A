const {Mongoclient} = require("mongodb");
const Mongo_URL = "mongodb://localhost:27017";
Mongoclient.connect(Mongo_URL)
.then(client => {
    console.log("MongoDB connected");
    const db = client.db(db_name);
    const usercol = db.collection("users");
    const res = usercol.find().toArray();
    console.log("Users: ", res);
})
.catch(err => {
    console.log("DB Error", err.message);
})