const { MongoClient } = require('mongodb');
const url = "mongodb://localhost:27017/";
MongoClient.connect(url)
.then(client => {
    const db = client.db("mashupdb");
    const collection = db.collection("leads");
    const leadsData = [
        { name: "Arjun", city: "Kannur" },
        { name: "Meera", city: "Kochi" },
        { name: "Lakshmi", city: "Calicut" }
    ];
    return collection.insertMany(leadsData)
    .then(() => {
        console.log("Leads inserted successfully!");

        return collection.findOne(
            { city: "Kochi" },
            { projection: { _id: 0, name: 1, city: 1 } }
        );
    })
    .then(result => {
        console.log("First lead from Kochi:");
        console.log(result);
    });

})
.catch(err => console.log(err));