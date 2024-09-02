module.exports = (sequelize, DataTypes) =>{
    const CseStudentAcademics = sequelize.define("csestudentacademics",{
        usn:{
            type: DataTypes.STRING
        },
        ia1: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        ia2: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        ia3: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        attendance: {
            type: DataTypes.INTEGER,
            allowNull: true
        }
    },
    {
        createdAt: false,
        updatedAt: false
    })
    return CseStudentAcademics
}