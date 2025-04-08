const {MongoClient} = require("mongodb");
const Mongo_URL = "mongodb+srv://Tanisha:root@cluster0.qfhhp.mongodb.net/FSD-CSE-AIML?retryWrites=true&w=majority&appName=Cluster0";

// MongoClient.connect(Mongo_URL)
// .then(client => {
//     console.log("MONGODB Connected");
// })
// .catch(err => {
//     console.log("DB Error", err.message)
// })

(async () => {
    try {
        const res = await MongoClient.connect(Mongo_URL);
        console.log("DB Connected");
    } catch (error) {
        console.log("DB error", error.message);
    }
})();