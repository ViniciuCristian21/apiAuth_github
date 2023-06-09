import { FastifyInstance } from "fastify";

export async function authRoutes(app: FastifyInstance) {
    
    app.get('/user', async (req, reply) => {
        reply.status(200).send("OK")
    })
}