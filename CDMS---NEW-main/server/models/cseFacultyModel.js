module.exports = (sequelize, DataTypes) =>{
    const CseFaculty = sequelize.define("csefaculty", {
        facultyid: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        gender: {
            type: DataTypes.STRING,
            allowNull: true
        },
        designation: {
            type: DataTypes.STRING,
            allowNull: false
        },
        experience: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        phone: {
            type: DataTypes.BIGINT(11),
            allowNull: true
        },
        email: {
            type: DataTypes.STRING,
            allowNull: true
        },
        updatedAt: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: DataTypes.NOW
        }
    },{
        createdAt: false,
        updatedAt: false
    })
    return CseFaculty;
}