const db = require('../models')

const credential = db.credentials

const addUser = async(req, res) =>{
    let data = {
        username: req.body.username,
        email: req.body.email,
        role: req.body.role,
        password: req.body.password
    }
    const User = await credential.create(data)
    res.status(200).send(User)
}

const getUser = async( req, res) =>{
    let loginusername= req.params.loginusername
        let user = await credential.findOne({where: {username: loginusername}})
    res.status(200).send(user)
}

module.exports = {
    addUser,
    getUser
}