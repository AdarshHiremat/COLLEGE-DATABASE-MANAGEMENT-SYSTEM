module.exports = (sequelize, DataTypes) => {
    const logBook = sequelize.define("logBook", { 
        facultyId:{
            type: DataTypes.STRING,
        },
        facultyName:{
            type:DataTypes.STRING,
        },
        createdAt:{
            type:DataTypes.DATE,
        }
    },
    {
        timestamps:false,
    }
    )
    return logBook
}