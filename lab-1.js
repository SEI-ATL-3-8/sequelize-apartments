const models = require('./models')
// lab-1: inserting data
// TIPS:
// 1) pull in all our models in one big package with const models = require('./models/)
// 2) access a single model out of the package with models.modelName, where modelName is a placeholder for the modelName string found in a model file
// 3) create a row in your table with models.whicheverModel.create({ attr1: value1, attr2: value2 })
// 4) don't give the properties an ownerId yet, that is coming next!

// Insert the following owners
// William - age 29
// Jane - age 43
// Yuki - Age 67

// Insert the following properties
// Archstone - 20 units
// Zenith Hills - 10 units
// Willowspring - 30 units

models.owner.create({
  name: 'William',
  age: 29
})
models.owner.create({
  name: 'Jane',
  age: 43
})
models.owner.create({
  name: 'Yuki',
  age: 67
})
models.property.create({
  name: 'Archstone',
  units: 20
})
models.property.create({
  name: 'Zenith Hills',
  units: 10
})
models.property.create({
  name: 'Willowspring',
  units: 30
})


