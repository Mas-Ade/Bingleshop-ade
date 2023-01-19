// import module dotenv
const dotenv = require('dotenv')

// inisialisasi path untuk dipakai dotenv (dalam hal ini filenya .env)
dotenv.config({path: '.env'})

// import app.js
const app = require('./app')

//  inisialisasi port menggunakan process.env
const port = process.env.PORT

// running server 3003 dari port
app.listen(port, () => {
    console.log(`server running on port ${port}`)
})