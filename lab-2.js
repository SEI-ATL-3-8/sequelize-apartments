const { owner, property } = require('./models')
const { Op } = require('sequelize');

// lab-2: RUD
// TIP: each of these requests returns a promise, so use await or .then to unpack the promise

// -- 1. Print all the data in the owners table.
// use models.whicheverModel.findAll()
  // const allOwners = owner.findAll().then((allOwners) => {
  //   console.log(allOwners.dataValues, '#1')
  // })

// -- 2. Print all the data in the properties table.
  // const allProperties = property.findAll().then(allProperties => {
  //   console.log(allProperties.dataValues, '#2')
  // })

// -- 3. Print just the names of all owners.
// use the same approach as #1, then just loop through the array
  // owner.findAll({attributes: ['name']}).then(ownersNames => {
  //   ownersNames.forEach(owner => {
  //     console.log(owner.dataValues, '#3')
  //   });
  // })


// -- 4. Print the names and ages of all owners who are older than 30.
// you can findAll() and then loop through them to perfom the age filter
// STRETCH: try this https://sequelizedocs.fullstackacademy.com/search-operators/

  // owner.findAll({
  //   attributes: ['name', 'age'],
  //   where: {
  //     age: {[Op.gt]:30}
  //   }
  // }).then(data => {
  //   data.forEach(element => {
  //     console.log(element.dataValues, '#4')
  //   });
  // })

// -- 5. Look up William, save him to a variable, and print it
  // owner.findOne({
  //   where: {
  //     name: 'William'
  //   }
  // }).then(data => console.log(data.dataValues, '#5'))

// -- 6. Look up archstone, and save it to a variable. Print out just its number of units
// same as above, but try to think through it instead of copy-pasting!

  // property.findOne({
  //   attributes: ['units'],
  //   where: {
  //     name: {[Op.iLike]:'archstone'}
  //   }
  // }).then(data => {
  //   console.log(data.dataValues, '#6')
  // })

// -- 7. Change Jane's age to 30.
// first look up jane and save it to a variable
// then, call .update({ age: 30 }) on that variable

  // owner.findOne({
  //   where: {
  //     name: 'Jane'
  //   }
  // }).then(jane => {
  //   jane.update({age:30})
  // })

// -- 8. Change Jane's name to Janet.
// same as above, but try to think through it instead of copy-pasting!

  // owner.findOne({
  //   where: {
  //     name: 'Jane'
  //   }
  // }).then(jane => {
  //   jane.update({name:'Janet'})
  // })

// -- 9. Print the name of all properties whose name contains an `i`.
// you can use a js loop
// STRETCH: try to use the like operator https://sequelize.org/master/manual/model-querying-basics.html, go to the Operators section

  // property.findAll({
  //   attributes: ['name'],
  //   where: {
  //     name: {[Op.iLike]:'%i%'}
  //   }
  // }).then(names => {
  //   for(let name of names){
  //     console.log(name.dataValues, '#9')
  //   }
  // })
