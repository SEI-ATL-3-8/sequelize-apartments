const models = require('./models')


// TIP: each of these requests returns a promise, so use await or .then to unpack the promise

// -- 1. Print all the data in the owners table.
// use models.whicheverModel.findAll()

// -- 2. Print all the data in the properties table.

// -- 3. Print just the names of all owners.
// use the same approach as #1, then just loop through the array

// -- 4. Print the names and ages of all owners who are older than 30.
// you can findAll() and then loop through them to perfom the age filter
// STRETCH: try this https://sequelizedocs.fullstackacademy.com/search-operators/

// models.owner.findAll().then((allOwners) => {
//   for (let owner of allOwners) {
//     if (owner.age >= 30) {
//       console.log(owner.name);
//     }
//   }

//   for (let i = 0; i < allOwners.length; i++) {
//     if (allOwners[i].age >= 30) {
//       console.log(allOwners[i].name);
//     }
//   }
// })


// -- 5. Look up William, save him to a variable, and print it
// models.whicheverModel.findOne({
  // where: {
    // whicheverAttribute: whicheverValue
//   }
// })
const willTest = async() => {
  const will = await models.owner.findOne({
    where: {
      name: 'William'
    }
  })
  // SELECT * FROM owners WHERE name = 'William';
  
  console.log(will);
}

// willTest()


// -- 6. Look up archstone, and save it to a variable. Print out just its number of units
// same as above, but try to think through it instead of copy-pasting!


// -- 5. Change Jane's age to 30.
// first look up jane and save it to a variable
// then, call .update({ age: 30 }) on that variable

// -- 6. Change Jane's name to Janet.
// same as above, but try to think through it instead of copy-pasting!

// -- 7. Print the name of all properties whose name contains an `a`.
// you can use a js loop
// STRETCH: try to use the like operator https://sequelize.org/master/manual/model-querying-basics.html, go to the Operators section
