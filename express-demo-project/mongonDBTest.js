/* eslint-disable no-console */
const mongoose = require('mongoose');
const Person = require('./models/testModel');

const mongoDB = `mongodb://ping:123456@127.0.0.1/mydb`;
mongoose.connect(mongoDB, {
  useMongoClient: true
});

mongoose.Promise = global.Promise;

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  // we're connected!
  console.log('connected');
});


// Create an instance of model Person
const person_instance = new Person({
  name: 'Nancy',
  age: 18,
  gender: 'Female'
});

// Save the new model instance, passing a callback
person_instance.save(err => {
  if (err)
  {
    console.log(err);
    return;
  }
  console.log('Person data saved!');
});

// Or we can use create function
Person.create({
  name: 'John',
  age: 22,
  gender: 'Male' 
}, (err, instance) => {
  if (err)
  {
    console.log(err);
    return;
  }
  console.log('Person data saved!');
});


// Person.find({'name': 'Nancy'}, '', (err, person) => {
//   if (err)
//   {
//     console.log(err);
//     return;
//   }

//   console.log(person);
// });

// Return an query, we can config a set of filters and then execute
// const query = Person.find({ 'name': 'John' });
// query.limit(1);
// query.select('name age');
// query.exec((err, person) => {
//   if (err)
//   {
//     console.log(err);
//     return;
//   }

//   console.log(person);
// });

// Or
// Person.find().where().limit().sort().exec();
// Person.findOne();

mongoose.connection.close();

/* eslint-enale no-console */
