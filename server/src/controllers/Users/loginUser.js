import {User} from '../../models/user.js'
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken";

export const loginUser = async (req,res,next)=>{
    const {email, password}=req.body;

    const user = await User.findOne({where:{email:email}})
    if(!user) return res.status(400).json({error:true, meesage: "Email Doesn't exist"})

    const validPassword = await bcrypt.compare(password, user.hashedPassword)

    if(!validPassword) return res.status(400).json({error:true, message: "Password Incorrect!!"})

    //Accesss Token
    const token = jwt.sign({
        id:user.id,
        name:user.username
    }, process.env.TOKEN_SECRET)

    res.header('auth-token', token).json({
        error:null,
        data: {
            token
        }
    })
}