import type {Request,Response} from 'express' 
import User from "../models/user" 
import {validationResult} from 'express-validator'
import { hashPassword } from '../utils/auth'
import slug from 'slug'


export const createAccount = async (req : Request, res: Response) =>
{   
    //manejo de errores
    let errors = validationResult(req)
    if (!errors.isEmpty()){
        return res.status(400).json({errors: errors.array()})
    }


    const {email,password} = req.body
    const userExists = await User.findOne({email})

    if(userExists){
        const error = new Error("Un usuario ya esta registrado con ese gmail")
        return res.status(409).json({error: error.message})
    } else {
        console.log('Nuevo usuario')
    }
    
    const handle = slug(req.body.handle, '')
    const handleExists = await User.findOne({handle})
    if(handleExists){
        const error = new Error("Nombre de usuario no disponible")
        return res.status(409).json({error: error.message})
    } else {
        console.log('Nombre de usuario disponible')
    }
    


    const user = new User(req.body)
    user.password = await hashPassword(password)
    user.handle = await handle

    await user.save()
    
    res.status(201).send('Registo creado correctamente')
}