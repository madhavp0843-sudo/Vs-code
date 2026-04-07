const { MongoClient } = require('mongodb');
MongoClient.connect("mongodb://localhost:27017/")
.then(client => {
    const db = client.db("mashupdb");
    const collection = db.collection("leads");
    return collection.insertMany([
        { name: "John", city: "Trivandrum" },
        { name: "Rahul", city: "Calicut" },
        { name: "Dean", city: "Trivandrum" },
        { name: "Deepak", city: "Kollam" },
        { name: "Ashwin", city: "Calicut" },
        { name: "Rolly", city: "Alleppy" },
        { name: "Nikhil", city: "Kottayam" },
        { name: "Raymond", city: "Trivandrum" }
    ])
    .then(() => {
        console.log("Inserted!");

    
        return collection.find(
            { city: "Calicut" },
            { projection: { _id: 0, name: 1 } }
        ).toArray();
    })
    .then(data => {
        console.log("Calicut Leads:");
        data.forEach(d => console.log(d.name));
    });

})
.catch(err => console.log(err));