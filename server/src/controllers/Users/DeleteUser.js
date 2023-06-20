import {User} from '../../models/user.js'

export const deleteUserById = async (req,res, next)=>{
    const {id}=req.params

    try {
        await User.destroy({where:{id:id}})
        res.status(200).send(`User with id : ${id} has been deleted forever`)
    } catch (error) {
        res.status(400).send(error)
    }
}