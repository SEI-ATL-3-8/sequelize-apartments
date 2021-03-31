// lab-3: associations

// Associate each property with an owner:
// Archstone - belongs to Yuki
// Zenith Hills - belongs to Yuki
// Willowspring - belongs to Jane
const models = require('./models')

const setOwners = async () => {

// first look up the property and assign it to a variable
// do the same for the owner
// then use either yourProperty.setOwner(newOwner)
// or yourOwner.addProperty(yourProperty)


    const archStone = await models.property.findOne({
        where: {name: 'Archstone'}
    })
    const zenithHills = await models.property.findOne({
        where: {
            name: 'Zenith Hills'
        }
    })
    const willowSpring = await models.property.findOne({
        where: {
            name: 'Willowspring'
        }
    })
    const yuki =await models.owner.findOne({
        where: {
            name: 'Yuki'
        }
    })
    const jane =await models.owner.findOne({
        where: {
            name: 'Jane'
        }
    })
    // console.log(archStone)
    // console.log(zenithHills)
    // console.log(zenithHills)
    // console.log(yuki)
    // console.log(jane)
    
    // adding a child to the parent 
    yuki.addProperty(archStone)
    yuki.addProperty(zenithHills)
    jane.addProperty(willowSpring)

    // or

    // adding a parent to the child 
    /* 
    willowSpring.setOwner(jane)
    archStone.setOwner(yuki)
    zenithHills.setOwner(yuki)
    */
}
// setOwners()


// Print all the properties that are owned by Yuki.
// look up Yuki and save it to a variable
// then use yourVariable.getProperties()
const yukiProperties = async () => {
    const yuki = await models.owner.findOne({where: {name: 'Yuki'}})
    const properties = await yuki.getProperties()
    console.log(properties)
}
yukiProperties()


// Print the count (length) of how many properties Yuki owns.

// Print the name of Willowspring's owner.
// look up willowspring, then use .getOwner()

// Change Willowspring so that is now owned by Yuki.
// look up both willowspring and yuki, and save them to variables


// Print the names of the people who own properties that have 20 units or more
// look up all properties, then loop through them, check their units count, and if it meets the criteria find their owner
// STRETCH: try models.properties.findAll({
//   includes: 'owner'
// })
// SUPER STRETCH: you can combine this includes with the gte search operator
