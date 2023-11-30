import { AuthCredentialsValidator } from "../lib/validators/account-credentials-validator";
import { router,publicProcedure } from "./trpc";
import { getPayloadClient } from "../get-payload";
import { TRPCError } from "@trpc/server";

export const authRouter = router({
    createPayloadUser: publicProcedure
    .input(AuthCredentialsValidator)  
    .mutation( async ({input}) => {
        // destructure the input 
        const{email,password}=input
        const payload = await getPayloadClient()

        //  check if user already have account 
        const {docs : users} = await payload.find({
            collection:'users',
            where : {
                email:{
                    equals:email,
                }
            }
        })
        if(users.length !==0)
        throw new TRPCError({ code : 'CONFLICT'})
        
        await payload.create({
            collection:'users',
            data:{
                email, 
                password,
                role:'user'
            }
        })
        return {success:true, sentToEmail : email}
    })
})