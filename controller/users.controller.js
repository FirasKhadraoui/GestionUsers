const Users = require ('../models/users.models')

const addUser =  async (req,res)=>{
    try {
        await Users.create(req.body)
        res.status(201).json({message:'User add with success'})
    } catch (error) {
        console.log(error.message)
    }
}

const findAllUsers =  async (req,res)=>{
    try {
        const data = await Users.find()
        res.status(201).json({data})
    } catch (error) {
        console.log(error.message)
    }
}

const findUser =  async (req,res)=>{
    try {
        const data = await Users.findOne({_id:req.params.id})
        res.status(201).json(data)
    } catch (error) {
        console.log(error.message)
    }
}

const updateUser =  async (req,res)=>{
    try {
        const data = await Users.findOneAndUpdate( //Prend 3 paramétres
            {_id:req.params.id},
            req.body,
            {new: true}
        )
        res.status(201).json(data)
    } catch (error) {
        console.log(error.message)
    }
}

const deleteUser =  async (req,res)=>{
    try {
        const data = await Users.findOneAndRemove({_id:req.params.id})
        res.status(201).json({message:"User a été suprimé "})
    } catch (error) {
        console.log(error.message)
    }
}

module.exports={
    addUser,findAllUsers,findUser,deleteUser,updateUser
}