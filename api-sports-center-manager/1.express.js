const express = require('express')
const ditto = require('./tareas/ditto.json')

const PORT = process.env.PORT ?? 1234

const app = express()
app.disable('x-powered-by')

// middleware
app.use(express.json())
// app.use((req, res, next) => {
//   if (req.method !== 'POST') return next()
//   if (req.headers['content-type' !== 'application/json']) return next()

//   let body = ''

//   req.on('data', chunk => {
//     body += chunk.toString()
//   })

//   req.on('end', () => {
//     const data = JSON.parse(body)
//     data.timestamp = Date.now()
//     // mutar la request meter la info en el req.body
//     req.body = data
//     next()
//   })
// })

app.get('/pokemon/ditto', (req, res) => {
  // envia info
  res.json(ditto)
})

app.post('/pokemon', (req, res) => {
  // req.body guardar en bbdd
  res.status(201).json(req.body)
})

app.use((req, res) => {
  res.status(404).send('<h1>404</h1>')
})

app.listen(PORT, () => {
  console.log(`server listening on port http://localhost:${PORT}`)
})
