const fs = require('node:fs/promises')

const text = fs.readFile('./archivo.txt', 'utf-8')
  .then(text => {
    console.log(text)
  })

console.log('Hacer cosas mientras lee archivo...')
