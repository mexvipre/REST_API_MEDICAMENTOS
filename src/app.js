import express from 'express'
import medicamentosRoutes from './routes/medicamentos.routes.js'

const app = express()

app.use(express.json()) 


app.use('/api/',medicamentosRoutes) 

export default app
