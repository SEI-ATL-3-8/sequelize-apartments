# Sequelize Apartments

We are going to do some more SQL apartment **CRUD** again, but this time, we are doing it *sequelize* style!

### Getting started

- Clone this repo
- We will set up a sequelize project in this repo together
- Each part of the lab has a corresponding `.js` file for you to do your work in. 
- Add, commit, and push your changes when you finish each part
- Make a pull request!

### Starting a node project
Initilize node with the `npm init -y` command. 

Afterwards make sure to create a .gitignore file that tells git not to track your node modules!

### Seting up sequelize
- Install the sequelize package with: `npm i sequelize`
- A `node_modules` folder has appeared! We don't ever want to commit that folder. So create a `.gitignore` file and write "node_modules" in it, and git will never even see the node_modules folder.
- To generate the boilerplate for a sequelize project, run `sequelize init`. This will generate new folders: config, models, migrations, and seeders.
- Look at the `config/config.json` file that got generated: it tells sequelize what database to connect to. Let's make some changes to this file:
  - Change the database value to 'sequelize-apartments'.
  - Change the dialect to 'postgres'.
  - If you are on a mac, delete the username and password; otherwise change those values to your database username and password.
  - You can delete the 'test' and 'production' objects if you want; we don't need them but they also don't break anything.
- Run `sequelize db:create` to create the database. It will probably yell at you to install the `pg` package. Do this with `npm install pg`.
- Try `sequelize db:create` one more time. You may see an error that "database postgres does not exist", create this database using psql, and then one final `sequelize db:create` will (finally!) create our project database.

## Planning Databse Models

We are going to use the same tables as the SQL apartments lab. There will be two tables, `owners` and `properties` with a **one to many relationship**. 

*One owner can have many properties* so we will need a `foriegn key` in the properties table

- a table called `owners`, which should consist of:
  + `id` (this should be the primary key as well as a unique number that increments automatically)
  + `name` - name of owner
  + `age` - age of owner
- a `properties` table which should consist of:
  + `id` (this should be the primary key as well as a unique number that increments automatically)
  + `ownerId` which will be a `foriegn key` referencing the an owner id
  + `name` - name of property
  + `units` - number of units

Remember this **ERD**?

![ERD](./img/ERD.png)

Take a moment to plan out what tables you will need, what columns they will contain, and what their data types will be.

### Create Those Models!
We're going to use the `sequelize model:generate` command, which will give us two things:
1. A _migration_: the migration is a file that will contain our one-time database setup commands. (`CREATE TABLE etc...`)Previously, we've done this with `\i schema.sql` or something similar. But sequelize offers a lot of upgrades on our old system.
1. A _model_: the model is a javascript object that will let us send CRUD commands to our database.

Remember the syntax we need:
```bash
sequelize model:generate --name=yourModelNameInSingular --attributes=firstColumn:firstDataType,secondColumn=secondDataType
```

**Note** Sequelize will handle the pluralization of models and tables for us, so when we create our models, they should be singular. Read more [here](https://sequelize.org/master/manual/naming-strategies.html#singular-vs--plural). Sequelize will also handle creating an auto-incrementing id, createdAt, and updatedAt column on every model, so don't supply those in the attributes!

<details>
  <summary>What Do The Commands Look Like?</summary>

  ```bash
  sequelize model:generate --name=owner --attributes name:text,age:integer
  sequelize model:generate --name=property --attributes name:text,units:integer,ownerId:integer
  ```
</details>

Once your models are created, check the files in  the`./models` and in `./migrations` folders to make sure they are right. Sequelize uses the migrations to create tables in the database and the models to interface with them.

### Migration time! 
`sequelize db:migrate` will tell sequelize to run all migration files in the migrations folder. Run this command, then fire up the `psql` shell, connect to our database and use `\dt` to see the new tables! Don't worry if you find a mistake at this point, sequelize has got your back. Use the command `sequelize db:migrate:undo` if you need to make a correction.

### Lets Do Some **CRUD**!
Complete the prompts in each section file of the lab. You can run your files using `node` command. *e.g* `node lab-1.js`

You're going to want to keep an eye on your database tables (using psql or tablePlus) to see if your commands are having the desired effects!

**WATCH OUT!** if you solve one of the prompts, but don't comment it out, it will keep running everytime you run the file with `node`!

* `lab-1.js`: inserting data into our db
* `lab-2.js`: querying & updating

### Using sequelize's associations
Sequelize offers some tools called _associations_ that will write JOIN statements for us automagically. To activate these associations, we need some commands in our model files:

*One owner can have many properties,* so we need to update `./models/owner.js` to reflect this:

```javascript
  static associate(models) {
    // define association here
    models.owner.hasMany(models.property)
  }
```
This line automatically generates these functions:
```js
// 1)
// assuming that yuki has already been looked up with something like
// const yuki = await models.owner.findOne({
//   where: { name: 'Yuki' }
// })
yuki.getProperties() // this will give us all properties Yuki owns
// by running this sql:
// SELECT * FROM properties WHERE ownerId = <yuki's id>


// 2)
// assuming we have already looked up a property with
// const willowspring = await models.property.findOne({
//   where: { name: 'Willowspring' }
// })
yuki.addProperty(willowspring) // this will set willowspring's ownerId to yuki's id
// by running this sql:
// UPDATE properties
// SET ownerId = <yuki's id>
// WHERE properties.id = <willowspring's id>
```



*One property can have only one owner,* so we need to update `./models/property.js` to reflect this:

```javascript
  static associate(models) {
    // define association here
    models.property.belongsTo(models.owner)
  }
```
This line automatically generates these functions:
```js
// 1)
// assuming we have already looked up a property with
// const archstone = await models.property.findOne({
//   where: { name: 'Archstone' }
// })
archstone.getOwner() // this will give us archstone's owner
// by running sql like this:
// SELECT * FROM owners
// WHERE id = <archstone's ownerId>


// 2)
// assuming we have already looked up an owner with
// const jane = await owner.property.findOne({
//   where: { name: 'Jane' }
// })
archstone.setOwner(jane) // this will set archstone's ownerId to Jane's id
// by running sql like this:
// UPDATE properties
// SET ownerId = <jane's id>
// WHERE properties.id = <archstone's id>
```

* `lab-3.js`: working with a 1-to-many association
