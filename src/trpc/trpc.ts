// giving us the entire API

import { initTRPC } from "@trpc/server";

const t = initTRPC.context().create()
export const router = t.router

// public procedure, it means this api its public 
export const publicProcedure = t.procedure