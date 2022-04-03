const express = require('express')
const app = express()
const port = 3000
app.get('/', (req, res) => res.send('There There :p'))
app.listen(port, () => console.log(`eh yo, listening on port ${port}!`))