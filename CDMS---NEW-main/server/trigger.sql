const triggerSQL = `
        CREATE TRIGGER update_updatedAt
        BEFORE INSERT ON csefaculty
        FOR EACH ROW
        BEGIN
            SET NEW.updatedAt = NOW();
        END;`
    ;

    try {
        await sequelize.query(triggerSQL);
    } catch (error) {
        console.error( error);
    }

    return triggerSQL;