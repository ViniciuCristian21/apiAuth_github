import fastify from 'fastify'
import cors from '@fastify/cors'
import { authRoutes } from './routes/auth'
import 'dotenv/config'
import jwt from '@fastify/jwt'

const app = fastify()

app.register(cors, {
    origin: true
})
app.register(jwt, {
    secret: 'minhasecret'
})
app.register(authRoutes)

app.listen({
    port: 3333,
})
.then(() => {
    console.log('HTTP server running on http://localhost:3333')
})