import fastify from 'fastify'
import cors from '@fastify/cors'
import { authRoutes } from './routes/auth'


const app = fastify()

app.register(cors, {
    origin: true
})

app.register(authRoutes)

app.listen({
    port: 3333,
})
.then(() => {
    console.log('HTTP server running on http://localhost:3333')
})