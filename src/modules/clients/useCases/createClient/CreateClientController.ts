import {Request, response, Response} from 'express'
import {CreateClientUseCase} from './CreateClientUseCase'

class CreateClientController{

    async handle(req: Request, res: Response){
       try{
            const {name, password} = req.body

            const createClientUseCase = new CreateClientUseCase()

            const resultClientCreate = await createClientUseCase.execute({password:password, username:name})

            return res.json({
                "message": "Cliente criado com sucesso",
                "client":resultClientCreate
            })
        }catch(err:any){
            res.json({
                "message":err.message,
                "error":err
            })
        }
    }
}

export {
    CreateClientController
}