const models = require('./models')

// models.property.create({
//   name: 'Archstone',
//   units: 20
// })

// models.property.create({
//   name: 'Zenith Hills',
//   units: 10
// })

// models.property.create({
//   name: 'Willowspring',
//   units: 30
// })

// models.owner.create({
//   name: 'William',
//   age: 29
// })

// models.owner.create({
//   name: 'Jane',
//   age: 43
// })

// models.owner.create({
//   name: 'Yuki',
//   age: 67
// })

const test = async () => {
  const yuki = await models.owner.findOne({
    where: { name: 'Yuki' }
  })
  
  const archstone = await models.property.findOne({
    where: {
      name: 'Archstone'
    }
  })

  // yuki.addProperty(archstone)

  const zenithHills = await models.property.findOne({
    where: { name: 'Zenith Hills' }
  })

  // zenithHills.setOwner(yuki)
  zenithHills.getOwner().then(console.log)
}

test()