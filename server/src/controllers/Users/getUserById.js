import {User} from '../../models/user.js'

export const getUserById = async (req,res, next)=>{
    const {id}=req.params
    try {
        const user = await User.findByPk(id)
         res.status(200).send(user)
    } catch (error) {
        res.status(400).send(error)   
    }
}