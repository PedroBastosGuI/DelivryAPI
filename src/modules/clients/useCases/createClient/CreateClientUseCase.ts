import {prisma} from '../../../../database/prismaClient'
import {hash} from 'bcrypt'



interface ICreateClient{
    username: string
    password: string
}


class CreateClientUseCase {
    async execute({password,username}:ICreateClient) {
        const clientExist = await prisma.clientDelivery.findFirst({
            where:{
                name:{
                    mode:"insensitive"
                }
            }
        })

        if(clientExist){
            throw new Error("Cliente já cadastrado!")
        }

        const hashPassword = await hash(password, 10)

        const client = await prisma.clientDelivery.create({
            data:{
                name: username,
                password:hashPassword
            }
        })

        return client
    }

}

export {
    CreateClientUseCase
}