// lab-2: RUD
// TIP: each of these requests returns a promise, so use await or .then to unpack the promise
// *** THIS IS SIMILAR TO AN API SO CALLING A FUNCTION TO THE DATABASE RETURNS A PROMISE 
// We'll need to use async/await or .then to console.log them 


const models = require('./models')
// -- 1. Print all the data in the owners table.
// use models.whicheverModel.findAll()
// models.owner.findAll().then(res => {
//   console.log(res)
// })
// -- 2. Print all the data in the properties table.

// models.property.findAll().then(res => {
//   console.log(res)
// })
// -- 3. Print just the names of all owners.
// use the same approach as #1, then just loop through the array

// models.owner.findAll().then(res => {
//   console.log(res)
//   let ownersArr = res
//   for(let owner of ownersArr) {
//     console.log(owner.dataValues.name)
//   }
// })
// -- 4. Print the names and ages of all owners who are older than 30.
// you can findAll() and then loop through them to perfom the age filter
// STRETCH: try this https://sequelizedocs.fullstackacademy.com/search-operators/
// models.owner.findAll().then(res => {
//   console.log(res)
//   let ownersArr = res
//   for(let owner of ownersArr) {
//     if(owner.dataValues.age > 30) {
//       console.log(owner)
//     }
//   }
// })
// -- 5. Look up William, save him to a variable, and print it
// models.whicheverModel.findOne({
  // where: {
    // whicheverAttribute: whicheverValue
//   }
// })

let findWill = async () => {
  try {
    let person = await models.owner.findOne({
      where: {
        name: 'William'
      }
    })
    console.log(person)
  } catch (error) {
    console.log(error.message)
  }
}
// findWill()

// -- 6. Look up archstone, and save it to a variable. Print out just its number of units
// same as above, but try to think through it instead of copy-pasting!
let archStoneUnits = async () => {
  try {
    let archStone = await models.property.findOne({
      where: {
        name: 'Archstone'
      }
    })
    console.log(archStone)
    console.log(archStone.units)
  } catch (error) {
    console.log(error.message)
  }
}
archStoneUnits()

// -- 5. Change Jane's age to 30.
// first look up jane and save it to a variable
// then, call .update({ age: 30 }) on that variable

// let updateJane = async () => {
//   let jane = await models.owner.findOne({
//     where: {
//       name: 'Jane'
//     }
//   })
//   console.log(jane)
//   jane.update({
//     age: 30
//   })
//   console.log(jane)
// }
// updateJane()

models.owner.findOne({
  where: {
    name: 'Jane'
  }
}).then(jane => jane.update({
  age: 43
})).then(res => console.log(res))


// -- 6. Change Jane's name to Janet.
// same as above, but try to think through it instead of copy-pasting!


// -- 7. Print the name of all properties whose name contains an `a`.
// you can use a js loop
// STRETCH: try to use the like operator https://sequelize.org/master/manual/model-querying-basics.html, go to the Operators section
