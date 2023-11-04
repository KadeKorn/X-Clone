import { PrismaClient } from "@prisma/client";

declare global {
    var prisma: PrismaClient | undefined
}

const client = globalThis.prisma || new PrismaClient()
if (process.env.NODE_ENV !== 'production') globalThis.prisma = client;

export default client;

//The code initializes and configures a PrismaClient instance for interacting with the database.
//It checks if a global instance of PrismaClient is already present to enable reusing the same instance across the application (particularly in a non-production environment).
//It ensures that in a development environment, the application does not create a new instance of PrismaClient on each import, which conserves resources and maintains performance.
//The configured PrismaClient is made available as a default export for use in other parts of the application.