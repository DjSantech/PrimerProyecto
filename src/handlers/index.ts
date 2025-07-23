import type {Request,Response} from 'express' 
import User from "../models/user" 
import { hashPassword } from '../utils/auth'
export const createAccount = async (req : Request, res: Response) =>
{   

    const {email,password} = req.body
    const userExists = await User.findOne({email})

    if(userExists){
        const error = new Error("El usuario ya esta registrado")
        return res.status(409).json({error: error.message})
    } else {
        console.log('No existe')
    }
    

    const user = new User(req.body)
    const hash = await hashPassword(password)

    console.log(hash)

    await user.save()
    
    res.status(201).send('Registo creado correctamente')
}