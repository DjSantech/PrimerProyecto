import {Router} from 'express'
import { createAccount } from './handlers';
import {body} from 'express-validator'

const router = Router ()

//Routing
router.get("/" , (req, res) => {
    res.send("Hola mundo en express")
});

/* Autenticacion y registro */
router.post('/auth/register',
    body ('handle')
        .notEmpty()
        .withMessage("El handle no puede ir vacio."),
    body ('name')
        .notEmpty()
        .withMessage("El name no puede ir vacio."),
    body ('email')
        .isEmail()
        .withMessage("El E-email no puede ir vacio."),
        body ('password')
        .notEmpty()
        .isLength({min: 8})
        .withMessage("El password es muy corto minimo ocho caracteres."),
    createAccount)

export default router