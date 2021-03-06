// lab-3: associations

// Associate each property with an owner:
// Archstone - belongs to Yuki
// Zenith Hills - belongs to Yuki
// Willowspring - belongs to Jane

// first look up the property and assign it to a variable
// do the same for the owner
// then use either yourProperty.setOwner(newOwner)
// or yourOwner.addProperty(yourProperty)



// Print all the properties that are owned by Yuki.
// look up Yuki and save it to a variable
// then use yourVariable.getProperties()

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
