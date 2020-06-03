// require('dotenv').config()
const express = require('express')
const app = express()
const port = process.env.PORT // Port tidak kita state di sini karena kita akan gunakan server di bin
const cors = require('cors')

const routes = require("./routers/index.js")

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    next();
  });
  

const errorHandler =  require("./middlewares/errorHandler.js")

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())

// app.get('/', (req, res) => res.send('Hello World!'))

app.use('/', routes);

app.use(errorHandler);

// module.exports = app
app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))
// (Untuk kepentingan testing, app.listen ini akan kita comment. Kita akan gunakan bin -- server sebagai penggantinya)
// (Di sini kita ganti app.listen menjadi module.exports = app )