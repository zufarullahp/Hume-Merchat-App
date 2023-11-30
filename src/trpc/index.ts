
import { authRouter } from "./auth-router";
import { publicProcedure, router } from "./trpc";


// custome type safe API
export const appRouter = router({
    auth: authRouter,
})

export type AppRouter = typeof appRouter