const express = require("express");
const mainRouter = require('routes/index')

const app = express()

app.use('/api/v1', mainRouter)
app.use(cors({
    // specify frontend url for cors
    origin: ''
}))

app.use(express.json())

app.listen(() => {
    console.log('App Started in port 3000');
})