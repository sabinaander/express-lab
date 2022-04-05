const express = require('express')
const app = express()
const port = 3001

app.get('/user', (req, res) => {
    res.send('Sabina')
})

app.listen(port, () => {
    console.log('app is now running on port:' + port)
})