const express = require('express');
const app = express()

require("dotenv").config

const port = process.env.PORT||3005

app.listen(port, ()=>{
  console.log(`App is running on http://localhost:${port}`) 
})

const Route = require('./routes/route')
app.use('/get',Route)

// const reqFilter = (req, res, next)=>{
//     console.log("Hello");
//     next()
// }
// app.use(reqFilter)

// app.get('/home', (req, res)=>{
//     res.send("Welcome to my website's home page");
// })

// app.get('/', (req, res)=>{
//     res.send("Welcome");
// })