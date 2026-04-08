const { MongoClient } = require('mongodb');
const url = "mongodb://localhost:27017/";

MongoClient.connect(url)
MongoClient.connect(url)
  .then(client => {
    const db = client.db("mashupdb");
    const myobj = [
      { name: 'John', city: 'Trivandrum' },
      { name: 'Rahul', city: 'Calicut' },
      { name: 'Dean', city: 'Trivandrum' },
      { name: 'Deepak', city: 'Kollam' },
      { name: 'Ashwin', city: 'Calicut' },
      { name: 'Rolly', city: 'Alleppy' },
      { name: 'Nikhil', city: 'Kottayam' },
      { name: 'Raymond', city: 'Trivandrum' },
    ];
    return db.collection("leads").insertMany(myobj)
      .then(res => {
        console.log("Number of documents inserted: " + res.insertedCount);
        client.close();
      });
  })
  .catch(err => {
    console.error(err);
  });

   MongoClient.connect(url)
  .then(client => {
    const db = client.db("mashupdb");
    const myquery = { name: "John" };
    const newvalues = { $set: { name: "Johnny", city: "Chennai" } };
    
    return db.collection("leads").updateOne(myquery, newvalues)
      .then(res => {
        console.log("1 document updated");
        client.close();
      });
  })
  .catch(err => {
    console.error(err);
  });
  MongoClient.connect(url)
  .then(client => {
    const db = client.db("mashupdb");
    const myquery = { name: 'Deepak' };

    return db.collection("leads").deleteOne(myquery)
      .then(res => {
        console.log("1 document deleted");
        client.close();
      });
  })
  .catch(err => {
    console.error(err);
  });

 const client = new MongoClient(url);

client.connect()
  .then(() => {
    const db = client.db("mashupdb");
    const coll = db.collection("leads");
    const myquery = { name: /^D/ };

    return coll.deleteMany(myquery)
      .then(result => {
        console.log("Number of documents deleted: " + result.deletedCount);
        client.close();
      });
  })
  .catch(err => {
    console.error(err);
    client.close();
  });
  