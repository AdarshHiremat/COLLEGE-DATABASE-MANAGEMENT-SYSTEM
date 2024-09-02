const dbConfig = require('../config/dbConfig.js')

const {Sequelize, DataTypes} = require('sequelize')

const sequelize = new Sequelize(
    dbConfig.DB,
    dbConfig.USER,
    dbConfig.PASSWORD,{
        host: dbConfig.HOST,
        dialect: dbConfig.dialect,
        operatorAliases: false,

        pool:{
            max: dbConfig.pool.max,
            min: dbConfig.pool.min,
            acquire: dbConfig.pool.acquire,
            idle: dbConfig.pool.idle,
        },
        logging:false,
    }
)

sequelize.authenticate()
.then(() =>{
    console.log('Connected to database');
})
.catch(err => {
    console.log('Error: '+err);
})

const db = {}

db.Sequelize = Sequelize
db.sequelize = sequelize

db.cseStudents = require('./cseStudentModel.js')(sequelize, DataTypes)
db.cseStudentAcademics = require('./cseStudentAcademicsModel.js')(sequelize, DataTypes)
db.cseFaculty = require('./cseFacultyModel.js')(sequelize, DataTypes)
db.credentials = require('./credentialsModel.js')(sequelize, DataTypes)
db.logBook = require('./triggerModel.js')(sequelize, DataTypes)

db.cseStudents.hasOne(db.cseStudentAcademics,{foreignKey: "usn"})
db.cseStudentAcademics.belongsTo(db.cseStudents, {foreignKey: "usn"})


db.sequelize.sync({ force: false, alter: true})
.then(()=>{
    console.log('re-sync done');
})

async function createTriggerIfNeeded() {
    try {
      // Check if the trigger already exists
      cseFaculty=db.cseFaculty
      logBook=db.logBook
      const [triggers] = await sequelize.query(`SHOW TRIGGERS`);
      if (triggers.length === 0) {
        // Trigger doesn't exist, create it
        await sequelize.query(`
        CREATE TRIGGER faculty_log AFTER INSERT ON csefaculties
        FOR EACH ROW
        BEGIN
            INSERT INTO logbooks (facultyId,facultyName,createdAt) VALUES (NEW.facultyid,NEW.name,NOW());
        END;`
        );
        console.log('Trigger created successfully.');
      }
        else {
        console.log('Trigger already exists, skipping creation.');
      }
    } catch (error) {
      console.error('Error creating trigger:', error);
    }
  }
  
createTriggerIfNeeded();

module.exports = db