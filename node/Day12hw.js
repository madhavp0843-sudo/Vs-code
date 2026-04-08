const { MongoClient } = require('mongodb');
const url = "mongodb://localhost:27017/";

MongoClient.connect(url)
  .then(client => {
    const db = client.db("Bkstore");
    const myobj = [
       { title: "Java Basics", author: "John", location: "Shelf A" },
       { title: "Node.js Guide", author: "Dean", location: "Shelf B" },
       { title: "Python 101", author: "Deepak", location: "Shelf D" },
       { title: "C++ Mastery", author: "Dean", location: "Shelf C" },
       { title: "Data Structures", author: "Ravi", location: "Shelf B" },
       { title: "React Handbook", author: "Derek", location: "Shelf D" }
    ];
    
    return db.collection("shelfs").insertMany(myobj)
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
    const db = client.db("Bkstore");
    const myquery = { title: "Java Basics" };
    const newvalues = { $set: { tile: "Java Basics", location: "Shelf Z" } };
    
    return db.collection("shelf").updateOne(myquery, newvalues)
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
    const db = client.db("Bkstore");
    const myquery = { name: "Dean" };
    const newvalues = { $set: { author: "Dean", location: "Shelf E" } };
    
    return db.collection("shelf").updateOne(myquery, newvalues)
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
    const db = client.db("Bkstore");
    const myquery = { title: 'Python 101' };

    return db.collection("shelf").deleteOne(myquery)
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
    const db = client.db("Bkstore");
    const coll = db.collection("shelf");
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
