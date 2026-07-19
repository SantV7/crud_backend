import { Router, type Request, type Response } from "express";
import type { UserData } from "../types/UserData.types.ts";

export const router = Router()

router.get('/', (req: Request, res: Response) => {
    return res.status(200).json(`Default route`)
})

let userDatabase: UserData[] = []

router.post('/user', (req: Request, res: Response) => {
    const {name, age, profession, status, email} = req.body as UserData

    const userId = userDatabase[userDatabase.length] ? userDatabase[userDatabase.length].id : 1

    const newUser: UserData = {
        id: userId,
        name, 
        age,
        profession,
        status,
        email
    }

    res.status(201).json(newUser)
    userDatabase.push(newUser)
});



router.get('/user', (req: Request, res: Response) => {

});