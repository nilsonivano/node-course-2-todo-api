const { MongoClient, ObjectID } = require('mongodb');

const obj = new ObjectID();
console.log(obj);
MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
  if (err) {
    console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');
  const db = client.db('TodoApp');

  // deleteMany
  db.collection('Todos').deleteMany({text: 'Eat lunch'})

  // delete one


  // findOneandDelete
  client.close();
});
