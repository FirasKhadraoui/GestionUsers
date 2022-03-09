const Users = require('../models/users.models')
const ValidateUser = require('../validation/users.validation')


const addUser = async (req, res) => {
    const { errors, isValid } = ValidateUser(req.body)
    try {
        if (!isValid) {
            res.status(404).json(errors);
        }
        else {
            await Users.findOne({ Email: req.body.Email }).then(async (exist) => {
                if (exist) {
                    errors.Email = "User Exist";
                    res.status(404).json(errors);
                }
                else {
                    await Users.create(req.body)
                    res.status(201).json({ message: 'User add with success' });
                }
            });
        }
    } catch (error) {
        console.log(error.message)
    }
};

const findAllUsers = async (req, res) => {
    try {
        const data = await Users.find()
        res.status(201).json({ data })
    } catch (error) {
        console.log(error.message)
    }
}

const findUser = async (req, res) => {
    try {
        const data = await Users.findOne({ _id: req.params.id })
        res.status(201).json(data)
    } catch (error) {
        console.log(error.message)
    }
}

const updateUser = async (req, res) => {
    const { errors, isValid } = ValidateUser(req.body)
    try {
        if (!isValid) {
            res.status(404).json(errors);
        }
        else {
            const data = await Users.findOneAndUpdate( //Prend 3 paramétres
                { _id: req.params.id },
                req.body,
                { new: true }
            )
            res.status(201).json(data)
        }
    } catch (error) {
        console.log(error.message)
    }
}

const deleteUser = async (req, res) => {
    try {
        const data = await Users.findOneAndRemove({ _id: req.params.id })
        res.status(201).json({ message: "User a été suprimé " })
    } catch (error) {
        console.log(error.message)
    }
}

module.exports = {
    addUser, findAllUsers, findUser, deleteUser, updateUser
}