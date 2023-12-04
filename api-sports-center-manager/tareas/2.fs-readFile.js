const fs = require('node:fs')

const text = fs.readFile('./archivo.txt', 'utf-8', (err, text) => {
  console.log(text)
})

console.log('Hacer cosas mientras lee archivo...')
