const { owner, property } = require('./models')
const { Op } = require('sequelize');
// lab-3: associations

// Associate each property with an owner:
// Archstone - belongs to Yuki
// Zenith Hills - belongs to Yuki
// Willowspring - belongs to Jane

// first look up the property and assign it to a variable
// do the same for the owner
// then use either yourProperty.setOwner(newOwner)
// or yourOwner.addProperty(yourProperty)

// async function findPropertiesAndOwners() {
//     try {
//         const Archstone = await property.findOne({where: {name:'Archstone'}})
//         const Zenith_Hills = await property.findOne({where: {name:'Zenith Hills'}})
//         const Willowspring = await property.findOne({where: {name:'Willowspring'}})
//         console.log(Archstone.dataValues, Zenith_Hills.dataValues, Willowspring.dataValues, 'properties')
//         const Yuki = await owner.findOne({where: {name:'Yuki'}})
//         const Janet = await owner.findOne({where: {name:'Janet'}})
//         console.log(Yuki.dataValues, Janet.dataValues, 'owners')
//         Archstone.setOwner(Yuki)
//         Zenith_Hills.setOwner(Yuki)
//         Willowspring.setOwner(Janet)
//     } catch (error) {
//         console.log(error)
//     }
// }
// findPropertiesAndOwners()

// Print all the properties that are owned by Yuki.
// look up Yuki and save it to a variable
// then use yourVariable.getProperties()

// async function findYuki() {
//     const Yuki = await owner.findOne({where:{name:'Yuki'}})
//     const yukisProps = await Yuki.getProperties()
//     console.log(yukisProps.length, 'Number of properties Yuki owns')
//     for(let prop of yukisProps) {
//         console.log(prop.dataValues)
//     }
// }
// findYuki()

// Print the count (length) of how many properties Yuki owns.

    //look above

// Print the name of Willowspring's owner.
// look up willowspring, then use .getOwner()

// async function whoOwnsThis(str) {
//     const prop = await property.findOne({where:{name:`${str}`}})
//     const ownedBy = await prop.getOwner({attributes: ['name']})
//     console.log(ownedBy.dataValues)
// }
// whoOwnsThis('Willowspring')

// Change Willowspring so that is now owned by Yuki.
// look up both willowspring and yuki, and save them to variables

async function updateProp(whichprop, whichown) {
    try {
        const prop = await property.findOne({where:{name:`${whichprop}`}})
        const own = await owner.findOne({where:{name:`${whichown}`}})
        prop.setOwner(own)
    } catch (error) {
        console.log(error)
    }
}
updateProp('Willowspring', 'Ben')

// Print the names of the people who own properties that have 20 units or more
// look up all properties, then loop through them, check their units count, and if it meets the criteria find their owner

async function hardOne() {
    const allProps = await property.findAll({where: {units:{[Op.gte]:20}}})
    console.log(allProps)
    allProps.forEach(async prop => {
        const propOwner = await prop.getOwner({attributes:['name']})
        console.log(propOwner.dataValues)
    })
}
hardOne()

// STRETCH: try models.properties.findAll({
//   includes: 'owner'
// })
// SUPER STRETCH: you can combine this includes with the gte search operator
