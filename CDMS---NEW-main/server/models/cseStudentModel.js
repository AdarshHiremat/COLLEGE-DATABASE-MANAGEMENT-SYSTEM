module.exports = (sequelize, DataTypes) =>{
    const CseStudent = sequelize.define("csestudent", {
        usn: {
            type: DataTypes.STRING,
            primaryKey: true,
            allowNull: false
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        gender: {
            type: DataTypes.STRING,
            allowNull: false
        },
        semester: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        section: {
            type: DataTypes.STRING,
            allowNull: true
        },
        phone: {
            type: DataTypes.BIGINT(11),
            allowNull: true
        }, 
        email: {
            type: DataTypes.STRING,
            allowNull: true
        }
    },{
        createdAt: false,
        updatedAt: false
    })
    return CseStudent
}