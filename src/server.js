//importa e cria instância do express
import express from 'express'
const app = express()
//adiciona porta para o servidor
const PORT = 3000
//adiciona rota principal
app.get('/', (req, res) => {
    res.send('Hello World')
})

//adiciona execução do servidor
app.listen(PORT, () => {
    console.log(`Server executando em http://localhost:${PORT}`)
})

import routes from './routes/index.js'
app.use('/api', routes)

app.use(express.json())
