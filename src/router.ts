import {Router} from 'express'
import { createAccount } from './handlers';

const router = Router ()

//Routing
router.get("/" , (req, res) => {
    res.send("Hola mundo en express")
});

/* Autenticacion y registro */
router.post('/auth/register',createAccount)

export default router