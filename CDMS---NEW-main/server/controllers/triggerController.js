const db = require('../models')

const Trigger = db.trigger

const addData = async (req, res) =>{
    let data = {
        role: req.body.role
    }

    const logIn = await Trigger.create(data)
    res.status(200).send(logIn)
}

module.exports = {
    addData
}